import './NewsListItem.css'

function NewsListItem({ department, title, date }) {
  return (
    <a href="#" className="news-list-item">
      <span className="news-list-item__department">{department}</span>
      <span className="news-list-item__title">{title}</span>
      {date && <span className="news-list-item__date">{date}</span>}
    </a>
  )
}

export default NewsListItem
