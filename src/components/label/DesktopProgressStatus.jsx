import './DesktopProgressStatus.css'

const LABELS = {
  ongoing: '진행중',
  upcoming: '진행전',
  ended: '진행종료',
}

function DesktopProgressStatus({ status = 'ongoing', size = 'small', className = '', ...props }) {
  const classNames =
    `desktop-progress-status desktop-progress-status--${status} desktop-progress-status--${size} ${className}`.trim()

  return (
    <span className={classNames} {...props}>
      {LABELS[status]}
    </span>
  )
}

export default DesktopProgressStatus
