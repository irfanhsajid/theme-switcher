import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjects } from "../../../context/projects/ProjectsProvider";
import { Back, Delete, Edit, Question } from "../../../icon";
import { Alert, Tooltip } from "@mui/material";
import FileName from "../../../components/shared/FileName";
import AddQuestionModal from "../../../components/admin/questionBank/AddQuestionModal";

const ViewEditServiceQuestions = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  console.log({ edit })
  const {
    getQuestionForProject,
    projectQuestion,
    deleteAskedQuestionForProject,
    active,
    setActive,
    askNewQuestionForProject,
    loading } = useProjects();
  useEffect(() => {
    id && getQuestionForProject(id);
    // eslint-disable-next-line
  }, [id]);
  return (
    <section className="sectionContainer md:grid-cols-2">
      <div className="sectionTitle py-0 cursor-pointer">
        <div className="section-heading">
          <div className="flex justify-between items-center w-full">
            <div className='h-[40px] flex items-center gap-3'>
              {
                projectQuestion?.length > 0 &&
                <h3 className="title">{projectQuestion?.[0]?.order_service_title}</h3>
              }
              {
                projectQuestion?.length > 0 &&
                <div className='h-full w-[1px] bg-green'></div>
              }
              <span className="title !font-normal">Client Submission</span>
            </div>
            <div className="flex items-center gap-3">
              {
                type === 'edit' &&
                <button
                  onClick={() => {
                    setEdit(null);
                    setActive(pre => ({ ...pre, openQuestionModal: true }))
                  }
                  } className="actionBtn !bg-white !text-blue"
                >
                  <Question variant='circle' className='text-xl' />
                  <span className="!text-blue">Ask</span>
                </button>
              }
              <button
                onClick={() => navigate(-1)} className="actionBtn !bg-white !text-blue"
              >
                <Back className='text-xl' />
                <span className="!text-blue">Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="greenDivider"></div>
      <div className='my-3'>
        <div className="flex flex-col items-end gap-3">
          {
            projectQuestion?.length > 0 ?
              projectQuestion?.map((item, index) => (
                <div key={index} className='flex gap-3 items-start w-full'>
                  <div className='w-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="white"></circle>
                      <circle cx="12" cy="12" r="6" fill="#E2E8F0"></circle>
                    </svg>
                  </div>
                  <div className='pr-3 w-full'>
                    <div className='mb-2 flex items-center justify-between'>
                      <p className='text-lg'>{item?.question}</p>
                      {
                        !item?.answer?.answer &&
                        <div className='flex items-center gap-1'>
                          <Tooltip title="Edit" placement="top" arrow>
                            <div
                              onClick={() => {
                                setEdit(item);
                                setActive(pre => ({ ...pre, openQuestionModal: true }))
                              }}
                            ><Edit variant='iconButton' /></div>
                          </Tooltip>
                          <Tooltip title="Delete" placement="top" arrow>
                            <div
                              onClick={() => deleteAskedQuestionForProject(item.id)}
                            ><Delete variant='iconButton' /></div>
                          </Tooltip>
                        </div>
                      }
                    </div>
                    <p className='p-2 mt-3 text-lightText border border-white bg-[rgba(255, 255, 255, 0.35)]'>
                      <strong>Answer : </strong>
                      {item?.answer?.answer && item?.answer?.answer} {item?.answer?.attachment && <FileName url={item?.answer?.attachment} />}
                    </p>
                  </div>
                </div>
              ))
              :
              <Alert severity="info" className='!bg-white !justify-center w-full'>No Data Found</Alert>
          }
        </div>
      </div>

      {
        active?.openQuestionModal &&
        <AddQuestionModal
          getValues={data => {
            const payload = {
              question: data?.text,
              attachment_reqrd: data?.attachment_reqrd,
              question_type: data?.question_type,
              options: data?.options,
              order: Number(id),
            }
            edit?.id ?
              askNewQuestionForProject(payload, edit.id)
              :
              askNewQuestionForProject(payload)
          }}
          edit={edit?.id ? {
            text: edit?.question,
            attachment_reqrd: edit?.attachment_reqrd,
            options: edit?.options || '',
            question_type: edit?.question_type
          } : null}
          open={active?.openQuestionModal}
          setOpen={(bool) => setActive(pre => ({ ...pre, openQuestionModal: bool }))}
          loading={loading}
        />
      }
    </section>
  )
}
export default ViewEditServiceQuestions;
