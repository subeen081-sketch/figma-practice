import DoubleIcon from '../icon/DoubleIcon'
import NextIcon from '../icon/NextIcon'
import './MobilePageMoveLabel.css'

const DEFAULT_NAMES = {
  next: '다음 쪽',
  double: '마지막 쪽',
}

function MobilePageMoveLabel({ variant = 'next', className = '', ...props }) {
  return (
    <button
      type="button"
      className={`mobile-page-move-label ${className}`.trim()}
      aria-label={DEFAULT_NAMES[variant]}
      {...props}
    >
      {variant === 'double' ? <DoubleIcon /> : <NextIcon />}
    </button>
  )
}

export default MobilePageMoveLabel
