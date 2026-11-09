import upWhite from '../../assets/icons/up-white.png'
import guideBooking from '../../assets/images/guide-booking.png'
import guideCustom from '../../assets/images/guide-custom.png'
import guideMyMenu from '../../assets/images/guide-my-menu.png'
import { cropBox } from '../../data/crop'
import LifeCycleMenuItem from '../main/LifeCycleMenuItem'
import './DesktopSidebar.css'

const ITEMS = [
  { src: guideMyMenu, label: '나만의 메뉴', style: cropBox(40, 47, 14, 0, 0.483, 0.547, 0.224, 0.235) },
  { src: guideCustom, label: '맞춤형 서비스', style: cropBox(57, 57, 6, -5, 0.683, 0.683, 0.15, 0.15) },
  { src: guideBooking, label: '통합예약', style: cropBox(54, 51, 7, -2, 0.607, 0.533, 0.214, 0.25) },
]

function DesktopSidebar({ className = '' }) {
  return (
    <aside className={`desktop-sidebar ${className}`.trim()} aria-label="바로가기">
      {ITEMS.map((item) => (
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
