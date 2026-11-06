import next from '../../assets/icons/line-next.png'
import prev from '../../assets/icons/line-prev.png'
import './LineArrowButton.css'

const VARIANTS = {
  prev: { icon: prev, label: '이전' },
  next: { icon: next, label: '다음' },
}

function LineArrowButton({ variant = 'next', circle = false, className = '', ...props }) {
  const { icon, label } = VARIANTS[variant]

  return (
    <button
      type="button"
      aria-label={label}
      className={`line-arrow-button ${circle ? 'line-arrow-button--circle' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      <img src={icon} alt="" />
    </button>
  )
}

export default LineArrowButton
