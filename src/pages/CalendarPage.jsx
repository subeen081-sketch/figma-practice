import { useNavigate } from 'react-router'
import Button from '../components/button/Button'
import PageMoveButton from '../components/button/PageMoveButton'
import CalendarMonth from '../components/calendar/CalendarMonth'
import CardCollection from '../components/card/CardCollection'
import Label from '../components/label/Label'
import MobileLabel from '../components/label/MobileLabel'
import CityLogo from '../components/layout/CityLogo'
import GovBanner from '../components/layout/GovBanner'
import { WEEK_EVENTS } from '../data/events'
import './Page.css'
import './CalendarPage.css'

function CalendarPage() {
  const navigate = useNavigate()

  return (
    <div className="page calendar-page">
      <GovBanner />
      <div className="page__logo-row"><CityLogo /></div>
      <CalendarMonth />
      <h2 className="calendar-page__title">이번주 이벤트</h2>
      <ul className="calendar-page__cards">
        {WEEK_EVENTS.map((event) => (
          <li key={event.title}>
            <CardCollection
              variant="calendar"
              to="/detail"
              src={event.src}
              alt={`${event.title} 포스터`}
              position={event.position}
              title={event.title}
              date={event.date}
              place={event.place}
            >
              <MobileLabel status={event.status} />
              <Label category={event.category} />
            </CardCollection>
          </li>
        ))}
      </ul>
      <PageMoveButton aria-current="page">1</PageMoveButton>
      <div className="page__center">
        <Button variant="prev" onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

export default CalendarPage
