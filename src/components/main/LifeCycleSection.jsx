import { useState } from 'react'
import lifeInfant from '../../assets/images/life-infant.png'
import lifeMiddle from '../../assets/images/life-middle.png'
import lifeWomen from '../../assets/images/life-women.png'
import lifeYouthChild from '../../assets/images/life-youth-child.png'
import lifeYouth from '../../assets/images/life-youth.png'
import magnifier from '../../assets/images/magnifier.png'
import { cropBox } from '../../data/crop'
import './LifeCycleSection.css'

const PEOPLE = [
  { src: lifeInfant, label: '영유아' },
  { src: lifeYouthChild, label: '아동·청소년' },
  { src: lifeYouth, label: '청년' },
  { src: lifeMiddle, label: '중장년' },
  { src: lifeWomen, label: '여성' },
]
const TABS = ['생애주기별서비스', '참여공간']

function LifeCycleSection() {
  const [tab, setTab] = useState(0)

  return (
    <section className="life-cycle-section">
      <div className="life-cycle-section__intro">
        <span className="life-cycle-section__icon">
          <img src={magnifier} alt="" style={cropBox(140, 97, 0, 0, 0.653, 0.66, 0.164, 0.22)} />
        </span>
        <h2 className="life-cycle-section__title">
          지금 필요한<br /><span>의정부 정보</span><br />모두 여기에!
        </h2>
      </div>
      <div className="life-cycle-section__card">
        <div className="life-cycle-section__tabs">
          {TABS.map((label, index) => (
            <button
              key={label}
              type="button"
              aria-pressed={tab === index}
              className={tab === index ? 'life-cycle-section__tab--active' : undefined}
              onClick={() => setTab(index)}
            >
              {label}
            </button>
          ))}
        </div>
        <ul className="life-cycle-section__people">
          {PEOPLE.map((person) => (
            <li key={person.label}>
              <a href="#">
                <img src={person.src} alt="" />
                {person.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default LifeCycleSection
