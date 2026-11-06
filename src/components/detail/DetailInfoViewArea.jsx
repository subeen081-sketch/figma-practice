import CardImage from '../card/CardImage'
import './DetailInfoViewArea.css'

function DetailInfoViewArea({ src, alt, className = '', ...props }) {
  return <CardImage src={src} alt={alt} className={`detail-info-view-area ${className}`.trim()} {...props} />
}

export default DetailInfoViewArea
