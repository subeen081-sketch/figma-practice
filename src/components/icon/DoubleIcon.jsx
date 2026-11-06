import './DoubleIcon.css'
import mobile from '../../assets/icons/double-icon-mobile.png'
import desktop from '../../assets/icons/double-icon-desktop.png'

function DoubleIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`double-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default DoubleIcon
