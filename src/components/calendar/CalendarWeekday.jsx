import './CalendarWeekday.css'

function CalendarWeekday({ tone = 'default', className = '', children, ...props }) {
  const classNames = `calendar-weekday calendar-weekday--${tone} ${className}`.trim()

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

export default CalendarWeekday
