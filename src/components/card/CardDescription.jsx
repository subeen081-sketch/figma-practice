import './CardDescription.css'

function CardDescription({ title, date, place, className = '', ...props }) {
  return (
    <div className={`card-description ${className}`.trim()} {...props}>
      <h3 className="card-description__title">{title}</h3>
      <div>
        <p className="card-description__text">{date}</p>
        <p className="card-description__text">{place}</p>
      </div>
    </div>
  )
}

export default CardDescription
