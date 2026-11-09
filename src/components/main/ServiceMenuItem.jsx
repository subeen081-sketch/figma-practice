import './ServiceMenuItem.css'

// hover가 true이면 마우스를 올리거나 초점이 오면 기본 아이콘이 위로 밀려나고,
// 같은 아이콘을 포인트 색으로 칠한 호버 아이콘이 올라옵니다.
// (임시) 시안에 항목별 호버 그림이 없어서 기본 아이콘의 색만 바꿔 보여 줍니다.
function ServiceMenuItem({ src, label, hover = false }) {
  return (
    <a href="#" className={`service-menu-item ${hover ? 'service-menu-item--hover' : ''}`.trim()}>
      <span className="service-menu-item__box">
        <span className="service-menu-item__track">
          <img src={src} alt="" />
          {hover && (
            <span className="service-menu-item__hover">
              <span className="service-menu-item__tint" style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}>
                <img src={src} alt="" />
              </span>
            </span>
          )}
        </span>
      </span>
      {label}
    </a>
  )
}

export default ServiceMenuItem
