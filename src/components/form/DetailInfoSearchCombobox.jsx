import RecordIcon from '../icon/RecordIcon'
import SearchIcon from '../icon/SearchIcon'
import './DetailInfoSearchCombobox.css'

function DetailInfoSearchCombobox({
  value,
  onChange,
  onSubmit,
  onVoiceSearch,
  placeholder = '검색어를 입력하세요',
  className = '',
  ...props
}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmit?.(event)
  }

  return (
    <form
      role="search"
      className={`detail-info-search-combobox ${className}`.trim()}
      onSubmit={handleSubmit}
      {...props}
    >
      <button type="submit" className="detail-info-search-combobox__button" aria-label="검색">
        <SearchIcon />
      </button>
      <input
        type="search"
        className="detail-info-search-combobox__input"
        aria-label="검색어"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="detail-info-search-combobox__button"
        aria-label="음성 검색"
        onClick={onVoiceSearch}
      >
        <RecordIcon />
      </button>
    </form>
  )
}

export default DetailInfoSearchCombobox
