import './CalendarDateCell.css'

function CalendarDateCell({ variant = 'default', thisWeek = false, className = '', children, ...props }) {
  const thisWeekClass = thisWeek ? 'calendar-date-cell--this-week' : ''
  const classNames = `calendar-date-cell calendar-date-cell--${variant} ${thisWeekClass} ${className}`
    .replace(/\s+/g, ' ')
    .trim()

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

export default CalendarDateCell
