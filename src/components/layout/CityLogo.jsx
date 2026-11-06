import { Link } from 'react-router'
import logo from '../../assets/images/city-logo.png'
import './CityLogo.css'

function CityLogo({ link = true, size = 'mobile' }) {
  const image = <img src={logo} alt="의정부시" className={`city-logo city-logo--${size}`} />

  return link ? <Link to="/" aria-label="의정부시 메인으로">{image}</Link> : image
}

export default CityLogo
