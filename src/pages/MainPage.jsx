import { useState } from 'react'
import { Link } from 'react-router'
import ScheduleCheck from '../components/button/ScheduleCheck'
import CardCollection from '../components/card/CardCollection'
import Label from '../components/label/Label'
import MobileLabel from '../components/label/MobileLabel'
import CityLogo from '../components/layout/CityLogo'
import Footer from '../components/layout/Footer'
import GovBanner from '../components/layout/GovBanner'
import GridMenuButton from '../components/layout/GridMenuButton'
import PauseButton from '../components/layout/PauseButton'
import PrevNextButtonSet from '../components/layout/PrevNextButtonSet'
import TopBottomButton from '../components/layout/TopBottomButton'
import EventSectionLabel from '../components/main/EventSectionLabel'
import LifeCycleMenuItem from '../components/main/LifeCycleMenuItem'
import MainMenuButton from '../components/main/MainMenuButton'
import MainServiceList from '../components/main/MainServiceList'
import MayorOfficeButton from '../components/main/MayorOfficeButton'
import MobileSlide from '../components/main/MobileSlide'
import NewsListItem from '../components/main/NewsListItem'
import NewsTab from '../components/main/NewsTab'
import PressList from '../components/main/PressList'
import SnsBannerSlide from '../components/main/SnsBannerSlide'
import SnsTabs from '../components/main/SnsTabs'
import WeatherStatus from '../components/main/WeatherStatus'
import airQuality from '../assets/images/air-quality.png'
import bentNext from '../assets/icons/bent-next.png'
import guideBuilding from '../assets/images/guide-building.png'
import guideComplaint from '../assets/images/guide-complaint.png'
import guideLocation from '../assets/images/guide-location.png'
import guideOrganization from '../assets/images/guide-organization.png'
import guideWork from '../assets/images/guide-work.png'
import mayor from '../assets/images/mayor.png'
import menuIcon from '../assets/images/menu.png'
import population from '../assets/images/population.png'
import searchColor from '../assets/images/search-color.png'
import searchIcon from '../assets/images/search.png'
import slogan from '../assets/images/slogan.png'
import { cropBox } from '../data/crop'
import { MAIN_EVENTS } from '../data/events'
import { NEWS_LIST, NEWS_TABS, PRESS, SERVICES, SLIDES, SNS_SLIDES } from '../data/main'
import './Page.css'
import './MainPage.css'

const box = cropBox
const GUIDES = [
  { src: guideBuilding, label: '청사안내', style: box(65, 58, 2, -6, 0.867, 0.78, 0.057, 0.067) },
  { src: guideOrganization, label: '조직도', style: box(65, 69, 2, 0, 0.93, 0.933, 0.07, 0.067) },
  { src: guideWork, label: '업무안내', style: box(40, 57, 14, 0, 0.516, 0.783, 0.266, 0.117) },
  { src: guideLocation, label: '오시는 길', style: box(47, 60, 11, 0, 0.679, 0.817, 0.161, 0.083) },
  { src: guideComplaint, label: '민원대기실', style: box(54, 52, 7, 0, 0.803, 0.85, 0.106, 0.1) },
]

function MainPage() {
  const [slide, setSlide] = useState(0)
  const [tab, setTab] = useState('news')
  const [newsTab, setNewsTab] = useState(0)
  const [sns, setSns] = useState(0)
  const move = (step) => setSlide((slide + step + SLIDES.length) % SLIDES.length)

  return (
    <div className="page main-page">
      <GovBanner wide />
      <header className="main-page__header">
        <CityLogo />
        <div className="main-page__header-right">
          <TopBottomButton variant="favorite" />
          <button type="button" className="main-page__icon-button" aria-label="전체 메뉴"><img src={menuIcon} alt="" /></button>
          <button type="button" className="main-page__icon-button" aria-label="검색"><img src={searchIcon} alt="" /></button>
        </div>
      </header>

      <section className="main-page__hero">
        <div className="main-page__search-area">
          <img src={slogan} alt="시민의 뜻으로, 새로운 의정부" className="main-page__slogan" />
          <form role="search" className="main-page__search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" aria-label="검색어" placeholder="검색어를 입력하세요" />
            <button type="submit" aria-label="검색"><img src={searchColor} alt="" /></button>
          </form>
          <div className="main-page__stats">
            <div className="main-page__population">
              <img src={population} alt="" />
              <p>의정부시 인구<br /><b>461,977명</b></p>
            </div>
            <div className="main-page__air">
              <img src={airQuality} alt="" />
              <dl>
                <div><dt>미세먼지</dt><dd><WeatherStatus level="good" /></dd></div>
                <div><dt>초미세먼지</dt><dd><WeatherStatus level="normal" /></dd></div>
                <div><dt>오존</dt><dd><WeatherStatus level="bad" /></dd></div>
              </dl>
            </div>
          </div>
        </div>

        <div className="main-page__mayor">
          <img src={mayor} alt="의정부 시장 김원기" className="main-page__mayor-photo" />
          <p className="main-page__mayor-title"><span>시민의 뜻으로,</span><br />새로운 의정부</p>
          <p className="main-page__mayor-role">의정부 시장</p>
          <p className="main-page__mayor-name"><b>김원기</b> 입니다.</p>
          <a href="#" className="main-page__greeting">추석 명절 인사말 <img src={bentNext} alt="" /></a>
          <MayorOfficeButton className="main-page__office" />
        </div>

        <nav className="main-page__guides" aria-label="시청 안내">
          {GUIDES.map((guide) => (
            <LifeCycleMenuItem key={guide.label} {...guide} />
          ))}
        </nav>

        <div className="main-page__banner">
          <div className="main-page__banner-controls">
            <PrevNextButtonSet onPrev={() => move(-1)} onNext={() => move(1)} />
            <PauseButton />
            <GridMenuButton label="배너 전체 보기" />
          </div>
          <MobileSlide slides={SLIDES} index={slide} />
          <MainMenuButton value={tab} onChange={setTab} />
        </div>
      </section>

      <div className="main-page__section"><MainServiceList services={SERVICES} /></div>
      <div className="main-page__press"><PressList items={PRESS} /></div>

      <section className="main-page__news" aria-label="새소식">
        <div className="main-page__news-tabs">
          {NEWS_TABS.map((label, index) => (
            <NewsTab key={label} active={newsTab === index} onClick={() => setNewsTab(index)}>{label}</NewsTab>
          ))}
          <GridMenuButton label="새소식 전체 보기" />
        </div>
        <a href="#" className="main-page__news-main">
          <span className="main-page__news-date"><b>23</b>2026.09</span>
          <span className="main-page__news-body">
            <strong>시내버스 노선 일부 조정 사항 안내[106-1번, 7번 아아아 </strong>
            <span>의정부시 시내버스 노선 일부가 2026년 10월 1일(목) 첫차부터 아래와 같이 조정되오니 이용에 참고하시기 바랍니다.</span>
          </span>
        </a>
        {NEWS_LIST.map((news) => (
          <NewsListItem key={news.department} {...news} />
        ))}
      </section>

      <section className="main-page__sns" aria-label="SNS 소식">
        <SnsTabs index={sns} onChange={setSns} />
        <SnsBannerSlide slides={SNS_SLIDES} index={sns} />
      </section>

      <section className="main-page__events">
        <div className="main-page__event-label"><EventSectionLabel /></div>
        <div className="main-page__event-links">
          <Link to="/calendar"><ScheduleCheck /></Link>
          <Link to="/grid"><ScheduleCheck>전체일정</ScheduleCheck></Link>
        </div>
        <ul className="main-page__event-cards">
          {MAIN_EVENTS.map((event) => (
            <li key={event.title}>
              <CardCollection
                variant="main"
                to="/detail"
                src={event.src}
                alt={`${event.title} 포스터`}
                title={event.title}
                date={event.date}
                place={event.place}
              >
                <MobileLabel status={event.status} />
                <Label category={event.category} />
              </CardCollection>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  )
}

export default MainPage
