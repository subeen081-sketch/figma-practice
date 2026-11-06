import './PhoneIcon.css'
import mobile from '../../assets/icons/phone-icon-mobile.png'
import desktop from '../../assets/icons/phone-icon-desktop.png'

function PhoneIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`phone-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default PhoneIcon
