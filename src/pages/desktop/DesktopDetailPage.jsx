import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../components/button/Button'
import InquiryButton from '../../components/button/InquiryButton'
import DesktopMainCardTextGroup from '../../components/card/DesktopMainCardTextGroup'
import ViewAreaDesktop from '../../components/card/ViewAreaDesktop'
import DetailDescriptionDesktop from '../../components/detail/DetailDescriptionDesktop'
import DesktopEventStatus from '../../components/label/DesktopEventStatus'
import DesktopProgressStatus from '../../components/label/DesktopProgressStatus'
import DesktopTopArea from '../../components/layout/DesktopTopArea'
import { DESKTOP_DETAIL } from '../../data/desktop'
import { DETAIL_EVENT as event } from '../../data/events'
import './DesktopDetailPage.css'

function DesktopDetailPage() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className={`desktop-detail-page ${open ? 'desktop-detail-page--open' : ''}`.trim()}>
      <DesktopTopArea />
      <article className="desktop-detail-page__card">
        <ViewAreaDesktop variant="detail" src={event.src} alt={`${event.title} 포스터`} className="desktop-detail-page__poster" />
        <div className="desktop-detail-page__info">
          <div className="desktop-detail-page__labels">
            <DesktopProgressStatus status={event.status} size="large" />
            <DesktopEventStatus category={event.category} size="large" />
          </div>
          <DesktopMainCardTextGroup title={DESKTOP_DETAIL.title} date={event.date} place={event.place} who={DESKTOP_DETAIL.who} price={event.price} />
          <InquiryButton phone={event.phone} />
        </div>
      </article>
      <div className="desktop-detail-page__bottom">
        <DetailDescriptionDesktop onToggle={setOpen}>{event.description}</DetailDescriptionDesktop>
        <Button variant="list" onClick={() => navigate('/grid')} />
      </div>
    </div>
  )
}

export default DesktopDetailPage
