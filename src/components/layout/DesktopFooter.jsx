import { useRef } from 'react'
import markWa from '../../assets/images/mark-wa.png'
import CityLogo from './CityLogo'
import FooterMenuItem from './FooterMenuItem'
import HeadMenuItem from './HeadMenuItem'
import LineArrowButton from './LineArrowButton'
import PauseButton from './PauseButton'
import TopBottomButton from './TopBottomButton'
import './DesktopFooter.css'

const BANNERS = ['경기신용보증재단', '경기 여성창업플랫폼 꿈마루', '경인지방통계청', '국가인권위원회', '국민연금', '국민재난안전포털', '공익신고자 보호제도', '신용회복위원회', '소비자24', '내PC 돌보미', '올바로시스템(건설폐기물처리)', '건축행정시스템 세움터', '경기아트센터']
const MENUS = ['시민', '사업자', '관광객', '부서·읍면동', '패밀리 사이트', '관련기관 사이트']
const LINKS = ['개인정보처리방침', '이메일무단수집거부', '전화번호안내', '오시는길', '사이트맵']

function DesktopFooter() {
  const listRef = useRef(null)
  const move = (direction) => listRef.current?.scrollBy({ left: direction * listRef.current.clientWidth, behavior: 'smooth' })

  return (
    <footer className="desktop-footer">
      <div className="desktop-footer__banner">
        <div className="desktop-footer__controls">
          <LineArrowButton variant="prev" circle onClick={() => move(-1)} />
          <PauseButton circle />
          <LineArrowButton variant="next" circle onClick={() => move(1)} />
          <TopBottomButton variant="banner" />
        </div>
        <ul className="desktop-footer__banner-list" ref={listRef}>
          {BANNERS.map((banner) => (
            <li key={banner}><a href="#">{banner}</a></li>
          ))}
        </ul>
      </div>
      <div className="desktop-footer__menus">
        {MENUS.map((menu) => (
          <FooterMenuItem key={menu}>{menu}</FooterMenuItem>
        ))}
      </div>
      <div className="desktop-footer__bottom">
        <CityLogo link={false} size="footer" />
        <div className="desktop-footer__text">
          <div className="desktop-footer__links">
            {LINKS.map((link, index) => (
              <HeadMenuItem key={link} active={index === 0}>{link}</HeadMenuItem>
            ))}
          </div>
          <p>우)11622 경기도 의정부시 시민로 1 (의정부동)</p>
          <p className="desktop-footer__contacts">
            <span><span className="desktop-footer__accent">전화 :</span> 031-828-2114 (365일 24시간)</span>
            <span><b>팩스 : </b>031-828-2119</span>
            <span><b>청각장애 : </b>070-7947-0013,4</span>
          </p>
          <p className="desktop-footer__copyright">
            Copyright © 2016 <span className="desktop-footer__accent">Uijeongbu CITY </span>All Rights Reserved.
          </p>
        </div>
        <img src={markWa} alt="웹 접근성 품질인증 마크" className="desktop-footer__mark" />
      </div>
    </footer>
  )
}

export default DesktopFooter
