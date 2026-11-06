import './UserIcon.css'
import mobile from '../../assets/icons/user-icon-mobile.png'
import desktop from '../../assets/icons/user-icon-desktop.png'

function UserIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`user-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default UserIcon
