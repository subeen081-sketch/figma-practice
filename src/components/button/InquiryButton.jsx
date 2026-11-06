import PhoneIcon from '../icon/PhoneIcon'
import './InquiryButton.css'

function InquiryButton({ phone, className = '', ...props }) {
  if (!phone) return null

  return (
    <a href={`tel:${phone}`} className={`inquiry-button ${className}`.trim()} {...props}>
      <PhoneIcon />
      문의하기
    </a>
  )
}

export default InquiryButton
