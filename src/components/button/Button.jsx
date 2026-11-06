import './Button.css'

const LABELS = {
  prev: { mobile: '이전으로', desktop: '이전으로' },
  list: { mobile: '목록', desktop: '목록으로' },
}

function Button({ variant = 'prev', className = '', ...props }) {
  const classNames = `button button--${variant} ${className}`.trim()

  return (
    <button type="button" className={classNames} {...props}>
      <span className="button__text-mobile">{LABELS[variant].mobile}</span>
      <span className="button__text-desktop">{LABELS[variant].desktop}</span>
    </button>
  )
}

export default Button
