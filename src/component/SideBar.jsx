import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom"
import { Fragment } from "react"

const SideBar = ({ nav, disabled }) => {
  const disableClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  }
  return (
    <div className={`pcsUserBase-Sidebar ${disabled && 'opacity-50'}`}>
      <div className="logo-area">
        <Link to={disabled ? '#' : "/"} onClick={disableClick}>
          <img className="mx-auto my-1 logo-lg" src="/logo.png" width="125" height="60"
            alt="Logo" />
        </Link>
      </div>
      <ul className="menubar">
        {
          nav.map((item, index) => {
            return (
              <Fragment key={index}>
                <li key={index}>
                  <NavLink onClick={disableClick} to={disabled ? '#' : item.link} className={({ isActive }) => isActive ? "bg-stroke transition-all" : ""}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
                {
                  index !== nav.length - 1 &&
                  <div className="greenDivider"></div>
                }
              </Fragment>
            )
          })
        }
      </ul>
    </div>
  )
}
SideBar.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          icon: PropTypes.element.isRequired,
        })
      )
    })
  ).isRequired,
  disabled: PropTypes.bool
}

export default SideBar