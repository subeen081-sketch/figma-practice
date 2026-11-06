import sprite from '../../assets/images/sns-sprite.png'
import './SnsTabs.css'

// Figma의 이미지 자르기 값입니다.
const TABS = [
  { label: '유튜브', sx: 0.1593, sy: 0.6667, tx: 0, ty: 0.3333 },
  { label: '페이스북', sx: 0.1538, sy: 0.6444, tx: 0.1593, ty: 0.3556 },
  { label: '블로그', sx: 0.1538, sy: 0.6444, tx: 0.3132, ty: 0.3556 },
  { label: '인스타그램', sx: 0.1538, sy: 0.6444, tx: 0.467, ty: 0.3556 },
  { label: '소식지', sx: 0.1593, sy: 0.6444, tx: 0.6209, ty: 0.3556 },
]
const SIZES = { small: [23, 24], large: [29, 30] }
const rem = (px) => `${+(px / 16).toFixed(4)}rem`

function iconStyle({ sx, sy, tx, ty }, size, isLast) {
  const [baseWidth, height] = SIZES[size]
  const width = size === 'small' && isLast ? baseWidth + 1 : baseWidth
  const fullWidth = width / sx
  const fullHeight = height / sy

  return {
    width: rem(width),
    height: rem(height),
    backgroundImage: `url(${sprite})`,
    backgroundSize: `${rem(fullWidth)} ${rem(fullHeight)}`,
    backgroundPosition: `${rem(-tx * fullWidth)} ${rem(-ty * fullHeight)}`,
  }
}

function SnsTabs({ index, onChange, size = 'small' }) {
  return (
    <div className={`sns-tabs sns-tabs--${size}`}>
      {TABS.map((tab, tabIndex) => (
        <button
          key={tab.label}
          type="button"
          aria-label={tab.label}
          aria-pressed={index === tabIndex}
          className={`sns-tabs__tab ${index === tabIndex ? 'sns-tabs__tab--active' : ''}`.trim()}
          onClick={() => onChange?.(tabIndex)}
        >
          <span className="sns-tabs__icon" style={iconStyle(tab, size, tabIndex === TABS.length - 1)} />
        </button>
      ))}
    </div>
  )
}

export default SnsTabs
