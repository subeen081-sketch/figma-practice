import expand from '../../assets/icons/footer-expand.png'
import './FooterMenuItem.css'

function FooterMenuItem({ children, className = '', ...props }) {
  return (
    <button type="button" className={`footer-menu-item ${className}`.trim()} {...props}>
      {children}
      <img src={expand} alt="" />
    </button>
  )
}

export default FooterMenuItem
