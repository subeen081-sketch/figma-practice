import DownIcon2 from '../icon/DownIcon2'
import RecordIcon from '../icon/RecordIcon'
import SearchIcon from '../icon/SearchIcon'
import './DesktopSearchBarCombobox.css'

const EVENT_TYPES = [
  { value: 'all', label: '전체' },
  { value: 'event', label: '행사' },
  { value: 'festival', label: '축제' },
  { value: 'performance', label: '공연' },
]

function DesktopSearchBarCombobox({
  variant = 'search',
  grid = false,
  value,
  onChange,
  onSubmit,
  onVoiceSearch,
  placeholder = '검색어를 입력하세요',
  label = '이벤트 종류',
  className = '',
  ...props
}) {
  const gridClass = grid ? 'desktop-search-bar-combobox--grid' : ''
  const classNames = `desktop-search-bar-combobox desktop-search-bar-combobox--${variant} ${gridClass} ${className}`
    .replace(/\s+/g, ' ')
    .trim()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit?.(event)
  }

  if (variant === 'combobox') {
    return (
      <div className={classNames} {...props}>
        <select
          className="desktop-search-bar-combobox__select"
          aria-label={label}
          value={value}
          onChange={onChange}
        >
          {EVENT_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <DownIcon2 className="desktop-search-bar-combobox__arrow" />
      </div>
    )
  }

  return (
    <form role="search" className={classNames} onSubmit={handleSubmit} {...props}>
      <button type="submit" className="desktop-search-bar-combobox__search-button" aria-label="검색">
        <SearchIcon />
      </button>
      <input
        type="search"
        className="desktop-search-bar-combobox__input"
        aria-label="검색어"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="desktop-search-bar-combobox__voice-button"
        aria-label="음성 검색"
        onClick={onVoiceSearch}
      >
        <RecordIcon />
      </button>
    </form>
  )
}

export default DesktopSearchBarCombobox
