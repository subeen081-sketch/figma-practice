import upWhite from '../../assets/icons/up-white.png'
import { QUICK_MENU_ITEMS } from '../../data/main'
import LifeCycleMenuItem from '../main/LifeCycleMenuItem'
import './MobileQuickBar.css'

// 모바일 하단 고정 바로가기 바: 데스크탑 사이드바와 같은 항목을 화면 아래에 가로로 놓습니다.
// (참고 이미지: 「Section 2」 6:105)
function MobileQuickBar() {
  return (
    <nav className="mobile-quick-bar" aria-label="바로가기">
      <ul className="mobile-quick-bar__items">
        {QUICK_MENU_ITEMS.map((item) => (
          <li key={item.label}>
            <LifeCycleMenuItem {...item} hover />
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="맨 위로"
        className="mobile-quick-bar__top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={upWhite} alt="" />
      </button>
    </nav>
  )
}

export default MobileQuickBar
