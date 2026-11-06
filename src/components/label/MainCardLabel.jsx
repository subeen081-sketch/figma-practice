import calendarIcon from '../../assets/icons/main-card-label-calendar.png'
import AmountIcon from '../icon/AmountIcon'
import LocationIcon from '../icon/LocationIcon'
import PhoneIcon from '../icon/PhoneIcon'
import UserIcon from '../icon/UserIcon'
import './MainCardLabel.css'

const ICONS = {
  location: [LocationIcon, '장소'],
  user: [UserIcon, '대상'],
  phone: [PhoneIcon, '문의'],
  amount: [AmountIcon, '금액'],
}

function MainCardLabel({ icon = 'calendar', className = '', children, ...props }) {
  const [Icon, alt] = ICONS[icon] ?? []

  return (
    <div className={`main-card-label ${className}`.trim()} {...props}>
      {Icon ? <Icon alt={alt} /> : <img src={calendarIcon} alt="일시" className="main-card-label__icon" />}
      <span>{children}</span>
    </div>
  )
}

export default MainCardLabel
