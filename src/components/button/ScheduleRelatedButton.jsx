import './ScheduleRelatedButton.css'

const LABELS = {
  check: '일정확인',
  all: '전체일정',
}

function ScheduleRelatedButton({ variant = 'check', className = '', ...props }) {
  const classNames = `schedule-related-button schedule-related-button--${variant} ${className}`.trim()

  return (
    <button type="button" className={classNames} {...props}>
      {LABELS[variant]}
    </button>
  )
}

export default ScheduleRelatedButton
