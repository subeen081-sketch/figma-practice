import './DownIcon.css'
import mobile from '../../assets/icons/down-icon-mobile.png'
import desktop from '../../assets/icons/down-icon-desktop.png'

function DownIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`down-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default DownIcon
