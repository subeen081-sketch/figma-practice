import { useState } from 'react'
import { Link } from 'react-router'
import ScheduleRelatedButton from '../../components/button/ScheduleRelatedButton'
import Card from '../../components/card/Card'
import DesktopEventStatus from '../../components/label/DesktopEventStatus'
import DesktopProgressStatus from '../../components/label/DesktopProgressStatus'
import DesktopFooter from '../../components/layout/DesktopFooter'
import DesktopGlobalNav from '../../components/layout/DesktopGlobalNav'
import DesktopSidebar from '../../components/layout/DesktopSidebar'
import DesktopUtilityBar from '../../components/layout/DesktopUtilityBar'
import GovBanner from '../../components/layout/GovBanner'
import GridMenuButton from '../../components/layout/GridMenuButton'
import PauseButton from '../../components/layout/PauseButton'
import PrevNextButtonSet from '../../components/layout/PrevNextButtonSet'
import LifeCycleMenuItem from '../../components/main/LifeCycleMenuItem'
import LifeCycleSection from '../../components/main/LifeCycleSection'
import MainMenuButton from '../../components/main/MainMenuButton'
import MainServiceList from '../../components/main/MainServiceList'
import MayorOfficeButton from '../../components/main/MayorOfficeButton'
import MobileSlide from '../../components/main/MobileSlide'
import NewsListItem from '../../components/main/NewsListItem'
import NewsTab from '../../components/main/NewsTab'
import PressList from '../../components/main/PressList'
import SnsBannerSlide from '../../components/main/SnsBannerSlide'
import SnsTabs from '../../components/main/SnsTabs'
import WeatherStatus from '../../components/main/WeatherStatus'
import bentNext from '../../assets/icons/bent-next.png'
import airQuality from '../../assets/images/air-quality.png'
import guideBuilding from '../../assets/images/guide-building.png'
import guideComplaint from '../../assets/images/guide-complaint.png'
import guideLocation from '../../assets/images/guide-location.png'
import guideOrganization from '../../assets/images/guide-organization.png'
import guideWork from '../../assets/images/guide-work.png'
import mayor from '../../assets/images/mayor.png'
import population from '../../assets/images/population.png'
import searchColor from '../../assets/images/search-color.png'
import slogan from '../../assets/images/slogan.png'
import { cropBox } from '../../data/crop'
import { DESKTOP_MAIN_EVENTS, DESKTOP_NEWS, DESKTOP_SLIDES } from '../../data/desktop'
import { NEWS_TABS, PRESS, SERVICES, SNS_SLIDES } from '../../data/main'
import './DesktopMainPage.css'

const GUIDES = [
  { src: guideBuilding, label: '청사안내', style: cropBox(65, 58, 2, -6, 0.867, 0.78, 0.057, 0.067) },
  { src: guideOrganization, label: '조직도', style: cropBox(65, 69, 2, 0, 0.93, 0.933, 0.07, 0.067) },
  { src: guideWork, label: '업무안내', style: cropBox(40, 57, 14, 0, 0.516, 0.783, 0.266, 0.117) },
  { src: guideLocation, label: '오시는 길', style: cropBox(47, 60, 11, 0, 0.679, 0.817, 0.161, 0.083) },
  { src: guideComplaint, label: '민원대기실', style: cropBox(54, 52, 7, 0, 0.803, 0.85, 0.106, 0.1) },
]

function DesktopMainPage() {
  const [slide, setSlide] = useState(0)
  const [tab, setTab] = useState('news')
  const [newsTab, setNewsTab] = useState(0)
  const [sns, setSns] = useState(0)
  const move = (step) => setSlide((slide + step + DESKTOP_SLIDES.length) % DESKTOP_SLIDES.length)

  return (
    <div className="desktop-main-page">
      <div>
      <header>
        <GovBanner desktop />
        <DesktopUtilityBar />
        <DesktopGlobalNav />
      </header>
      <div className="desktop-main-page__top">
        <div className="desktop-main-page__search-area">
          <div className="desktop-main-page__search-left">
            <img src={slogan} alt="시민의 뜻으로, 새로운 의정부" className="desktop-main-page__slogan" />
            <form role="search" className="desktop-main-page__search" onSubmit={(e) => e.preventDefault()}>
              <input type="search" aria-label="검색어" placeholder="검색어를 입력하세요" />
              <button type="submit" aria-label="검색"><img src={searchColor} alt="" /></button>
            </form>
          </div>
          <div className="desktop-main-page__population">
            <img src={population} alt="" />
            <p>의정부시 인구<br /><b>461,977명</b></p>
          </div>
          <div className="desktop-main-page__air">
            <img src={airQuality} alt="" />
            <dl>
              <div><dt>미세먼지</dt><dd><WeatherStatus level="good" /></dd></div>
              <div><dt>초미세먼지</dt><dd><WeatherStatus level="normal" /></dd></div>
              <div><dt>오존</dt><dd><WeatherStatus level="bad" /></dd></div>
            </dl>
          </div>
        </div>

        <div className="desktop-main-page__hero">
          <div className="desktop-main-page__banner">
            <MobileSlide slides={DESKTOP_SLIDES} index={slide} />
            <div className="desktop-main-page__banner-bar">
              <MainMenuButton className="main-menu-button--desktop" value={tab} onChange={setTab} />
              <div className="desktop-main-page__banner-controls">
                <PrevNextButtonSet divider onPrev={() => move(-1)} onNext={() => move(1)} />
                <PauseButton />
                <GridMenuButton label="배너 전체 보기" />
              </div>
            </div>
          </div>
          <div className="desktop-main-page__right">
            <div className="desktop-main-page__mayor">
              <img src={mayor} alt="의정부 시장 김원기" className="desktop-main-page__mayor-photo" />
              <p className="desktop-main-page__mayor-title"><span>시민의 뜻으로,</span><br />새로운 의정부</p>
              <p className="desktop-main-page__mayor-role">의정부 시장</p>
              <p className="desktop-main-page__mayor-name"><b>김원기</b> 입니다.</p>
              <a href="#" className="desktop-main-page__greeting">추석 명절 인사말 <img src={bentNext} alt="" /></a>
              <MayorOfficeButton className="desktop-main-page__office" />
            </div>
            <nav className="desktop-main-page__guides" aria-label="시청 안내">
              {GUIDES.map((guide) => (
                <LifeCycleMenuItem key={guide.label} {...guide} />
              ))}
            </nav>
          </div>
        </div>

        <div className="desktop-main-page__services"><MainServiceList services={SERVICES} /></div>

        <div className="desktop-main-page__news-row">
          <div className="desktop-main-page__press"><PressList items={PRESS} /></div>
          <section className="desktop-main-page__news" aria-label="새소식">
            <div className="desktop-main-page__news-tabs">
              {NEWS_TABS.map((label, index) => (
                <NewsTab key={label} active={newsTab === index} onClick={() => setNewsTab(index)}>{label}</NewsTab>
              ))}
              <GridMenuButton label="새소식 전체 보기" />
            </div>
            <a href="#" className="desktop-main-page__news-main">
              <span className="desktop-main-page__news-date"><b>23</b>2026.09</span>
              <span className="desktop-main-page__news-body">
                <strong>시내버스 노선 일부 조정 사항 안내[106-1번, 7번 아아아 </strong>
                <span>의정부시 시내버스 노선 일부가 2026년 10월 1일(목) 첫차부터 아래와 같이 조정되오니 이용에 참고하시기 바랍니다. ■ 시행우에에</span>
              </span>
            </a>
            <div className="desktop-main-page__news-list">
              {DESKTOP_NEWS.map((news) => (
                <NewsListItem key={news.department} {...news} />
              ))}
            </div>
          </section>
          <section className="desktop-main-page__sns" aria-label="SNS 소식">
            <SnsTabs size="large" index={sns} onChange={setSns} />
            <SnsBannerSlide slides={SNS_SLIDES} index={sns} />
          </section>
        </div>
      </div>

      <LifeCycleSection />
      </div>

      <section className="desktop-main-page__events" aria-label="의정부 행사/축제">
        <div className="desktop-main-page__event-links">
          <Link to="/calendar" tabIndex={-1}><ScheduleRelatedButton variant="check" /></Link>
          <Link to="/grid" tabIndex={-1}><ScheduleRelatedButton variant="all" /></Link>
        </div>
        <ul className="desktop-main-page__cards">
          {DESKTOP_MAIN_EVENTS.map((event) => (
            <li key={event.title}>
              <Card variant="main" to="/detail" src={event.src} alt={`${event.title.replace('\n', '')} 포스터`} title={event.title} date={event.date} place={event.place}>
                <DesktopProgressStatus status={event.status} />
                <DesktopEventStatus category={event.category} />
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <DesktopFooter />
      <DesktopSidebar className="desktop-main-page__sidebar" />
    </div>
  )
}

export default DesktopMainPage
