import './LifeCycleMenuItem.css'

// hover가 true이면 마우스를 올리거나 초점이 오면 기본 아이콘이 위로 밀려나고,
// 같은 아이콘을 포인트 색으로 칠한 호버 아이콘이 올라옵니다.
// (임시) 시안에 항목별 호버 그림이 없어서 기본 아이콘의 색만 바꿔 보여 줍니다.
function LifeCycleMenuItem({ src, label, style, hover = false }) {
  const tintStyle = { ...style, maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }

  return (
    <a href="#" className={`life-cycle-menu-item ${hover ? 'life-cycle-menu-item--hover' : ''}`.trim()}>
      <span className="life-cycle-menu-item__box">
        <span className="life-cycle-menu-item__track">
          <img src={src} alt="" style={style} />
          {hover && (
            <span className="life-cycle-menu-item__hover">
              <span className="life-cycle-menu-item__tint" style={tintStyle} />
            </span>
          )}
        </span>
      </span>
      {label}
    </a>
  )
}

export default LifeCycleMenuItem
