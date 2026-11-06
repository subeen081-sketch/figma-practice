import { useRef } from 'react'
import GridMenuButton from '../layout/GridMenuButton'
import PrevNextButtonSet from '../layout/PrevNextButtonSet'
import './PressList.css'

function PressList({ items }) {
  const listRef = useRef(null)
  const move = (direction) => listRef.current?.scrollBy({ left: direction * listRef.current.clientWidth, behavior: 'smooth' })

  return (
    <section className="press-list" aria-labelledby="press-title">
      <div className="press-list__head">
        <h2 id="press-title" className="press-list__title">보도자료</h2>
        <div className="press-list__buttons">
          <PrevNextButtonSet divider onPrev={() => move(-1)} onNext={() => move(1)} />
          <GridMenuButton label="보도자료 전체 보기" />
        </div>
      </div>
      <ul className="press-list__items" ref={listRef}>
        {items.map((item) => (
          <li key={item.title} className="press-list__item">
            <img src={item.src} alt="" />
            <p className="press-list__caption">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PressList
