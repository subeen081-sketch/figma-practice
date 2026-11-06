import flag from '../../assets/images/flag.png'
import './GovBanner.css'

function GovBanner({ wide = false, desktop = false }) {
  return (
    <div className={`gov-banner ${wide ? 'gov-banner--wide' : ''} ${desktop ? 'gov-banner--desktop' : ''}`.replace(/\s+/g, ' ').trim()}>
      <img src={flag} alt="태극기" className="gov-banner__flag" />
      <span>이 누리집은 대한민국 공식 전자정부 누리집입니다.</span>
    </div>
  )
}

export default GovBanner
