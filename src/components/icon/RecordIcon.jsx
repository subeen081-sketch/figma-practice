import './RecordIcon.css'
import mobile from '../../assets/icons/record-icon-mobile.png'
import desktop from '../../assets/icons/record-icon-desktop.png'

function RecordIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`record-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default RecordIcon
