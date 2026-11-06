import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/button/Button'
import DetailTitle from '../components/card/DetailTitle'
import DetailInfo from '../components/detail/DetailInfo'
import DetailInfoViewArea from '../components/detail/DetailInfoViewArea'
import Label from '../components/label/Label'
import MainCardLabel from '../components/label/MainCardLabel'
import MobileLabel from '../components/label/MobileLabel'
import CityLogo from '../components/layout/CityLogo'
import Footer from '../components/layout/Footer'
import GovBanner from '../components/layout/GovBanner'
import { DETAIL_EVENT as event } from '../data/events'
import './Page.css'
import './DetailPage.css'

function DetailPage() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className={`page detail-page ${open ? 'detail-page--open' : ''}`.trim()}>
      <GovBanner />
      <div className="page__logo-row"><CityLogo /></div>
      <div className="detail-page__body">
        <article className="detail-page__card">
          <div className="detail-page__main">
            <div className="detail-page__image">
              <DetailInfoViewArea src={event.src} alt={`${event.title} 포스터`} />
              <div className="detail-page__labels">
                <MobileLabel status={event.status} size="large" />
                <Label category={event.category} size="large" />
              </div>
            </div>
            <DetailTitle>{event.title}</DetailTitle>
          </div>
          <div className="detail-page__infos">
            <MainCardLabel icon="calendar">{event.date}</MainCardLabel>
            <MainCardLabel icon="location">{event.place}</MainCardLabel>
            <MainCardLabel icon="user">{event.host}</MainCardLabel>
            <MainCardLabel icon="phone">{event.phone}</MainCardLabel>
            <MainCardLabel icon="amount">{event.price}</MainCardLabel>
          </div>
        </article>
        <div className="detail-page__description">
          <DetailInfo onToggle={setOpen}>{event.description}</DetailInfo>
        </div>
        <div className="page__end">
          <Button variant="list" onClick={() => navigate('/grid')} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailPage
