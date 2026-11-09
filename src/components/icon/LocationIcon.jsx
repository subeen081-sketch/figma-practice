import './LocationIcon.css'
import mobile from '../../assets/icons/location-icon-mobile.png'
import desktop from '../../assets/icons/location-icon-desktop.png'

function LocationIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`location-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default LocationIcon
