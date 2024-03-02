import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { FiUpload, FiX } from 'react-icons/fi';

export default function MyDropzone({ className, maxFileSize, allowedFileTypes }) {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);

        if (acceptedFiles?.length) {
            setFiles(prevFiles => [
                ...prevFiles,
                ...acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) }))
            ]);
            setIsDragging(false);
        }
    }, []);

    const handleRemove = (fileToRemove) => {
        setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxSize: maxFileSize,
        accept: allowedFileTypes,
        onDragEnter: () => setIsDragging(true),
        onDragLeave: () => setIsDragging(false),
    });

    return (
        <div {...getRootProps({ className: `${className} ${isDragging ? 'dragging' : ''}` })}>
            <input {...getInputProps()} onClick={e => e.stopPropagation()} />
            <div className="dropzone-content">
                <div className="modalDashedArea">
                    <div className="size-48 mt-4 flex justify-center items-center border-[30px] border-[#E7E8FF]  bg-[#D7D8FF] rounded-full cursor-pointer">
                        <FiUpload className="text-white size-12 bg-[#7075FF] p-2 rounded-full text-xl" />
                    </div>
                    <div>
                        <h3 className="font-bold">Click to upload or Drag and Drop</h3>
                        <small className="text-lightGray  mt-5">Maximum file size: {maxFileSize / 1024 / 1024}MB</small>
                    </div>
                </div>
               <div className="previewSection">
                {files.map((file, index) => (
                    <div key={index} className="filePreviewWrapper">
                        <div className="filePreview">
                            {file.type.startsWith('image') ? (
                                <img src={file.preview} alt={file.name} />
                            ) : (
                                <div>{file.name}</div>
                            )}
                        </div>
                        <button className="removeButton" onClick={()=>handleRemove(file)}>
                            <FiX />
                        </button>
                    </div>
                ))}
            </div>
               
            </div>
        </div>
    );
}

MyDropzone.propTypes = {
    className: PropTypes.string,
    maxFileSize: PropTypes.number,
    allowedFileTypes: PropTypes.string
};

MyDropzone.defaultProps = {
    maxFileSize: 52428800, // 50MB in bytes
    allowedFileTypes: 'image/*, .pdf, .doc, .docx' // Allowed file types
};
