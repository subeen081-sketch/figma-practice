import './HeadMenuItem.css'

function HeadMenuItem({ children, active = false, className = '', ...props }) {
  return (
    <a href="#" className={`head-menu-item ${active ? 'head-menu-item--active' : ''} ${className}`.replace(/\s+/g, ' ').trim()} {...props}>
      {children}
    </a>
  )
}

export default HeadMenuItem
