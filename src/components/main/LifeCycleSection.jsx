import { useState } from 'react'
import iconAnonymous from '../../assets/icons/participation-anonymous.svg'
import iconBudget from '../../assets/icons/participation-budget.svg'
import iconFreeBoard from '../../assets/icons/participation-free-board.svg'
import iconHonoraryAuditor from '../../assets/icons/participation-honorary-auditor.svg'
import iconPencil from '../../assets/icons/participation-pencil.svg'
import iconPraise from '../../assets/icons/participation-praise.svg'
import iconProvinceNews from '../../assets/icons/participation-province-news.svg'
import iconPublicReport from '../../assets/icons/participation-public-report.svg'
import iconSinmungo from '../../assets/icons/participation-sinmungo.svg'
import iconSuggestion from '../../assets/icons/participation-suggestion.svg'
import iconSurvey from '../../assets/icons/participation-survey.svg'
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
// Figma 「메인2영역」 참여공간페이지(459:8684)의 버튼 12개
const PARTICIPATION = [
  { label: '제안마당', icon: iconPencil },
  { label: '설문조사', icon: iconSurvey },
  { label: '공직/선거비리 익명신고', icon: iconAnonymous },
  { label: '예산낭비신고', icon: iconBudget },
  { label: '시정에 바란다', icon: iconSuggestion },
  { label: '도정소식', icon: iconProvinceNews },
  { label: '부동산실거래 위반신고', icon: iconPencil },
  { label: '명예시민감사관', icon: iconHonoraryAuditor },
  { label: '칭찬합시다', icon: iconPraise },
  { label: '자유게시판', icon: iconFreeBoard },
  { label: '공익신고', icon: iconPublicReport },
  { label: '국민신문고', icon: iconSinmungo },
]

// hoverMotion이 있으면 인물에 마우스를 올렸을 때 그림이 위로 올라갑니다(데스크탑 시안).
// variant="mobile"이면 모바일 메인용 배치(소개 한 줄, 인물 3열, 참여공간 2열)로 보여 줍니다.
function LifeCycleSection({ hoverMotion = false, variant = 'desktop' }) {
  const [tab, setTab] = useState(0)

  return (
    <section className={['life-cycle-section', hoverMotion && 'life-cycle-section--hover', variant === 'mobile' && 'life-cycle-section--mobile'].filter(Boolean).join(' ')}>
      <div className="life-cycle-section__intro">
        <span className="life-cycle-section__icon">
          <img src={magnifier} alt="" style={cropBox(140, 97, 0, 0, 0.653, 0.66, 0.164, 0.22)} />
        </span>
        <h2 className="life-cycle-section__title">
          지금 필요한<br /><span>의정부 정보</span><br />모두 여기에!
        </h2>
      </div>
      <div className={`life-cycle-section__card ${tab === 1 ? 'life-cycle-section__card--participation' : ''}`.trim()}>
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
        {tab === 0 ? (
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
        ) : (
          <ul className="life-cycle-section__links">
            {PARTICIPATION.map((item) => (
              <li key={item.label}>
                <a href="#">
                  <span className="life-cycle-section__link-icon">
                    <span className="life-cycle-section__link-track">
                      <img src={item.icon} alt="" />
                      <span className="life-cycle-section__link-hover" style={{ maskImage: `url("${item.icon}")`, WebkitMaskImage: `url("${item.icon}")` }} />
                    </span>
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default LifeCycleSection
