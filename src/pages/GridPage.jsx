import { useNavigate } from 'react-router'
import Button from '../components/button/Button'
import PageMoveButton from '../components/button/PageMoveButton'
import CardCollection from '../components/card/CardCollection'
import DetailInfoSearchCombobox from '../components/form/DetailInfoSearchCombobox'
import DoubleIcon from '../components/icon/DoubleIcon'
import NextIcon from '../components/icon/NextIcon'
import Label from '../components/label/Label'
import MobileLabel from '../components/label/MobileLabel'
import CityLogo from '../components/layout/CityLogo'
import GovBanner from '../components/layout/GovBanner'
import { GRID_EVENTS } from '../data/events'
import './Page.css'
import './GridPage.css'

function GridPage() {
  const navigate = useNavigate()

  return (
    <div className="page grid-page">
      <GovBanner />
      <div className="page__logo-row"><CityLogo /></div>
      <div className="grid-page__search">
        <DetailInfoSearchCombobox />
        <DetailInfoSearchCombobox />
      </div>
      <h1 className="grid-page__sr">행사·축제 그리드 보기</h1>
      <ul className="grid-page__cards">
        {GRID_EVENTS.map((event) => (
          <li key={event.title}>
            <CardCollection
              variant="grid"
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
      <nav className="grid-page__pagination" aria-label="쪽 이동">
        <div className="grid-page__numbers">
          {[1, 2, 3, 4, 5].map((number) => (
            <PageMoveButton key={number} aria-current={number === 1 ? 'page' : undefined}>{number}</PageMoveButton>
          ))}
        </div>
        <div className="grid-page__arrows">
          <button type="button" aria-label="다음 쪽"><NextIcon display="box" /></button>
          <button type="button" aria-label="마지막 쪽"><DoubleIcon /></button>
        </div>
      </nav>
      <div className="page__center">
        <Button variant="prev" onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

export default GridPage
