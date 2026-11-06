import './MobileSlide.css'

function MobileSlide({ slides, index }) {
  return (
    <div className="mobile-slide">
      <div className="mobile-slide__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((src, slideIndex) => (
          <img key={src} src={src} alt={`메인 배너 ${slideIndex + 1}`} aria-hidden={slideIndex !== index} />
        ))}
      </div>
    </div>
  )
}

export default MobileSlide
