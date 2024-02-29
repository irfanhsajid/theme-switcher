import { Box, Modal } from '@mui/material'
import PropTypes from 'prop-types'
import { customModalStyle } from '../../css/style';
import { Cross } from '../../icon';

const GlobalModal = ({
  header,
  body,
  footer,
  open,
  setOpen,
  style,
  className,
  fullBody
}) => {
  const close = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        zIndex: 1000,
      }}
    >
      <Box sx={{ ...customModalStyle, ...style }} className={`pcsDashboard ${className}`}>
        {fullBody ? fullBody :
          <div className="flex items-center justify-center gap-24 ">
            <div className="w-full">
              {
                header &&
                <div>
                  {header}
                  <div className="greenDivider my-2"></div>
                </div>
              }
              <div className="flex flex-col gap-3">
                {body}
                {footer && <div className="greenDivider"></div>}
                {footer && footer}
              </div>
            </div>
          </div>
        }
        <Cross onClick={() => close()} className='absolute text-red cursor-pointer text-lg top-3 right-3' />
      </Box>
    </Modal>
  )
}
GlobalModal.propTypes = {
  fullBody: PropTypes.node,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.any.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}
export default GlobalModal;