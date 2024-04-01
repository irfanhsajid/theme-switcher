import { useState } from 'react';
import ArrayModal from '../component/array-modal';
import { Icon } from '@mui/material';

function MyComponent() {
  const [openImgModal, setOpenImgModal] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [sectionSettings, setSectionSettings] = useState([{ id: 1, alignment: "", padding: { left: "", right: "", top: "", bottom: "" }, tracking: "" }]);

  const handleOpenImgModal = (isOpen, index) => {
    setOpenImgModal(prevState => prevState.map((val, i) => (i === index ? isOpen : val)));
  };

  const handleCloseImgModal = (index) => {
    setOpenImgModal(prevState => prevState.map((val, i) => (i === index ? false : val)));
  };

  const handleUploadImage = async (index) => {
    const file = imageFiles[index];
    if (!file) {
      console.log("No file selected for upload");
      return;
    }
   // const base64File = await convertBase64(file);
  //  console.log(base64File);
    // Here, you can update the state or perform any other actions with the uploaded image data
  };

  const addSection = () => {
    const newSection = { id: sectionSettings.length + 1, alignment: "", padding: { left: "", right: "", top: "", bottom: "" }, tracking: "" };
    setSectionSettings(prevState => [...prevState, newSection]);
    setOpenImgModal(prevState => [...prevState, false]); // Add a corresponding modal state for the new section
    setImageFiles(prevState => [...prevState, null]); // Add a corresponding image file state for the new section
  };

  const removeSection = (index) => {
    setSectionSettings(prevState => prevState.filter((_, i) => i !== index));
    setOpenImgModal(prevState => prevState.filter((_, i) => i !== index)); // Remove the corresponding modal state for the removed section
    setImageFiles(prevState => prevState.filter((_, i) => i !== index)); // Remove the corresponding image file state for the removed section
  };

  return (
    <>
      {openImgModal.map((isOpen, index) => (
        <ArrayModal
          key={index}
          open={isOpen}
          onClose={() => handleCloseImgModal(index)}
          index={index}
          header={<h3 className="font-bold">Upload Image {index + 1}</h3>}
          body={
            <div className="modalDashedArea relative ">
              <label htmlFor={`fileUpload_${index}`} className={`mt-4 flex justify-center items-center cursor-pointer  ${!imageFiles[index] ? 'size-48 border-[#E7E8FF] border-[30px] bg-[#D7D8FF] rounded-full' : ''}`}>
                {!imageFiles[index] && <Icon className="text-white size-12 bg-[#7075FF] p-2 rounded-full text-xl" />}
                <input
                  id={`fileUpload_${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    console.log(file);
                    const updatedImageFiles = [...imageFiles];
                    updatedImageFiles[index] = file;
                    setImageFiles(updatedImageFiles);
                  }}
                  style={{ display: 'none' }}
                />
                {imageFiles[index] && (
                  <div className="preview ">
                    <img
                      src={URL.createObjectURL(imageFiles[index])}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "350px" }}
                    />
                  </div>
                )}
              </label>

              {imageFiles[index] ? (
                <div className="flex gap-3">
                  <button className="actionBtn  bg-red px-10" onClick={() => {
                    setImageFiles(prev => {
                      const updatedImageFiles = [...prev];
                      updatedImageFiles[index] = null;
                      return updatedImageFiles;
                    })
                  }}>Remove</button>
                  <button className="actionBtn  bg-[#6C71FF] px-10" onClick={() => handleUploadImage(index)}>UPLOAD</button>
                </div>
              ) : (
                <div>
                  <h3 className="font-bold">Click to upload or Drag and Drop</h3>
                  <small className="text-lightGray mt-5">Maximum file size 50mb</small>
                </div>
              )}
            </div>
          }
        />
      ))}

      {sectionSettings.map((section, index) => (
        <section key={index} className="tinyMCE">
          <p className="font-medium my-2"> {sectionSettings.length === 1 ? "Post Content" : `Post Content (${index + 1})`} <span className="text-red"></span></p>
          <div className="w-full bg-[#E2E8F0] p-4 rounded-[5px]">
            {/* Your editor content here */}
          </div>
          <div className="mt-2 flex gap-3 items-center justify-evenly flex-shrink-0">
            {/* Your editor toolbar here */}
          </div>
          <div className="flex gap-3 justify-end mt-1 items-center">
            {/* Your add/remove buttons here */}
            <button className='actionBtn bg-red' onClick={() => handleOpenImgModal(true, index)}>Open Image Modal</button>

          </div>
        </section>
      ))}
      <button className='actionBtn' onClick={addSection}>Add Section</button>
      {sectionSettings.length > 1 && <button className='actionBtn ms-3' onClick={() => removeSection(sectionSettings.length - 1)}>Remove Section</button>}
    </>
  );
}

export default MyComponent;
