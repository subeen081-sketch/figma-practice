import './CardDescriptionDesktop.css'

function CardDescriptionDesktop({ title, date, place, className = '', ...props }) {
  return (
    <div className={`card-description-desktop ${className}`.trim()} {...props}>
      <h3 className="card-description-desktop__title">{title}</h3>
      <div>
        <p className="card-description-desktop__text">{date}</p>
        <p className="card-description-desktop__text">{place}</p>
      </div>
    </div>
  )
}

export default CardDescriptionDesktop
