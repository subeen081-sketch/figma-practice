import './NextIcon.css'
import mobile from '../../assets/icons/next-icon-mobile.png'
import desktop from '../../assets/icons/next-icon-desktop.png'

function NextIcon({ display = 'default', alt = '', className = '', ...props }) {
  const classNames = `next-icon next-icon--${display} ${className}`.trim()

  // 원은 모바일과 데스크탑이 같아서 32px 이미지 하나만 씁니다.
  if (display === 'circle') {
    return <img src={desktop} alt={alt} className={classNames} {...props} />
  }

  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={classNames} {...props} />
    </picture>
  )
}

export default NextIcon
