import { useRef } from 'react'
import PrevNextButtonSet from '../layout/PrevNextButtonSet'
import ServiceMenuItem from './ServiceMenuItem'
import './MainServiceList.css'

function MainServiceList({ services }) {
  const listRef = useRef(null)
  const move = (direction) => listRef.current?.scrollBy({ left: direction * listRef.current.clientWidth, behavior: 'smooth' })

  return (
    <section className="main-service-list" aria-labelledby="main-service-title">
      <div className="main-service-list__head">
        <h2 id="main-service-title" className="main-service-list__title">
          주요 <span>서비스</span>
        </h2>
        <PrevNextButtonSet divider onPrev={() => move(-1)} onNext={() => move(1)} />
      </div>
      <div className="main-service-list__items" ref={listRef}>
        {services.map((service) => (
          <ServiceMenuItem key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default MainServiceList
