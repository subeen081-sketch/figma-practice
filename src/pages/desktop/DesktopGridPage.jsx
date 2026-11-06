import { useNavigate } from 'react-router'
import Button from '../../components/button/Button'
import DesktopPageMoveButton from '../../components/button/DesktopPageMoveButton'
import Card from '../../components/card/Card'
import DesktopSearchBarCombobox from '../../components/form/DesktopSearchBarCombobox'
import DesktopEventStatus from '../../components/label/DesktopEventStatus'
import DesktopProgressStatus from '../../components/label/DesktopProgressStatus'
import DesktopTopArea from '../../components/layout/DesktopTopArea'
import { DESKTOP_GRID_EVENTS } from '../../data/desktop'
import './DesktopGridPage.css'

function DesktopGridPage() {
  const navigate = useNavigate()

  return (
    <div className="desktop-grid-page">
      <DesktopTopArea />
      <div className="desktop-grid-page__search">
        <DesktopSearchBarCombobox grid />
        <DesktopSearchBarCombobox variant="combobox" grid />
      </div>
      <h1 className="desktop-grid-page__sr">행사·축제 그리드 보기</h1>
      <ul className="desktop-grid-page__cards">
        {DESKTOP_GRID_EVENTS.map((event) => (
          <li key={event.title}>
            <Card variant="grid" to="/detail" src={event.src} alt={`${event.title} 포스터`} position={event.position} title={event.title} date={event.date} place={event.place}>
              <DesktopProgressStatus status={event.status} />
                <DesktopEventStatus category={event.category} />
            </Card>
          </li>
        ))}
      </ul>
      <nav className="desktop-grid-page__pagination" aria-label="쪽 이동">
        <div>
          <DesktopPageMoveButton variant="double-prev" />
          <DesktopPageMoveButton variant="prev" />
        </div>
        <div className="desktop-grid-page__numbers">
          {[1, 2, 3, 4, 5].map((number) => (
            <DesktopPageMoveButton key={number} aria-current={number === 1 ? 'page' : undefined}>{number}</DesktopPageMoveButton>
          ))}
        </div>
        <div>
          <DesktopPageMoveButton variant="next" />
          <DesktopPageMoveButton variant="double-next" />
        </div>
      </nav>
      <Button variant="prev" onClick={() => navigate('/')} />
    </div>
  )
}

export default DesktopGridPage
