import { Link } from 'react-router'
import CardDescriptionDesktop from './CardDescriptionDesktop'
import ViewAreaDesktop from './ViewAreaDesktop'
import './Card.css'

const VIEW_VARIANTS = {
  main: 'main',
  calendar: 'wide',
  grid: 'grid',
}

function Card({ variant = 'main', src, alt, position, title, date, place, href, to, className = '', children, ...props }) {
  const Tag = to ? Link : href ? 'a' : 'div'
  const target = to ? { to } : href ? { href } : {}
  const classNames = `card card--${variant} ${className}`.trim()

  return (
    <Tag {...target} className={classNames} {...props}>
      <ViewAreaDesktop variant={VIEW_VARIANTS[variant]} src={src} alt={alt} position={position} className="card__view">
        {children}
      </ViewAreaDesktop>
      <CardDescriptionDesktop title={title} date={date} place={place} />
    </Tag>
  )
}

export default Card
