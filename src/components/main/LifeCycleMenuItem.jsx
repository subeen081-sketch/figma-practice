import './LifeCycleMenuItem.css'

function LifeCycleMenuItem({ src, label, style }) {
  return (
    <a href="#" className="life-cycle-menu-item">
      <span className="life-cycle-menu-item__box">
        <img src={src} alt="" style={style} />
      </span>
      {label}
    </a>
  )
}

export default LifeCycleMenuItem
