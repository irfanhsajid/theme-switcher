import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Attachment } from "../../icon";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

const AttachmentInput = ({
  id = 'attachment',
  label,
  values,
  setValue,
  single = false,
  className,
  showFiles = true,
  alignment = 'start',
  maximum,
  parentClass = null
}) => {
  const [myFiles, setMyFiles] = useState();
  const handleDelete = (index) => {
    if (single) {
      setMyFiles(null);
      setValue(null);
      return;
    }
    const newData = myFiles?.filter((_, i) => i !== index);
    setMyFiles(newData);
    setValue(newData);
  };
  const renderView = (file) => {
    if (typeof file === 'string') {
      return file.split('/')[file.split('/').length - 1]
    } else if (file instanceof File) {
      return file.name;
    }
  }
  useEffect(() => {
    setMyFiles(values);
  }, [values])
  return (
    <div className={parentClass}>
      <label htmlFor={id} className={`flex  justify-${alignment}`}>
        {
          label ? label :
            <div className={`actionBtn w-fit !bg-white ${className}`}>
              <Attachment className='text-blue text-2xl' />
              <span className="text-blue">Attachment</span>
            </div>
        }
      </label>
      <input
        type="file"
        id={id}
        className="hidden"
        onInput={(e) => {
          if (single) {
            setValue(e.target.files[0]);
            setMyFiles(e.target.files[0]);
            e.value = null;
            return;
          }
          const duplicate = myFiles?.length > 0 ? myFiles.find(file =>
            file?.name === e.target.files[0]?.name ? true : false
          ) : false;
          if (duplicate) {
            toast.error('Already added this file');
            return;
          } else {
            const value = myFiles?.length > 0 ? [...myFiles, e.target.files[0]] : [e.target.files[0]];
            if (maximum && value.length > maximum) {
              toast.error(`You can't upload more than ${maximum} files`);
              return;
            }
            setValue(value);
            setMyFiles(value);
            e.value = null;
          }
        }}
        accept="application/pdf"
      />
      {
        showFiles && myFiles &&
        <div className="flex flex-wrap gap-2 mt-2">
          {
            single ?
              <Chip variant="outlined" size="small" onDelete={() => handleDelete()} label={renderView(myFiles)} />
              :
              myFiles?.map((file, index) => (
                <Chip key={index} variant="outlined" size="small" onDelete={() => handleDelete(index)} label={renderView(file)} />
              ))
          }
        </div>
      }
    </div>
  )
}

export default AttachmentInput;
AttachmentInput.propTypes = {
  single: PropTypes.bool,
  showFiles: PropTypes.bool,
  values: PropTypes.any,
  setValue: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.any,
  label: PropTypes.node,
  alignment: PropTypes.oneOf(['start', 'end', 'center']),
  maximum: PropTypes.number,
  parentClass: PropTypes.string
}