import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from "react";
import { Back, Delete, Edit } from "../../../icon";
import { VscSend } from "react-icons/vsc";
import Error from '../../../typography/Error';
import { paymentChannel, priorityList } from "../../../utils/config";
import ServiceForm from "../../../components/admin/questionBank/ServiceForm";
import AutocompleteInput from "../../../components/shared/AutocompleteInput";
import { useAuth } from "../../../context/auth/AuthProvider";
import { Alert, Avatar, Box, CircularProgress, Tooltip } from "@mui/material";
import { useClients } from "../../../context/clients/ClientsProvider";
import { useQuestionBank } from "../../../context/questionBank/QuestionBankProvider";
import { IoMdAdd } from "react-icons/io";
import { confirmAlert, polishStringData } from "../../../utils/helperFunction";
import AddQuestionModal from "../../../components/admin/questionBank/AddQuestionModal";
import { toast } from "react-toastify";
import ClientInfoForm from "../../../components/admin/client/section/ClientInfoForm";
import { useNavigate } from 'react-router-dom';
import { adminAddProject, adminInviteClient } from '../../../utils/breadcrumbs';
import Pin from '../../../components/shared/Pin';

const InviteClient = ({ addService, clientId }) => {
  const navigate = useNavigate();
  const { currentUser, getUserList, userList, getCurrency, currency, setBreadcrumbs } = useAuth();
  const { getQuestionsByServiceTitle, questionsByServiceTitle } = useQuestionBank();
  const { loading, register, handleSubmit, errors, watch, setValue, setError, resetForm, clearErrors, addNewService, inviteClient } = useClients();

  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [edit, setEdit] = useState();
  const [existedQuestion, setExistedQuestion] = useState(questionsByServiceTitle);
  console.log(existedQuestion)
  const [serviceTitle, setServiceTitle] = useState();

  const allQuestions = existedQuestion?.length ?
    [...existedQuestion, ...watch('order_additional_questions')] : watch('order_additional_questions');
  const deleteQuestion = (sign, isExtra) => {
    confirmAlert(() => {
      if (isExtra) {
        console.log(watch('order_additional_questions'))
        setValue('order_additional_questions', watch('order_additional_questions').filter(item => item.question !== sign));
      } else {
        setExistedQuestion(existedQuestion.filter(item => item.id !== parseInt(sign)));
      }
    }, {
      title: 'Are you sure?',
      text: `You ${isExtra ? "can't" : 'can'} restore this ${isExtra && 'additional'} question`
    })
  }

  const submit = (data) => {
    if (validate(data, setError, watch)) return;

    const formData = new FormData();
    for (let key in data) {
      if (['order_additional_questions', 'service_questions'].includes(key)) {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        if (key === 'payment') {
          formData.append(key, data[key] || 0);
        } else if (key === 'payment_method') {
          formData.append(key, data[key] || '--');
        } else {
          data[key] && formData.append(key, data[key]);
        }
      }
    }
    addService ?
      addNewService(formData) :
      inviteClient(formData);
  }
  useEffect(() => {
    !currency?.length && getCurrency();
    !userList?.length && getUserList();
    setBreadcrumbs(addService ? adminAddProject : adminInviteClient);
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    const allData = watch();
    delete allData?.agreement;
    delete allData?.invoice;
    delete allData?.ref_attachment;
    localStorage.setItem('inviteClient', JSON.stringify(allData));
    // eslint-disable-next-line
  }, [watch()])
  useEffect(() => {
    setExistedQuestion(questionsByServiceTitle);
  }, [questionsByServiceTitle])
  useEffect(() => {
    if (existedQuestion?.length > 0) {
      setValue('service_questions', existedQuestion.map(item => item.id));
    }
    // eslint-disable-next-line
  }, [existedQuestion]);
  useEffect(() => {
    if (addService) {
      localStorage.removeItem('inviteClient');
      resetForm();
    }
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    if (clientId, userList) {
      setValue('client_id', clientId);
      const client = userList.find(user => user.id === clientId);
      ['full_name', 'email', 'phone_number', 'birth_date', 'gender', 'address_one', 'address_two', 'country', 'city', 'zipcode'].map(item => setValue(item, client?.[item]));
    }
    // eslint-disable-next-line
  }, [clientId, userList])
  return (
    <Fragment>
      {!addService &&
        <ClientInfoForm
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          clearErrors={clearErrors}
          setError={setError}
        />
      }
      {
        !addService &&
        <div className="sectionContainer mt-3">
          <div className="sectionTitle">
            <div className="flex items-center justify-between">
              <div className="section-heading">
                <div className="flex justify-between items-center w-full">
                  <h3 className="title">Security Question</h3>
                </div>
              </div>
            </div>
            <div className="greenDivider"></div>
          </div>
          <div className="bg-white flex flex-col p-3 gap-4">
            <div className="inputContainer">
              <label className="min-w-[140px]">
                Security Question
              </label>
              <span>:</span>
              <div className="w-full">
                <input
                  type="text"
                  {...register('security_question', {
                    required: false,
                    validate: (value) => {
                      if (value?.length > 255) {
                        return 'Maximum 255 characters allowed';
                      }
                      return;
                    }
                  })}
                  value={watch("security_question")}
                  data-error={errors?.security_question?.message}
                />
                <Error>{errors?.security_question?.message}</Error>
              </div>
            </div>
            <div>
              <div className="inputContainer">
                <label className="min-w-[140px]">
                  Security Answer
                </label>
                <span>:</span>
                <div className="w-full">
                  <input
                    type="text"
                    {...register('security_answer', {
                      required: false,
                      validate: (value) => {
                        if (value?.length > 255) {
                          return 'Maximum 255 characters allowed';
                        }
                        return;
                      }
                    })}
                    value={watch("security_answer")}
                    data-error={errors?.security_answer?.message}
                  />
                  <Error>{errors?.security_answer?.message}</Error>
                </div>
              </div>
              <Pin note='Please inform the client about case-sensitive answer.' className={'ml-[160px]'} />
            </div>
          </div>
        </div>
      }
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 mt-3">
        <div className="sectionContainer">
          <div className="sectionTitle">
            <div className="flex items-center justify-between">
              <div className="section-heading">
                <div className="flex justify-between items-center w-full">
                  <h3 className="title">SERVICE INFORMATION</h3>
                </div>
              </div>
            </div>
            <div className="greenDivider"></div>
          </div>
          <div className="bg-white flex flex-col p-3 gap-3">
            {
              addService &&
              <div className="inputContainer">
                <label style={{ minWidth: '140px' }}>
                  Select Client<span className="text-red">*</span>
                </label>
                <span>:</span>
                <AutocompleteInput
                  getValue={(value) => {
                    if (value) {
                      setValue('client_id', value?.id);
                      ['full_name', 'email', 'phone_number', 'birth_date', 'gender', 'address_one', 'address_two', 'country', 'city', 'zipcode'].forEach(item => setValue(item, value[item]));
                      clearErrors('client_id');
                    } else {
                      setValue('client_id', '');
                      setError('client_id', { type: "required", message: "Client is required" })
                    }
                  }}
                  renderOption={(option) => <Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }}>
                    <Avatar sx={{ width: 24, height: 24 }} alt={option?.full_name} src={option?.profile_pic} />
                    <p>{option?.full_name}</p>
                  </Box>}
                  value={watch("client_id") ? userList.find(user => user.id === (Number(watch("client_id")) || currentUser?.id)) : ''}
                  errorData={errors?.client_id?.message}
                  options={userList.filter(user => user.is_client)}
                  optionLabelName="full_name"
                />
              </div>
            }
            <ServiceForm
              getValues={value => {
                if (value) {
                  setValue('service_item', value?.id);
                  setServiceTitle(value);
                  getQuestionsByServiceTitle(value?.id);
                }
              }}
            />
            <div className="inputContainer">
              <label className="min-w-[140px]">
                Campaign Name
              </label>
              <span>:</span>
              <div className="w-full">
                <input
                  type="text"
                  {...register('order_campaign', {
                    validate: (value) => {
                      if (value?.length > 255) {
                        return 'Maximum 255 characters allowed';
                      }
                      return;
                    }
                  })}
                  value={watch("order_campaign")}
                  data-error={errors?.order_campaign?.message}
                />
                <Error>{errors?.order_campaign?.message}</Error>
              </div>
            </div>

            <div className="inputContainer">
              <label className="min-w-[140px]">
                Order Region<span className="text-red">*</span>
              </label>
              <span>:</span>
              <div className="w-full">
                <input
                  type="text"
                  {...register('order_region', {
                    required: "This field is required",
                    validate: (value) => {
                      if (value?.length > 255) {
                        return 'Maximum 255 characters allowed';
                      }
                      return;
                    }
                  }
                  )}
                  value={watch("order_region")}
                  data-error={errors?.order_region?.message}
                />
                <Error>{errors?.order_region?.message}</Error>
              </div>
            </div>

            <div className="inputContainer">
              <label style={{ minWidth: '140px' }}>
                Priority<span className="text-red">*</span>
              </label>
              <span>:</span>
              <div className="w-full">
                <select
                  {...register('priority_choices', { required: "This field is required" })}
                  value={watch("priority_choices")}
                  data-error={errors?.priority_choices?.message}
                >
                  {
                    priorityList.map((item, index) => (
                      <option disabled={item.value === ''} key={index} value={item.value}>{item.name}</option>
                    ))
                  }
                </select>
                <Error>{errors?.priority_choices?.message}</Error>
              </div>
            </div>
            <div className="inputContainer">
              <label style={{ minWidth: '140px' }}>
                Assigned To SE<span className="text-red">*</span>
              </label>
              <span>:</span>
              <AutocompleteInput
                getValue={(value) => {
                  if (value) {
                    setValue('assigned_to', value?.id);
                    clearErrors('assigned_to');
                  } else {
                    setValue('assigned_to', '');
                    setError('assigned_to', { type: "required", message: "User is required" })
                  }
                }}
                renderOption={(option) => <Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }}>
                  <Avatar sx={{ width: 24, height: 24 }} alt={option?.full_name} src={option?.profile_pic} />
                  <p>{option?.full_name}</p>
                </Box>}
                value={watch("assigned_to") ? userList.find(user => user.id === (Number(watch("assigned_to")) || currentUser?.id)) : ''}
                errorData={errors?.assigned_to?.message}
                options={
                  userList.filter(user => user.is_sales || user.is_sales_manager)
                    .map(user => ({ id: user.id, full_name: user.full_name, profile_pic: user.profile_pic }))
                }
                optionLabelName="full_name"
              />
            </div>
            <div className="inputContainer">
              <label className="min-w-[140px] text-blue font-bold">Agreement<span className="text-red">*</span></label>
              <span>:</span>
              <div className="w-full">
                <input
                  type="file"
                  onInput={(e) => {
                    if (e.target.files[0]?.length && e.target.files[0].size > 5000000) {
                      setError('agreement', { type: "required", message: "Maximum file size 5MB" })
                      return;
                    }
                    clearErrors('agreement');
                    setValue('agreement', e.target.files[0]);
                  }}
                  data-error={errors?.agreement?.message}
                  accept=".pdf, image/*"
                  className="!p-1"
                />
                <Error>{errors?.agreement?.message}</Error>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="sectionTitle">
            <div className="flex items-center justify-between">
              <div className="section-heading w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="title">PAYMENT INFORMATION</h3>
                  {
                    addService &&
                    <button onClick={() => navigate(-1)} className="actionBtn !bg-white">
                      <Back className='text-blue' />
                      <p className="text-blue">Back</p>
                    </button>
                  }
                </div>
              </div>
            </div>
            <div className="greenDivider"></div>
          </div>
          <div className="bg-white p-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px]">
                  Currency<span className="text-red">*</span>
                </label>
                <span>:</span>
                <div className="w-full">
                  <select
                    {...register('currency', { required: 'currency is required' })}
                    value={watch('currency')}
                    data-error={errors?.currency?.message}
                  >
                    <option disabled={true} value="">
                      Select a Currency
                    </option>
                    {
                      currency?.length ? currency.map((item, index) => (
                        <option key={index} value={item.currency_name}>{item.currency_name} ({item?.currency_symbol})</option>
                      )) : <option value="">No Currency Found</option>
                    }
                  </select>
                  <Error>{errors?.currency?.message}</Error>
                </div>
              </div>
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px]">
                  Billing Amount<span className="text-red">*</span>
                </label>
                <span>:</span>
                <div className="w-full">
                  <input
                    data-error={errors?.billing_amount?.message}
                    type="number"
                    {...register('billing_amount', {
                      required: 'This field is required',
                      valueAsNumber: true,
                      validate: value => {
                        if (!/^(?=.*[0-9])\d*(?:\.\d+)?$/.test(value)) {
                          return 'Invalid amount format (positive number required)'
                        }
                        if (value < watch('payment')) {
                          return "Billing amount can't less then paid amount"
                        }
                        return;
                      }
                    })}
                    value={watch('billing_amount')}
                  />
                  <Error>{errors?.billing_amount?.message}</Error>
                </div>
              </div>
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px]">
                  Amount Paid
                </label>
                <span>:</span>
                <div className="w-full">
                  <input
                    data-error={errors?.payment?.message}
                    type="number"
                    {...register('payment', {
                      required: false,
                      validate: value => {
                        if (value?.length) {
                          if (!/^(?=.*[0-9])\d*(?:\.\d+)?$/.test(value) && !isNaN(value)) {
                            return 'Invalid amount format (positive number required)'
                          }
                          if (value > watch('billing_amount')) {
                            return "Paid amount can't getter then billing amount"
                          }
                        }
                        return;
                      }
                    })}
                    value={watch('payment')}
                  />
                  <Error>{errors?.payment?.message}</Error>
                </div>
              </div>
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px]">
                  PMT Channel{watch('payment') > 0 && <span className="text-red">*</span>}
                </label>
                <span>:</span>
                <div className="w-full">
                  <select
                    {...register('payment_method', {
                      require: watch('payment') > 0 ? 'This field is required' : false
                    })}
                    data-error={errors?.payment_method?.message}
                    value={watch('payment_method')}
                  >
                    {
                      paymentChannel?.map((item, index) => (
                        <option key={index} disabled={item.value === ''} value={item.value} >{item.name}</option>
                      ))
                    }
                  </select>
                  <Error>{errors?.payment_method?.message}</Error>
                </div>
              </div>
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px]">
                  PMT Ref.{watch('payment') > 0 && <span className="text-red">*</span>}
                </label>
                <span>:</span>
                <div className="w-full">
                  <input
                    type="text"
                    {...register('payment_reference', {
                      require: watch('payment') > 0 ? 'This field is required' : false,
                      validate: (value) => {
                        if (value?.length > 255) {
                          return 'Maximum 255 characters allowed';
                        }
                        return;
                      }
                    })}
                    value={watch("payment_reference")}
                    data-error={errors?.payment_reference?.message}
                  />
                  <Error>{errors?.payment_reference?.message}</Error>
                </div>
              </div>
              <div className="inputContainer md:col-span-2 lg:col-span-1">
                <label className="min-w-[120px]">
                  Payment Date{watch('payment') > 0 && <span className="text-red">*</span>}
                </label>
                <span>:</span>
                <input
                  type="date"
                  {...register('first_payment_date', {
                    require: watch('payment') > 0 ? 'This field is required' : false
                  })}
                  value={watch("first_payment_date")}
                  data-error={errors?.first_payment_date?.message}
                />
              </div>
              <div className="inputContainer md:col-span-2 lg:col-span-1">
                <label className="min-w-[120px]">
                  Next PMT Date
                </label>
                <span>:</span>
                <input
                  type="date"
                  {...register('next_payment_date')}
                  value={watch("next_payment_date")}
                  data-error={errors?.next_payment_date?.message}
                />
              </div>
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px] text-blue font-bold">
                  Invoice{watch('payment') > 0 && <span className="text-red">*</span>}
                </label>
                <span>:</span>
                <div className="w-full">
                  <input
                    type="file"
                    onInput={(e) => {
                      if (e.target.files[0]?.length && e.target.files[0].size > 5000000) {
                        setError('invoice', { type: "required", message: "Maximum file size 5MB" })
                        return;
                      }
                      clearErrors('invoice');
                      setValue('invoice', e.target.files[0]);
                    }}
                    data-error={errors?.invoice?.message}
                    accept=".pdf, image/*"
                    className="!p-1"
                  />
                  <Error>{errors?.invoice?.message}</Error>
                </div>
              </div>
              <div className="inputContainer col-span-2">
                <label className="min-w-[120px] text-blue font-bold">PMT Ref.</label>
                <span>:</span>
                <div className="w-full">
                  <input
                    type="file"
                    onInput={(e) => {
                      if (e.target.files[0]?.length && e.target.files[0].size > 5000000) {
                        setError('ref_attachment', { type: "required", message: "Maximum file size 5MB" })
                        return;
                      }
                      clearErrors('ref_attachment');
                      setValue('ref_attachment', e.target.files[0]);
                    }}
                    data-error={errors?.ref_attachment?.message}
                    accept=".pdf, image/*"
                    className="!p-1"
                  />
                  <Error>{errors?.ref_attachment?.message}</Error>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addService &&
        <div className=" mt-3">
          <ClientInfoForm
            disabled={addService}
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
            clearErrors={clearErrors}
            setError={setError}
          />
        </div>
      }
      {
        serviceTitle?.id &&
        <section className="sectionContainer transition-all mt-3">
          <div className="sectionTitle p-2">
            <div className="section-heading flex justify-between items-center">
              <span className="title">INQUIRY QUESTION SET ({serviceTitle?.item_title})</span>
              <div>
                <button onClick={() => {
                  setAddQuestionModal(true), setEdit()
                }} className="actionBtn ms-auto">
                  <IoMdAdd className="text-xl" />
                  <span>Additional Question</span>
                </button>
              </div>
            </div>
            <div className="greenDivider"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-end gap-12 max-h-96 overflow-y-scroll">
              <div className="w-full question-item">
                <div id="staticQuestion" className="flex flex-col gap-4">
                  {allQuestions?.length > 0 ?
                    allQuestions?.map((item, index) => (
                      <div key={index} className=" h-fit-content items-center">
                        <div className="w-full flex items-center gap-3">
                          <div className={`${item?.addExtra ? 'bg-bgSuccess' : 'bg-white'} w-full p-3 relative rounded`}>
                            <p className="flex text-bodyText"><span className="min-w-[120px]">Question {index + 1}</span><span>: {!item?.addExtra ? item.text : item.question}</span></p>
                            <p className="flex text-sm text-lightText"><span className="min-w-[120px]">Type</span><span>: {polishStringData(item?.question_type)}</span></p>
                            {
                              item?.options?.length > 0 &&
                              <p className="flex text-sm text-lightText"><span className="min-w-[120px]">Options</span><span>: {item?.options}</span></p>
                            }
                            <p className="flex text-sm text-lightText"><span className="min-w-[120px]">Need attachment</span><span>: {
                              [true, 'True', 'true'].includes(item?.attachment_reqrd) ? 'Yes' : 'No'
                            }</span></p>
                            {item?.addExtra &&
                              <small className="absolute top-0 right-1 text-[10px] text-green">Additional</small>
                            }
                          </div>
                          <div className="flex items-center justify-center gap-2 min-w-[76px]">
                            {
                              item?.addExtra &&
                              <Tooltip title="Edit" arrow placement='top' >
                                <div onClick={() => {
                                  setAddQuestionModal(true);
                                  setEdit(item)
                                }}>
                                  <Edit className='text-2xl' variant='iconButton' />
                                </div>
                              </Tooltip>
                            }
                            <Tooltip title="Delete" arrow placement='top'>
                              <div onClick={() => deleteQuestion(item?.addExtra ? item?.question : item.id, item?.addExtra || false)}>
                                <Delete className='text-2xl' variant='iconButton' />
                              </div>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    )) :
                    <Alert sx={{ background: 'var(--white)', justifyContent: 'center' }} severity="info">No question found!</Alert>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      <section className="flex justify-end gap-3 mt-3">
        <button className="actionBtn" onClick={handleSubmit(submit)} disabled={loading}>
          {
            loading ?
              <CircularProgress sx={{ color: '#fff' }} size={20} />
              :
              <VscSend className='-rotate-180' />
          }
          <span>{addService ? 'Add Service' : 'Send Request to Client'}</span>
        </button>
        <button onClick={() => resetForm()} className="actionBtn !bg-bgRed">
          <span className="text-red">Reset form</span>
        </button>
      </section>
      {
        addQuestionModal &&
        <AddQuestionModal
          edit={edit}
          getValues={(value) => {
            const init = {
              service_title: serviceTitle?.id,
              question: value?.text,
              question_type: value?.question_type,
              options: value?.options,
              addExtra: true,
              attachment_reqrd: value?.attachment_reqrd
            }
            edit ?
              setValue('order_additional_questions', watch('order_additional_questions').map(item => item.question === edit?.question ? init : item)) :
              setValue('order_additional_questions', [...watch('order_additional_questions'), init]);
            setAddQuestionModal(false);
            setEdit();
            toast.success('Additional question added successfully');
          }}
          open={addQuestionModal}
          setOpen={setAddQuestionModal}
        />
      }
    </Fragment >
  )
}

export default InviteClient;
InviteClient.propTypes = {
  addService: PropTypes.bool,
  clientId: PropTypes.number
}
const validate = (data, setError, watch) => {
  let haveError = false;
  if (!data.phone_number) {
    setError("phone_number", { type: "required", message: "Phone Number is required" })
    haveError = true;
  }
  if (!data.country) {
    setError("country", { type: "required", message: "Country is required" })
    haveError = true;
  }
  if (watch('payment') && !data.invoice) {
    setError("invoice", { type: "required", message: "Invoice is required" })
    haveError = true;
  }
  if (!data.agreement) {
    setError("agreement", { type: "required", message: "Agreement is required" })
    haveError = true;
  }
  return haveError;
}