import PropTypes from 'prop-types'
import { TfiSave } from "react-icons/tfi";
import GlobalModal from '../../shared/GlobalModal';
import { useForm } from 'react-hook-form';
import { questionType } from '../../../utils/config';
import Error from '../../../typography/Error';
import MultiSelectInput from '../../shared/MultiSelectInput';
import { useEffect } from 'react';
import { useQuestionBank } from '../../../context/questionBank/QuestionBankProvider';
import { CircularProgress, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const AddQuestionModal = ({ open, setOpen, edit, getValues, loading = false }) => {
  console.log('edit', edit)
  const { questionsByServiceTitle } = useQuestionBank();
  const { register, handleSubmit, formState: { errors }, watch, setError, clearErrors, setValue } = useForm({
    mode: 'all',
    defaultValues: edit || {
      text: "",
      question_type: null,
      options: "",
      attachment_reqrd: 'false',
      is_active: true,
    }
  });
  const submit = (data) => {
    if (data?.question_type === 'Multiple_choice' && !data?.options?.length) {
      setError("options", { message: "Options is required" });
      return;
    }
    getValues(data);
  }
  useEffect(() => {
    if (watch('question_type') !== 'Multiple_choice') {
      setValue('options', '');
      clearErrors('options');
    }
    // eslint-disable-next-line
  }, [watch('question_type')])

  return (
    <GlobalModal
      open={open}
      setOpen={setOpen}
      header={<h3 className="title">{edit ? 'edit' : 'ADD'} QUESTION</h3>}
      body={
        <div className="flex flex-col gap-3">
          <div className="inputContainer">
            <label className="min-w-[140px] text-light-text">Question<span className='text-red'>*</span></label>
            <span >:</span>
            <div className='w-full'>
              <input
                {...register('text', {
                  required: 'this field is required',
                  validate: (value) => {
                    if (value?.length > 255) {
                      return 'Maximum 255 characters allowed';
                    } else if (questionsByServiceTitle?.find(item => item?.text === value) && !edit) {
                      return 'This question already exist';
                    }
                  }
                })}
                value={watch('text') || watch('question')}
                data-error={errors?.text?.message}
                placeholder="Question"
              />
              <Error>{errors?.text?.message}</Error>
            </div>
          </div>
          <div className="inputContainer">
            <label className="min-w-[140px] text-light-text">Answer Type<span className='text-red'>*</span></label>
            <span >:</span>
            <div className="w-full">
              <select
                {...register('question_type', { required: 'this field is required' })}
                data-error={errors?.question_type?.message}
              >
                <option value="">Select question type</option>
                {
                  questionType.map((item, index) => (
                    <option key={index} value={item.value}>{item.name}</option>
                  ))
                }
              </select>
              <Error>{errors?.question_type?.message}</Error>
            </div>
          </div>
          {
            watch('question_type') === 'Multiple_choice' &&
            <MultiSelectInput
              title="Options"
              placeholder="Add multiple options"
              values={watch("options")?.length ? watch("options")?.split(',') : []}
              required={true}
              dataError={errors?.options?.message}
              setError={(err) => setError("options", {
                type: 'manual',
                message: err
              })}
              setValue={(values) => {
                setValue('options', values.join(','));
                values.length ? clearErrors("options")
                  : setError("options", { message: "options is required" });
              }}
            />
          }
          <div className="inputContainer">
            <label className="min-w-[140px] text-light-text">Need Attachment<span className='text-red'>*</span></label>
            <span >:</span>
            <div className="w-full">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={watch('attachment_reqrd')?.toString()}
                name="radio-buttons-group"
                onChange={
                  (e) => {
                    setValue('attachment_reqrd', e.target.value);
                    clearErrors('attachment_reqrd');
                  }}
                sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}
              >
                <FormControlLabel
                  value={'true'}
                  control={
                    <Radio
                      size="small"
                      sx={{ color: 'var(--bodyText)', '&.Mui-checked': { color: 'var(--green)' } }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value={'false'}
                  control={
                    <Radio
                      size="small"
                      sx={{ color: 'var(--bodyText)', '&.Mui-checked': { color: 'var(--red)' } }}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
              <Error>{errors?.attachment_reqrd?.message}</Error>
            </div>
          </div>
        </div>
      }
      footer={
        <div className="flex items-center gap-8 justify-end">
          <button disabled={loading} className="actionBtn" onClick={handleSubmit(submit)}>
            {
              loading ?
                <CircularProgress size={20} color='inherit' />
                :
                <TfiSave className='text-white text-xl mr-1' />
            }
            <span>{edit ? 'Edit' : 'Save'}</span>
          </button>
        </div>
      }
    />
  )
}
AddQuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.any.isRequired,
  edit: PropTypes.object || PropTypes.undefined,
  getValues: PropTypes.func.isRequired,
  loading: PropTypes.bool
}
export default AddQuestionModal