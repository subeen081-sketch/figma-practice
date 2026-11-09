import './SearchIcon.css'
import mobile from '../../assets/icons/search-icon-mobile.png'
import desktop from '../../assets/icons/search-icon-desktop.png'

function SearchIcon({ alt = '', className = '', ...props }) {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={mobile} alt={alt} className={`search-icon ${className}`.trim()} {...props} />
    </picture>
  )
}

export default SearchIcon
