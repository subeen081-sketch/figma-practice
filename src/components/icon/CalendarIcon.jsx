import './CalendarIcon.css'
import mobile from '../../assets/icons/calendar-icon-mobile.png'
import desktop from '../../assets/icons/calendar-icon-desktop.png'

function CalendarIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`calendar-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default CalendarIcon
