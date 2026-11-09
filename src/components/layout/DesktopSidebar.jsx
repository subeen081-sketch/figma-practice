import upWhite from '../../assets/icons/up-white.png'
import { QUICK_MENU_ITEMS } from '../../data/main'
import LifeCycleMenuItem from '../main/LifeCycleMenuItem'
import './DesktopSidebar.css'

function DesktopSidebar({ className = '' }) {
  return (
    <aside className={`desktop-sidebar ${className}`.trim()} aria-label="바로가기">
      {QUICK_MENU_ITEMS.map((item) => (
        <div key={item.label} className="desktop-sidebar__item">
          <LifeCycleMenuItem {...item} hover />
        </div>
      ))}
      <button
        type="button"
        aria-label="맨 위로"
        className="desktop-sidebar__top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={upWhite} alt="" />
      </button>
    </aside>
  )
}

export default DesktopSidebar
