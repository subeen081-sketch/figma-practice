import { useNavigate } from 'react-router'
import Button from '../../components/button/Button'
import DesktopPageMoveButton from '../../components/button/DesktopPageMoveButton'
import CalendarMonth from '../../components/calendar/CalendarMonth'
import Card from '../../components/card/Card'
import DesktopSearchBarCombobox from '../../components/form/DesktopSearchBarCombobox'
import DesktopEventStatus from '../../components/label/DesktopEventStatus'
import DesktopProgressStatus from '../../components/label/DesktopProgressStatus'
import DesktopTopArea from '../../components/layout/DesktopTopArea'
import { DESKTOP_CALENDAR_EVENTS } from '../../data/desktop'
import './DesktopCalendarPage.css'

function DesktopCalendarPage() {
  const navigate = useNavigate()

  return (
    <div className="desktop-calendar-page">
      <DesktopTopArea />
      <div className="desktop-calendar-page__search">
        <DesktopSearchBarCombobox />
        <DesktopSearchBarCombobox variant="combobox" />
      </div>
      <div className="desktop-calendar-page__body">
        <ul className="desktop-calendar-page__cards">
          {DESKTOP_CALENDAR_EVENTS.map((event) => (
            <li key={event.title}>
              <Card variant="calendar" to="/detail" src={event.src} alt={`${event.title} 포스터`} position={event.position} title={event.title} date={event.date} place={event.place}>
                <DesktopProgressStatus status={event.status} />
                <DesktopEventStatus category={event.category} />
              </Card>
            </li>
          ))}
        </ul>
        <CalendarMonth className="desktop-calendar-page__month" />
      </div>
      <DesktopPageMoveButton aria-current="page">1</DesktopPageMoveButton>
      <Button variant="prev" onClick={() => navigate('/')} />
    </div>
  )
}

export default DesktopCalendarPage
