import PropTypes from 'prop-types'
import { Chip } from "@mui/material"
import Error from "../../typography/Error"
import Pin from './Pin';

function MultiSelectInput({ dataError, setValue, values, setError, title, placeholder }) {
  const handleInput = (e) => {
    const { value } = e.target;
    if (value[0] === ' ') {
      e.target.value = '';
      return;
    }
    if (e.key === 'Enter' && value?.length) {
      if (values?.includes(value.replace(/\s+/g, ' ').trim())) {
        setError && setError('Duplicate item not allowed')
        return;
      }
      setValue([...values, value]);
      e.target.value = '';
      return;
    } else {
      setValue(values);
    }
  }
  const handleDelete = (index) => {
    const newData = values.filter((_, i) => i !== index);
    setValue(newData);
  };
  return (
    <div className='w-full'>
      <div className='flex flex-wrap items-center gap-1 ml-[160px] mb-1'>
        {
          values?.map((item, index) => (
            <Chip key={index} sx={{ color: 'var(--light-text)' }} label={item} variant="outlined" onDelete={() => handleDelete(index)} />
          ))
        }
      </div>
      <div className="inputContainer">
        <label className="min-w-[140px] text-light-text">{title}<span className='text-red'>*</span></label>
        <span >:</span>
        <div className='w-full'>
          <input
            data-error={dataError && dataError}
            // onInput={handleInput}
            onKeyUp={handleInput}
            onBlur={handleInput}
            type="text"
            placeholder={placeholder || 'Add multiple'}
          />
          <Error>{dataError && dataError}</Error>
        </div>
      </div>
      <Pin note='Please press “ENTER” after typing each option to add multiple' className={'ml-[160px]'} />
    </div>
  )
}

export default MultiSelectInput;
MultiSelectInput.propTypes = {
  dataError: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  setError: PropTypes.func,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}