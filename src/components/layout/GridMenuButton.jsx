import grid from '../../assets/icons/grid-menu.png'
import './GridMenuButton.css'

function GridMenuButton({ className = '', label = '전체 보기', ...props }) {
  return (
    <button type="button" aria-label={label} className={`grid-menu-button ${className}`.trim()} {...props}>
      <img src={grid} alt="" />
    </button>
  )
}

export default GridMenuButton
