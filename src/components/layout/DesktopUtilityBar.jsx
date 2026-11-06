import expand from '../../assets/icons/expand-white.png'
import plus from '../../assets/icons/plus-white.png'
import flag from '../../assets/images/flag.png'
import zoomIn from '../../assets/images/zoom-in.png'
import zoomOut from '../../assets/images/zoom-out.png'
import './DesktopUtilityBar.css'

const SITES = ['의정부시청', '문화관광', '보건소', '동주민센터', '평생교육', '의정부시의회']
const LINKS = [['SNS', true], ['로그인', false], ['Languages', true]]

function DesktopUtilityBar() {
  return (
    <div className="desktop-utility-bar">
      <div className="desktop-utility-bar__inner">
        <ul className="desktop-utility-bar__group">
          {SITES.map((site) => (
            <li key={site}><a href="#">{site}<img src={plus} alt="" /></a></li>
          ))}
        </ul>
        <div className="desktop-utility-bar__right">
          <div className="desktop-utility-bar__zoom">
            <button type="button" aria-label="화면 확대"><img src={zoomIn} alt="" /></button>
            <button type="button" aria-label="화면 축소"><img src={zoomOut} alt="" /></button>
          </div>
          <img src={flag} alt="한국어" className="desktop-utility-bar__flag" />
          <ul className="desktop-utility-bar__group">
            {LINKS.map(([label, hasMenu]) => (
              <li key={label}><a href="#">{label}{hasMenu && <img src={expand} alt="" />}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DesktopUtilityBar
