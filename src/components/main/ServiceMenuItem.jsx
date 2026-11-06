import './ServiceMenuItem.css'

function ServiceMenuItem({ src, label }) {
  return (
    <a href="#" className="service-menu-item">
      <span className="service-menu-item__box">
        <img src={src} alt="" />
      </span>
      {label}
    </a>
  )
}

export default ServiceMenuItem
