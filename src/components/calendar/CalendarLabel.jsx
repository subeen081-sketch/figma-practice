import './CalendarLabel.css'

function CalendarLabel({ className = '', children = '이번주', ...props }) {
  return (
    <span className={`calendar-label ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}

export default CalendarLabel
