import AmountIcon from '../icon/AmountIcon'
import CalendarIcon from '../icon/CalendarIcon'
import LocationIcon from '../icon/LocationIcon'
import UserIcon from '../icon/UserIcon'
import './DesktopMainCardTextGroup.css'

function DesktopMainCardTextGroup({ title, date, place, who, price, className = '', ...props }) {
  const rows = [
    { Icon: CalendarIcon, alt: '일시', text: date },
    { Icon: LocationIcon, alt: '장소', text: place },
    { Icon: UserIcon, alt: '대상', text: who },
    { Icon: AmountIcon, alt: '금액', text: price },
  ]

  return (
    <div className={`desktop-main-card-text-group ${className}`.trim()} {...props}>
      <h1 className="desktop-main-card-text-group__title">{title}</h1>
      <ul className="desktop-main-card-text-group__list">
        {rows
          .filter((row) => row.text)
          .map(({ Icon, alt, text }) => (
            <li key={alt} className="desktop-main-card-text-group__row">
              <Icon alt={alt} />
              {text}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default DesktopMainCardTextGroup
