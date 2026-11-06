import './ScheduleCheck.css'

function ScheduleCheck({ className = '', children = '일정확인', ...props }) {
  return (
    <span className={`schedule-check ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}

export default ScheduleCheck
