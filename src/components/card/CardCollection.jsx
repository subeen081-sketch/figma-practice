import { Link } from 'react-router'
import CardDescription from './CardDescription'
import CardImage from './CardImage'
import './CardCollection.css'

function CardCollection({
  variant = 'grid',
  src,
  alt,
  title,
  date,
  place,
  href,
  to,
  position,
  className = '',
  children,
  ...props
}) {
  const Tag = to ? Link : href ? 'a' : 'div'
  const target = to ? { to } : href ? { href } : {}
  const classNames = `card-collection card-collection--${variant} ${className}`.trim()

  return (
    <Tag {...target} className={classNames} {...props}>
      <CardImage src={src} alt={alt} position={position} className="card-collection__image">
        {children}
      </CardImage>
      <CardDescription title={title} date={date} place={place} className="card-collection__description" />
    </Tag>
  )
}

export default CardCollection
