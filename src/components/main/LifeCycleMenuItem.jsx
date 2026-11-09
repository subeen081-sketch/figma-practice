import './LifeCycleMenuItem.css'

const rem = (px) => `${px / 16}rem`

// hoverIcon: 항목별 호버 그림 { src, width, height, top, crop }
// - width·height·top: 호버 그림 칸의 크기와 위쪽 위치(px), 가로는 가운데 정렬
// - crop: Figma 이미지 자르기 값 [폭%, 높이%, 왼쪽%, 위%] (없으면 칸에 꽉 채움)
function HoverIcon({ src, width, height, top = 0, crop }) {
  const boxStyle = { width: rem(width), height: rem(height), top: rem(top), left: `calc(50% - ${rem(width / 2)})` }
  const imgStyle = crop
    ? { width: `${crop[0]}%`, height: `${crop[1]}%`, left: `${crop[2]}%`, top: `${crop[3]}%` }
    : { width: '100%', height: '100%', left: 0, top: 0, objectFit: 'cover' }

  return (
    <span className="life-cycle-menu-item__hover-icon" style={boxStyle}>
      <img src={src} alt="" style={imgStyle} />
    </span>
  )
}

// hover가 true이면 마우스를 올리거나 초점이 오면 기본 아이콘이 위로 밀려나고 호버 아이콘이 올라옵니다.
// hoverIcon이 없으면 (임시로) 같은 아이콘을 포인트 색으로 칠해 보여 줍니다.
function LifeCycleMenuItem({ src, label, style, hover = false, hoverIcon }) {
  const tintStyle = { ...style, maskImage: `url("${src}")`, WebkitMaskImage: `url("${src}")` }

  return (
    <a href="#" className={`life-cycle-menu-item ${hover ? 'life-cycle-menu-item--hover' : ''}`.trim()}>
      <span className="life-cycle-menu-item__box">
        <span className="life-cycle-menu-item__track">
          <img src={src} alt="" style={style} />
          {hover && (
            <span className="life-cycle-menu-item__hover">
              {hoverIcon ? <HoverIcon {...hoverIcon} /> : <span className="life-cycle-menu-item__tint" style={tintStyle} />}
            </span>
          )}
        </span>
      </span>
      {label}
    </a>
  )
}

export default LifeCycleMenuItem
