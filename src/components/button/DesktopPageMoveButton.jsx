import doubleNextIcon from '../../assets/icons/desktop-page-move-double-next.png'
import doublePrevIcon from '../../assets/icons/desktop-page-move-double-prev.png'
import NextIcon from '../icon/NextIcon'
import PrevIcon from '../icon/PrevIcon'
import './DesktopPageMoveButton.css'

const NAMES = {
  next: '다음 쪽',
  'double-next': '마지막 쪽',
  prev: '이전 쪽',
  'double-prev': '첫 쪽',
}

const ICONS = {
  next: <NextIcon />,
  'double-next': <img src={doubleNextIcon} alt="" className="desktop-page-move-button__double" />,
  prev: <PrevIcon />,
  'double-prev': <img src={doublePrevIcon} alt="" className="desktop-page-move-button__double" />,
}

function DesktopPageMoveButton({ variant = 'number', className = '', children, ...props }) {
  return (
    <button
      type="button"
      className={`desktop-page-move-button ${className}`.trim()}
      aria-label={NAMES[variant]}
      {...props}
    >
      {variant === 'number' ? children : ICONS[variant]}
    </button>
  )
}

export default DesktopPageMoveButton
