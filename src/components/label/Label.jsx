import './Label.css'

const LABELS = {
  event: '행사',
  festival: '축제',
  performance: '공연',
}

function Label({ category = 'event', size = 'small', className = '', ...props }) {
  const classNames = `label label--${category} label--${size} ${className}`.trim()

  return (
    <span className={classNames} {...props}>
      {LABELS[category]}
    </span>
  )
}

export default Label
