import CityLogo from './CityLogo'
import GovBanner from './GovBanner'
import './DesktopTopArea.css'

function DesktopTopArea() {
  return (
    <div className="desktop-top-area">
      <GovBanner desktop />
      <div className="desktop-top-area__logo"><CityLogo size="desktop" /></div>
    </div>
  )
}

export default DesktopTopArea
