import './EventMarker.css'

const LABELS = {
  event: '행사',
  festival: '축제',
  performance: '공연',
}

function EventMarker({ category = 'event', className = '', ...props }) {
  const classNames = `event-marker event-marker--${category} ${className}`.trim()

  return <span role="img" aria-label={LABELS[category]} className={classNames} {...props} />
}

export default EventMarker
