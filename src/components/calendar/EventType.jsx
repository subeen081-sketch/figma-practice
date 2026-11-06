import EventMarker from './EventMarker'
import './EventType.css'

const LABELS = {
  event: '행사',
  festival: '축제',
  performance: '공연',
}

function EventType({ category = 'event', className = '', ...props }) {
  return (
    <span className={`event-type ${className}`.trim()} {...props}>
      <EventMarker category={category} aria-hidden="true" />
      {LABELS[category]}
    </span>
  )
}

export default EventType
