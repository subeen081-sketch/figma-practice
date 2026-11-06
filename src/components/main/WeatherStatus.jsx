import './WeatherStatus.css'

function WeatherStatus({ level = 'good' }) {
  const label = { good: '좋음', normal: '보통', bad: '나쁨' }[level]

  return <span className={`weather-status weather-status--${level}`}>{label}</span>
}

export default WeatherStatus
