import CardImage from './CardImage'
import './ViewAreaDesktop.css'

function ViewAreaDesktop({ variant = 'main', src, alt, position, className = '', children, ...props }) {
  const classNames = `view-area-desktop view-area-desktop--${variant} ${className}`.trim()

  return (
    <div className={classNames} {...props}>
      <CardImage src={src} alt={alt} position={position} className="view-area-desktop__image">
        {children}
      </CardImage>
    </div>
  )
}

export default ViewAreaDesktop
