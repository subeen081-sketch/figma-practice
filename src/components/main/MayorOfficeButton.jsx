import './MayorOfficeButton.css'

function MayorOfficeButton({ className = '', ...props }) {
  return (
    <a href="#" className={`mayor-office-button ${className}`.trim()} {...props}>
      <span className="mayor-office-button__mark" />
      온라인 시장실 바로가기
    </a>
  )
}

export default MayorOfficeButton
