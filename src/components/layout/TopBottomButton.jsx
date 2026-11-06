import plus from '../../assets/icons/plus.png'
import star from '../../assets/icons/star.png'
import './TopBottomButton.css'

const VARIANTS = {
  favorite: { icon: star, label: '즐겨찾는 메뉴' },
  banner: { icon: plus, label: '배너모음' },
}

function TopBottomButton({ variant = 'favorite', className = '', ...props }) {
  const { icon, label } = VARIANTS[variant]
  const iconFirst = variant === 'favorite'

  return (
    <button type="button" className={`top-bottom-button top-bottom-button--${variant} ${className}`.trim()} {...props}>
      {iconFirst && <img src={icon} alt="" />}
      {label}
      {!iconFirst && <img src={icon} alt="" />}
    </button>
  )
}

export default TopBottomButton
