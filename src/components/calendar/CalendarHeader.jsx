import NextIcon from '../icon/NextIcon'
import PrevIcon from '../icon/PrevIcon'
import './CalendarHeader.css'

function CalendarHeader({ year, month, onPrev, onNext, className = '', ...props }) {
  return (
    <div className={`calendar-header ${className}`.trim()} {...props}>
      <button type="button" className="calendar-header__button" aria-label="이전 달" onClick={onPrev}>
        <PrevIcon display="circle" />
      </button>
      <h2 className="calendar-header__title">
        <span>{year}년</span>
        <span>{month}월</span>
      </h2>
      <button type="button" className="calendar-header__button" aria-label="다음 달" onClick={onNext}>
        <NextIcon display="circle" />
      </button>
    </div>
  )
}

export default CalendarHeader
