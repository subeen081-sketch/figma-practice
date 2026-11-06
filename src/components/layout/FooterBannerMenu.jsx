import { useRef } from 'react'
import LineArrowButton from './LineArrowButton'
import PauseButton from './PauseButton'
import TopBottomButton from './TopBottomButton'
import './FooterBannerMenu.css'

const LINKS = ['경기신용보증재단', '경기 여성창업플랫폼 꿈마루', '경인지방통계청', '국가인권위원회', '국민연금', '국민재난안전포털', '공익신고자 보호제도', '신용회복위원회', '소비자24', '내PC 돌보미', '올바로시스템(건설폐기물처리)', '건축행정시스템 세움터', '경기아트센터']

function FooterBannerMenu() {
  const listRef = useRef(null)
  const move = (direction) => listRef.current?.scrollBy({ left: direction * listRef.current.clientWidth, behavior: 'smooth' })

  return (
    <div className="footer-banner-menu">
      <div className="footer-banner-menu__controls">
        <TopBottomButton variant="banner" />
        <div className="footer-banner-menu__buttons">
          <LineArrowButton variant="prev" circle onClick={() => move(-1)} />
          <PauseButton circle />
          <LineArrowButton variant="next" circle onClick={() => move(1)} />
        </div>
      </div>
      <ul className="footer-banner-menu__list" ref={listRef}>
        {LINKS.map((link) => (
          <li key={link}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default FooterBannerMenu
