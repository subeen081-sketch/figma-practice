import menuIcon from '../../assets/images/menu.png'
import searchIcon from '../../assets/images/search.png'
import CityLogo from './CityLogo'
import TopBottomButton from './TopBottomButton'
import './DesktopGlobalNav.css'

const MENUS = ['정보공개', '열린민원', '시정소식', '시민참여', '의정부소개', '분야별정보']

function DesktopGlobalNav() {
  return (
    <div className="desktop-global-nav">
      <div className="desktop-global-nav__inner">
        <div className="desktop-global-nav__left">
          <CityLogo size="desktop" />
          <nav aria-label="주메뉴">
            <ul className="desktop-global-nav__menus">
              {MENUS.map((menu) => (
                <li key={menu}><a href="#">{menu}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="desktop-global-nav__right">
          <TopBottomButton variant="favorite" />
          <button type="button" aria-label="전체 메뉴"><img src={menuIcon} alt="" /></button>
          <button type="button" aria-label="검색"><img src={searchIcon} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default DesktopGlobalNav
