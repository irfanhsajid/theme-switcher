import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const customModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '750px',
  maxHeight: '90%',
  height: 'fit-content',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  borderRadius: '8px',
  padding: '24px',
  background: 'var(--Stroke, #E2E8F0)',
  outline: 'none',
}
const customStatusStyle = {
  padding: "0.25rem 1.25rem",
  borderRadius: "0.5rem",
  fontSize: "0.6rem",
  fontWeight: "500",
  letterSpacing: "0.03rem",
  border: "1px solid",
  textTransform: "uppercase"
}
const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px var(--white)`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


export {
  customModalStyle,
  customStatusStyle,
  StyledBadge
}