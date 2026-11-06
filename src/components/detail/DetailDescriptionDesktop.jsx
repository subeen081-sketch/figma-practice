import DetailInfo from './DetailInfo'
import './DetailDescriptionDesktop.css'

function DetailDescriptionDesktop({ className = '', children, ...props }) {
  return (
    <DetailInfo className={`detail-description-desktop ${className}`.trim()} {...props}>
      {children}
    </DetailInfo>
  )
}

export default DetailDescriptionDesktop
