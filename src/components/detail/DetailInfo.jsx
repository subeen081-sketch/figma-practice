import { useState } from 'react'
import DownIcon from '../icon/DownIcon'
import UpIcon from '../icon/UpIcon'
import './DetailInfo.css'

function DetailInfo({ title = '상세설명', defaultOpen = false, onToggle, className = '', children, ...props }) {
  const [open, setOpen] = useState(defaultOpen)
  const stateClass = open ? 'detail-info--open' : 'detail-info--closed'

  return (
    <div className={`detail-info ${stateClass} ${className}`.trim()} {...props}>
      {open && <div className="detail-info__content">{children}</div>}
      <button
        type="button"
        className="detail-info__button"
        aria-label={title}
        aria-expanded={open}
        onClick={() => {
          setOpen(!open)
          onToggle?.(!open)
        }}
      >
        {!open && <span>{title}</span>}
        {open ? <UpIcon /> : <DownIcon />}
      </button>
    </div>
  )
}

export default DetailInfo
