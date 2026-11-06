import './PageMoveButton.css'

function PageMoveButton({ className = '', children, ...props }) {
  return (
    <button type="button" className={`page-move-button ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export default PageMoveButton
