import './AmountIcon.css'
import mobile from '../../assets/icons/amount-icon-mobile.png'
import desktop from '../../assets/icons/amount-icon-desktop.png'

function AmountIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`amount-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default AmountIcon
