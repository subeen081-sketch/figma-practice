import CalendarDateCell from './CalendarDateCell'
import CalendarHeader from './CalendarHeader'
import CalendarLabel from './CalendarLabel'
import CalendarWeekday from './CalendarWeekday'
import EventMarker from './EventMarker'
import EventType from './EventType'
import './CalendarMonth.css'

const WEEKDAYS = [['일', 'red'], ['월'], ['화'], ['수'], ['목'], ['금'], ['토', 'blue']]

// 시안의 2026년 10월 달력입니다. 9일은 시안대로 일요일 색입니다.
const WEEKS = [
  [[27, 'disabled'], [28, 'disabled'], [29, 'disabled'], [30, 'disabled'], [1], [2], [3, 'saturday']],
  [[4, 'sunday'], [5], [6], [7], [8], [9, 'sunday'], [10, 'saturday']],
  [[11, 'sunday'], [12], [13], [14], [15], [16], [17, 'saturday']],
  [[18, 'sunday'], [19], [20], [21], [22], [23], [24, 'saturday']],
  [[25, 'sunday'], [26], [27], [28], [29], [30], [31, 'saturday']],
]
const THIS_WEEK = 2
const MARKERS = { 3: 'festival', 7: 'event', 9: 'festival', 10: 'festival', 16: 'festival', 17: 'festival', 24: 'festival', 25: 'festival', 31: 'festival' }

function CalendarMonth({ className = '' }) {
  return (
    <section className={`calendar-month ${className}`.trim()} aria-label="2026년 10월 달력">
      <div className="calendar-month__head"><CalendarHeader className="calendar-month__header" year={2026} month={10} /></div>
      <div className="calendar-month__types">
        <CalendarLabel />
        <EventType category="event" />
        <EventType category="festival" />
        <EventType category="performance" />
      </div>
      <div className="calendar-month__dates">
        <div className="calendar-month__weekdays">
          {WEEKDAYS.map(([day, tone]) => (
            <CalendarWeekday key={day} tone={tone}>{day}</CalendarWeekday>
          ))}
        </div>
        {WEEKS.map((week, weekIndex) => (
          <div key={week[0][0]} className="calendar-month__week">
            {week.map(([date, variant]) => (
              <CalendarDateCell key={date} variant={variant} thisWeek={weekIndex === THIS_WEEK}>
                {date}
                {variant !== 'disabled' && MARKERS[date] && (
                  <EventMarker category={MARKERS[date]} className="calendar-month__marker" />
                )}
              </CalendarDateCell>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CalendarMonth
