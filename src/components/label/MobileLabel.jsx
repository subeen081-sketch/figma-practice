import './MobileLabel.css'

const LABELS = {
  ongoing: '진행중',
  upcoming: '진행전',
  ended: '진행종료',
}

function MobileLabel({ status = 'ongoing', size = 'small', className = '', ...props }) {
  const classNames = `mobile-label mobile-label--${status} mobile-label--${size} ${className}`.trim()

  return (
    <span className={classNames} {...props}>
      {LABELS[status]}
    </span>
  )
}

export default MobileLabel
