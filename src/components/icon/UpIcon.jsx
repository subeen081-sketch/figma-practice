import './UpIcon.css'
import mobile from '../../assets/icons/up-icon-mobile.png'
import desktop from '../../assets/icons/up-icon-desktop.png'

function UpIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`up-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default UpIcon
