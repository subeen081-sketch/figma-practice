import './SnsBannerSlide.css'

function SnsBannerSlide({ slides, index }) {
  return (
    <div className="sns-banner-slide">
      <div className="sns-banner-slide__view">
        <div className="sns-banner-slide__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((src, slideIndex) => (
            <img key={src} src={src} alt={`SNS 소식 ${slideIndex + 1}`} aria-hidden={slideIndex !== index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SnsBannerSlide
