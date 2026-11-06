import './NewsTab.css'

function NewsTab({ active = false, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`news-tab ${active ? 'news-tab--active' : ''}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default NewsTab
