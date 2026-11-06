import './MainMenuButton.css'

const TABS = [
  { value: 'news', label: '주요 뉴스' },
  { value: 'participation', label: '시민참여' },
]

function MainMenuButton({ value = 'news', onChange, className = '' }) {
  return (
    <div className={`main-menu-button ${className}`.trim()}>
      {TABS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          aria-pressed={value === tab.value}
          className={`main-menu-button__tab ${value === tab.value ? 'main-menu-button__tab--active' : ''}`.trim()}
          onClick={() => onChange?.(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default MainMenuButton
