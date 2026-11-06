import './DownIcon2.css'
import mobile from '../../assets/icons/down-icon2-mobile.png'
import desktop from '../../assets/icons/down-icon2-desktop.png'

function DownIcon2({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`down-icon2 ${className}`.trim()} {...props} />
    </picture>
  )
}

export default DownIcon2
