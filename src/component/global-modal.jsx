import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoMdCloseCircle } from "react-icons/io";


export default function MyModal({ openButtonLabel, modalTitle, modalBody, onClose, className }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    // width:"500px",
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    borderRadius: '7px',
    boxShadow:"20px",
  };

  return (
    <div className='relative'>
      <button className='actionBtn' onClick={handleOpen}>{openButtonLabel}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={`${className} p-4  bg-themeForeground text-themeBackground`}  style={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>

            {modalBody}
          <IoMdCloseCircle className='absolute right-2 top-2 cursor-pointer  size-5 text-red-500' onClick={handleClose} />
        </div>
      </Modal>
    </div>
  );
}

MyModal.propTypes = {
  openButtonLabel: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.node,
  onClose: PropTypes.func,
  className: PropTypes.string,
};
