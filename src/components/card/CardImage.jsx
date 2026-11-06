import { useState } from 'react'
import './CardImage.css'

function CardImage({ src, alt = '', position, className = '', children, ...props }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const showImage = src && failedSrc !== src

  return (
    <div className={`card-image ${className}`.trim()} {...props}>
      {showImage ? (
        <img src={src} alt={alt} className="card-image__img" style={position ? { objectPosition: position } : undefined} onError={() => setFailedSrc(src)} />
      ) : (
        <span role={alt ? 'img' : undefined} aria-label={alt || undefined} className="card-image__img" />
      )}
      {children}
    </div>
  )
}

export default CardImage
