import './ServiceMenuItem.css'

// hover가 true이면 마우스를 올리거나 초점이 오면 기본 아이콘이 위로 밀려나고 항목별 호버 아이콘(hoverSrc)이 올라옵니다.
// hoverInset: 민원24처럼 호버 그림에 여백이 있는 경우
function ServiceMenuItem({ src, hoverSrc, hoverInset = false, label, hover = false }) {
  const showHover = hover && hoverSrc

  return (
    <a href="#" className={`service-menu-item ${showHover ? 'service-menu-item--hover' : ''}`.trim()}>
      <span className="service-menu-item__box">
        <span className="service-menu-item__track">
          <img src={src} alt="" />
          {showHover && <img src={hoverSrc} alt="" className={`service-menu-item__hover ${hoverInset ? 'service-menu-item__hover--inset' : ''}`.trim()} />}
        </span>
      </span>
      {label}
    </a>
  )
}

export default ServiceMenuItem
