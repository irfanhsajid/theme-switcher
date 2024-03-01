/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { Service } from "../../utils/http";
import { confirmAlert, polishStringData, setQueryParams } from "../../utils/helperFunction";
import { toast } from "react-toastify";
import { useAuth } from "../auth/AuthProvider";
import { useForm } from "react-hook-form";

const ProjectsContext = createContext();
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within an ProjectsProvider');
  }
  return context;
}
export const ProjectsProvider = (children) => {
  const { headers, multipartHeaders } = useAuth();
  const [active, setActive] = useState({
    openQuestionModal: false,
    openTicket: false,
    openProgressModal: false,
    projectResponse: false,
    openPaymentHistoryModal: false,
    addNew: false
  });

  const [loading, setLoading] = useState(false);
  const [projectQuestion, setProjectQuestion] = useState();
  const [projectsList, setProjectsList] = useState({});
  const [projectById, setProjectById] = useState();
  const [paymentDetails, setPaymentDetails] = useState();
  //add payment
  const [editPayment, setEditPayment] = useState(null);
  const { handleSubmit, register, formState: { errors }, watch, getValues, setValue, setError, reset } = useForm({
    mode: 'all',
    defaultValues: editPayment || {
      payment_method: '',
      payment_reference: '',
      payment: '',
      invoice: '',
      currency: ''
    }
  })
  useEffect(() => {
    reset(editPayment);
    // eslint-disable-next-line
  }, [editPayment])
  useEffect(() => {
    setValue('currency', paymentDetails?.currency);
    // eslint-disable-next-line
  }, [paymentDetails])
  //handle project
  const [projectAllProgressStatus, setProjectAllProgressStatus] = useState([]);
  //your code
  const getProjectsList = async (queryParams) => {
    await Service.get('/order/all/' + setQueryParams(queryParams), { headers })
      .then(res => {
        setProjectsList(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const getProjectById = async (id) => {
    setLoading(true);
    await Service.get(`/order/${id}/`, { headers })
      .then(res => {
        console.log(res);
        setProjectById(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
      })
  }
  const updateProjectBasicInfo = async (id, data) => {
    setLoading(true);
    await Service.patch(`/order/${id}/`, data, { headers })
      .then(res => {
        console.log(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
  }
  const handleProject = () => {
    const getOrderAllProgressStatus = async (id) => {
      setLoading(true);
      await Service.get(`/order/allprogress/${id}/`, { headers })
        .then(res => {
          setProjectAllProgressStatus(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
    }
    const addOrderProgressStatus = async (type, data) => {
      setLoading(true);
      const url = type === 'predefined_status' ? '/order/progress/' : '/order/progress/comment/';
      await Service.post(url, data, { headers })
        .then(res => {
          getOrderAllProgressStatus(data.order);
          console.log(res);
          toast.success('Progress added successfully');
          setLoading(false);
          setActive(prev => ({ ...prev, openProgressModal: false }));
        })
        .catch(err => {
          console.log(err);
          toast.error(err.response.data);
          setLoading(false);
        })
      console.log(type, url, data)
    }
    const deleteOrderProgressStatus = (type, id) => {
      const url = type === 'predefined_status' ? '/order/progress/' : '/order/progress/comment/';
      confirmAlert(async () => {
        setLoading(true);
        await Service.delete(url + `${id}/`, { headers })
          .then(res => {
            setProjectAllProgressStatus(prev => prev.filter(item => item.id !== id));
            console.log(res);
            toast.success('Progress deleted successfully');
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
            toast.error(err.response.data);
            setLoading(false);
          })
      }, {
        title: 'Are you sure?',
        text: 'You want to delete this progress?',
      })
    }

    const askNewQuestionForProject = async (data, id) => {
      setLoading(true);
      const url = id ? `/question/extra/${id}/` : '/question/extra/';
      await Service[id ? 'patch' : 'post'](url, data, { headers })
        .then(res => {
          console.log(res);
          toast.success('Question added successfully');
          setLoading(false);
          setActive(prev => ({ ...prev, openQuestionModal: false }));
          if (projectQuestion && id) {
            const index = projectQuestion.findIndex(item => item.id === id);
            const updatedQuestion = [...projectQuestion];
            updatedQuestion[index] = res.data;
            setProjectQuestion(updatedQuestion);
          }
        })
        .catch(err => {
          console.log(err);
          toast.error(err.response.data);
          setLoading(false);
        })
    }

    const deleteAskedQuestionForProject = (id) => {
      confirmAlert(async () => {
        setLoading(true);
        await Service.delete(`/question/extra/${id}/`, { headers })
          .then(res => {
            setProjectQuestion(prev => prev.filter(item => item.id !== id));
            console.log(res);
            toast.success('Question deleted successfully');
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
            toast.error(err.response.data);
            setLoading(false);
          })
      }, {
        title: 'Are you sure?',
        text: 'You want to delete this question?',
      })
    }

    const getQuestionForProject = async (id) => {
      setLoading(true);
      await Service.get(`/question/extra/order/${id}/`, { headers })
        .then(res => {
          setProjectQuestion(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
    }
    const updateProjectStatus = async (id, data) => {
      setLoading(true);
      await Service.patch(`/order/project/status/${id}/`, data, { headers })
        .then(res => {
          setLoading(false);
          setProjectById(prev => ({ ...prev, ...res.data }));
          toast.success(`Status updated to ${polishStringData(res.data.order_status)}`);
        })
        .catch(err => {
          setLoading(false);
          toast.error(err.response.data);
        })
    }
    const updateProjectPriority = (id, data) => {
      confirmAlert(async () => {
        setLoading(true);
        await Service.patch(`/order/project/priority/${id}/`, data, { headers })
          .then(res => {
            console.log(res);
            setProjectById(prev => ({ ...prev, order_price_details: { ...prev.order_price_details, ...res.data } }));
            setLoading(false);
            toast.success('Priority updated successfully');
          })
          .catch(err => {
            setLoading(false);
            toast.error(err.response.data);
          })
      }, {
        title: 'Are you sure?',
        text: `You want to update priority to ${data.priority_choices}?`,
        confirmBtnText: 'Yes, update!'
      })
    }
    // verify extra questions: 
    const updateQuestionsVerifiedStatus = (id) => {
      confirmAlert(async () => {
        setLoading(true);
        await Service.patch(`/question/extra/verify/${id}/`, '', { headers })
          .then(res => {
            setProjectQuestion(prev => prev.filter(item => item?.id !== id));
            console.log(res?.data.id);
            toast.success('Question Aprroved successfully');
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
            toast.error(err.response.data);
            setLoading(false);
          })
      }, {
        title: 'Are you sure?',
        text: 'You want to approve this question?',
        confirmBtnText: "Yes, Approve!",
        cancelButtonText: "No, cancel!",
      })
    }

    return {
      projectQuestion,
      updateProjectStatus,
      updateProjectPriority,
      getOrderAllProgressStatus,
      deleteOrderProgressStatus,
      projectAllProgressStatus,
      addOrderProgressStatus,
      askNewQuestionForProject,
      getQuestionForProject,
      deleteAskedQuestionForProject,
      updateQuestionsVerifiedStatus
    }
  }
  const interCommunication = () => {
    const deleteInterCommunication = (id, type, refresh) => {
      confirmAlert(async () => {
        setLoading(true);
        await Service.delete(`/order/intercomm/${type}/${id}/`, { headers })
          .then(res => {
            console.log(res);
            setLoading(false);
            toast.success(`Delete ${type} successfully`);
            //refresh socket
            refresh();
          })
          .catch(err => {
            console.log(err);
            setLoading(false);
            toast.error(err.response.data);
          })
      }, {
        title: 'Are you sure?',
        text: `You want to delete this ${type}?`,
      })
    }
    const updateInterCommunication = (id, type, data, refresh) => {
      setLoading(true);
      Service.patch(`/order/intercomm/${type}/${id}/`, data, { headers: multipartHeaders })
        .then(res => {
          console.log(res);
          setLoading(false);
          toast.success(`Update ${data.type} successfully`);
          //refresh socket
          console.log(refresh)
          refresh();
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
          toast.error(err.response.data);
        })
    }
    return {
      deleteInterCommunication,
      updateInterCommunication
    }
  }
  const getProjectPaymentData = async (id) => {
    setLoading(true);
    await Service.get(`/order/payments/list/${id}/`, { headers })
      .then(res => {
        setPaymentDetails(res.data);
        setLoading(false);
      })
      .catch(err => {
        err && setLoading(false);
      })
    // await Service.get(`/order/payment/received/${id}/`, { headers });
  }
  const addPayment = async (id, data) => {
    setLoading(true);
    await Service.post(`/order/payment/add/${id}/`, data, { headers: multipartHeaders })
      .then(res => {
        if (res) {
          toast.success('Payment request successfully');
          setActive(pre => ({ ...pre, openPaymentHistoryModal: false }));
          reset();
        }
        setLoading(false);
        getProjectPaymentData(id);
      })
      .catch(err => {
        const error = Object.entries(err.response.data);
        setError(error[0][0], { type: 'manual', message: error[0][1] });
        setLoading(false);
        toast.error(err.response.data);
      })
  }
  const deletePaymentDetails = (id, projectId) => {
    confirmAlert(async () => {
      setLoading(true);
      await Service.delete(`/order/payments/update/${id}/`, { headers })
        .then(res => {
          res && setPaymentDetails(pre => ({
            ...pre,
            payment_history: pre.payment_history.filter(item => item.id !== id)
          }));
          setLoading(false);
          toast.success('Payment deleted successfully');
          getProjectPaymentData(projectId);
        })
        .catch(err => {
          setLoading(false);
          toast.error(err.response.data);
        })
    }, {
      title: 'Are you sure?',
      text: 'You want to delete this payment?',
    })
  }
  const updatePaymentDetails = (id, data) => {
    setLoading(true);
    Service.patch(`/order/payments/update/${id}/`, data, { headers: multipartHeaders })
      .then(res => {
        console.log('res', res);
        setLoading(false);
        toast.success('Payment updated successfully');
        setPaymentDetails(pre => ({
          ...pre,
          payment_history: pre.payment_history.map(item => item.id === id ? res.data : item)
        }));
        setEditPayment(null);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data);
      })
  }
  const ContextValue = {
    //hook form register
    register,
    handleSubmit,
    errors,
    setError,
    watch,
    reset,
    getValues,
    setValue,
    //context value will here
    editPayment, setEditPayment,
    loading, active, setActive,

    getProjectsList,
    getProjectById,
    updateProjectBasicInfo,

    projectsList,
    projectById,
    ...handleProject(),
    ...interCommunication(),
    getProjectPaymentData,
    paymentDetails,
    addPayment,
    updatePaymentDetails,
    deletePaymentDetails
  }
  return (
    <ProjectsContext.Provider value={ContextValue}>
      {children.children}
    </ProjectsContext.Provider>
  )
}