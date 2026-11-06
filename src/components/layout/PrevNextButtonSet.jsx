import LineArrowButton from './LineArrowButton'
import './PrevNextButtonSet.css'

function PrevNextButtonSet({ onPrev, onNext, divider = false, className = '', ...props }) {
  return (
    <div className={`prev-next-button-set ${className}`.trim()} {...props}>
      <LineArrowButton variant="prev" onClick={onPrev} />
      {divider && <span className="prev-next-button-set__line" />}
      <LineArrowButton variant="next" onClick={onNext} />
    </div>
  )
}

export default PrevNextButtonSet
