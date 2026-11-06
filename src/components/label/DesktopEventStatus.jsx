import './DesktopEventStatus.css'

const LABELS = {
  event: '행사',
  festival: '축제',
  performance: '공연',
}

function DesktopEventStatus({ category = 'event', size = 'small', className = '', ...props }) {
  const classNames =
    `desktop-event-status desktop-event-status--${category} desktop-event-status--${size} ${className}`.trim()

  return (
    <span className={classNames} {...props}>
      {LABELS[category]}
    </span>
  )
}

export default DesktopEventStatus
