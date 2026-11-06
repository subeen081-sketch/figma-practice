import markWa from '../../assets/images/mark-wa.png'
import CityLogo from './CityLogo'
import FooterBannerMenu from './FooterBannerMenu'
import FooterMenuItem from './FooterMenuItem'
import HeadMenuItem from './HeadMenuItem'
import './Footer.css'

const MENUS = ['시민', '사업자', '관광객', '부서·읍면동', '패밀리 사이트', '관련기관 사이트']
const LINKS = ['개인정보처리방침', '저작권보호정책', '이메일무단수집거부', '전화번호안내', '오시는길', '사이트맵']

function Footer() {
  return (
    <footer className="footer">
      <FooterBannerMenu />
      <div className="footer__menus">
        {MENUS.map((menu) => (
          <FooterMenuItem key={menu}>{menu}</FooterMenuItem>
        ))}
      </div>
      <div className="footer__links">
        {LINKS.map((link, index) => (
          <HeadMenuItem key={link} active={index === 0}>{link}</HeadMenuItem>
        ))}
      </div>
      <div className="footer__logo">
        <CityLogo link={false} />
      </div>
      <div className="footer__address">
        <p>우)11622 경기도 의정부시 시민로 1 (의정부동)</p>
        <p className="footer__contacts">
          <span><span className="footer__tel-label">전화 :</span> 031-828-2114 (365일 24시간) </span>
          <span><b>팩스 : </b>031-828-2119</span>
          <span><b>청각장애 : </b>070-7947-0013,4</span>
        </p>
        <p className="footer__copyright">
          Copyright © 2016 <span className="footer__tel-label">Uijeongbu CITY </span>All Rights Reserved.
        </p>
      </div>
      <div className="footer__mark">
        <img src={markWa} alt="웹 접근성 품질인증 마크" />
      </div>
    </footer>
  )
}

export default Footer
