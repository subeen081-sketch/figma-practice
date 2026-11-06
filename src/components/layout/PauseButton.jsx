import './PauseButton.css'

function PauseButton({ circle = false, className = '', ...props }) {
  return (
    <button
      type="button"
      aria-label="일시정지"
      className={`pause-button ${circle ? 'pause-button--circle' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      <span className="pause-button__bar" />
      <span className="pause-button__bar" />
    </button>
  )
}

export default PauseButton
