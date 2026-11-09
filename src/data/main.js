// 메인 화면의 임시 데이터입니다. 내용은 Figma 완성본을 그대로 옮겼습니다.
import slide1 from '../assets/images/slide-01.png'
import slide2 from '../assets/images/slide-02.png'
import slide3 from '../assets/images/slide-03.png'
import slide4 from '../assets/images/slide-04.png'
import slide5 from '../assets/images/slide-05.png'
import slide6 from '../assets/images/slide-06.png'
import slide7 from '../assets/images/slide-07.png'
import slide8 from '../assets/images/slide-08.png'
import slide9 from '../assets/images/slide-09.png'
import slide10 from '../assets/images/slide-10.png'
import slide11 from '../assets/images/slide-11.png'
import slide12 from '../assets/images/slide-12.png'
import slide13 from '../assets/images/slide-13.png'
import press1 from '../assets/images/press-01.jpg'
import press2 from '../assets/images/press-02.jpg'
import press3 from '../assets/images/press-03.jpg'
import press4 from '../assets/images/press-04.jpg'
import press5 from '../assets/images/press-05.jpg'
import press6 from '../assets/images/press-06.jpg'
import press7 from '../assets/images/press-07.jpg'
import sns1 from '../assets/images/sns-banner-01.jpg'
import sns2 from '../assets/images/sns-banner-02.png'
import sns3 from '../assets/images/sns-banner-03.jpg'
import sns4 from '../assets/images/sns-banner-04.png'
import sns5 from '../assets/images/sns-banner-05.png'
import serviceComplaint24 from '../assets/images/service-complaint24.png'
import serviceEvent from '../assets/images/service-event.png'
import serviceJob from '../assets/images/service-job.png'
import serviceTv from '../assets/images/service-tv.png'
import serviceCommunity from '../assets/images/service-community.png'
import serviceLibrary from '../assets/images/service-library.png'
import serviceYouthChild from '../assets/images/service-youth-child.png'
import serviceYouth from '../assets/images/service-youth.png'
import serviceWomen from '../assets/images/service-women.png'
import serviceSenior from '../assets/images/service-senior.png'
import serviceDisabled from '../assets/images/service-disabled.png'
import serviceWater from '../assets/images/service-water.png'
import serviceMap from '../assets/images/service-map.png'
import serviceStats from '../assets/images/service-stats.png'
import serviceWaterFee from '../assets/images/service-water-fee.png'
import serviceCar from '../assets/images/service-car.png'
import serviceParking from '../assets/images/service-parking.png'
import serviceRail from '../assets/images/service-rail.png'
import serviceBooking from '../assets/images/service-booking.png'
// 주요 서비스 호버 아이콘 (Figma 「아이콘모음2」 3:2). 민원24는 기존 service-hover.png를 씁니다.
import serviceHoverComplaint24 from '../assets/images/service-hover.png'
import serviceHoverEvent from '../assets/images/service-hover-event.png'
import serviceHoverJob from '../assets/images/service-hover-job.png'
import serviceHoverTv from '../assets/images/service-hover-tv.png'
import serviceHoverCommunity from '../assets/images/service-hover-community.png'
import serviceHoverLibrary from '../assets/images/service-hover-library.png'
import serviceHoverYouthChild from '../assets/images/service-hover-youth-child.png'
import serviceHoverYouth from '../assets/images/service-hover-youth.png'
import serviceHoverWomen from '../assets/images/service-hover-women.png'
import serviceHoverSenior from '../assets/images/service-hover-senior.png'
import serviceHoverDisabled from '../assets/images/service-hover-disabled.png'
import serviceHoverWater from '../assets/images/service-hover-water.png'
import serviceHoverMap from '../assets/images/service-hover-map.png'
import serviceHoverStats from '../assets/images/service-hover-stats.png'
import serviceHoverWaterFee from '../assets/images/service-hover-water-fee.png'
import serviceHoverCar from '../assets/images/service-hover-car.png'
import serviceHoverParking from '../assets/images/service-hover-parking.png'
import serviceHoverRail from '../assets/images/service-hover-rail.png'
import serviceHoverBooking from '../assets/images/service-hover-booking.png'
// 바로가기(데스크탑 사이드바, 모바일 하단 바) 아이콘
import guideBooking from '../assets/images/guide-booking.png'
import guideCustom from '../assets/images/guide-custom.png'
import guideMyMenu from '../assets/images/guide-my-menu.png'
// 바로가기 호버 아이콘 (Figma 「Section 2」 6:109)
import guideHoverBooking from '../assets/images/guide-hover-booking.png'
import guideHoverCustom from '../assets/images/guide-hover-custom.png'
import guideHoverMyMenu from '../assets/images/guide-hover-my-menu.png'
import { cropBox } from './crop'
// 시청 안내 호버 아이콘 (Figma 「Section 1」 4:80). 데스크탑·모바일 메인이 함께 씁니다.
import guideHoverBuilding from '../assets/images/guide-hover-building.png'
import guideHoverComplaint from '../assets/images/guide-hover-complaint.png'
import guideHoverLocation from '../assets/images/guide-hover-location.png'
import guideHoverOrganization from '../assets/images/guide-hover-organization.png'
import guideHoverWork from '../assets/images/guide-hover-work.png'

export const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13]
export const SNS_SLIDES = [sns1, sns2, sns3, sns4, sns5]

export const SERVICES = [
  { src: serviceComplaint24, hoverSrc: serviceHoverComplaint24, hoverInset: true, label: '민원24' },
  { src: serviceEvent, hoverSrc: serviceHoverEvent, label: '행사 ·축제 일정' },
  { src: serviceJob, hoverSrc: serviceHoverJob, label: '일자리' },
  { src: serviceTv, hoverSrc: serviceHoverTv, label: '의정부TV' },
  { src: serviceCommunity, hoverSrc: serviceHoverCommunity, label: '동주민센터' },
  { src: serviceLibrary, hoverSrc: serviceHoverLibrary, label: '도서관' },
  { src: serviceYouthChild, hoverSrc: serviceHoverYouthChild, label: '아동 · 청소년' },
  { src: serviceYouth, hoverSrc: serviceHoverYouth, label: '청년' },
  { src: serviceWomen, hoverSrc: serviceHoverWomen, label: '여성' },
  { src: serviceSenior, hoverSrc: serviceHoverSenior, label: '노인' },
  { src: serviceDisabled, hoverSrc: serviceHoverDisabled, label: '장애인' },
  { src: serviceWater, hoverSrc: serviceHoverWater, label: '맑은물 사업소' },
  { src: serviceMap, hoverSrc: serviceHoverMap, label: '생활지도' },
  { src: serviceStats, hoverSrc: serviceHoverStats, label: '통계' },
  { src: serviceWaterFee, hoverSrc: serviceHoverWaterFee, label: '수도요금' },
  { src: serviceCar, hoverSrc: serviceHoverCar, label: '차량등록' },
  { src: serviceParking, hoverSrc: serviceHoverParking, label: '주정차단속' },
  { src: serviceRail, hoverSrc: serviceHoverRail, label: '경전철' },
  { src: serviceBooking, hoverSrc: serviceHoverBooking, label: '통합예약' },
]

export const PRESS = [
  { src: press1, title: '신곡2동 지사협, [추석맞이 온정 나눔] 으아' },
  { src: press2, title: '의정부시, 제 10차 생활보장위원회 개최ㅇㅇ' },
  { src: press3, title: '신곡2동 주민자치회, 추석 맞아 어려운 이웃' },
  { src: press4, title: '신곡1동 지사협, 추석 맞이 식료품 꾸러미를' },
  { src: press5, title: '흥선동 통장협의회, 자선장터(바자회) 개최' },
  { src: press6, title: '흥선동, [구세군희망지역아동센터]아이들을' },
  { src: press7, title: '의정부시 어린이.사회복지급식관리지원을' },
]

export const NEWS_TABS = ['새소식', '고시/공고', '입찰정보', '채용공고']

export const NEWS_LIST = [
  { department: '일자리경제과', title: '2026년 10월 중 주요업무계획(일자리경제과)' },
  { department: '여성보육과', title: '2026년 하반기 어린이집 보육교직원 아동학대..' },
  { department: '기후에너지과', title: '취약계층 [동절기 도시가스 공급중단 유예제도]' },
]

// 시청 안내 항목별 호버 그림: 칸 크기(px), 위쪽 위치(px), Figma 자르기 값 [폭%, 높이%, 왼쪽%, 위%]
export const GUIDE_HOVER_ICONS = {
  청사안내: { src: guideHoverBuilding, width: 55, height: 55, top: 2, crop: [143.34, 141.75, -23.49, -26.33] },
  // 조직도 호버 그림은 칸(56px)보다 길어 아래가 잘리므로 10px 올려 끝까지 보이게 합니다.
  조직도: { src: guideHoverOrganization, width: 68, height: 69, top: -10 },
  업무안내: { src: guideHoverWork, width: 50, height: 57, crop: [162.47, 137.5, -33.62, -18.75] },
  '오시는 길': { src: guideHoverLocation, width: 47, height: 63, crop: [161.9, 117.31, -33.33, -8.65] },
  민원대기실: { src: guideHoverComplaint, width: 69, height: 66, crop: [123.37, 114.67, -13.23, -7.14] },
}

// 바로가기 항목: 데스크탑 사이드바와 모바일 하단 고정 바가 함께 씁니다.
// hoverIcon: 칸 크기(px), 위쪽 위치(px), Figma 자르기 값 [폭%, 높이%, 왼쪽%, 위%]
export const QUICK_MENU_ITEMS = [
  {
    src: guideMyMenu,
    label: '나만의 메뉴',
    style: cropBox(40, 47, 14, 0, 0.483, 0.547, 0.224, 0.235),
    hoverIcon: { src: guideHoverMyMenu, width: 39, height: 51, top: -2, crop: [224.63, 170.9, -58.51, -36.9] },
  },
  {
    src: guideCustom,
    label: '맞춤형 서비스',
    style: cropBox(57, 57, 6, -5, 0.683, 0.683, 0.15, 0.15),
    hoverIcon: { src: guideHoverCustom, width: 57, height: 57, crop: [120.45, 140.48, -20.45, -26.19] },
  },
  {
    src: guideBooking,
    label: '통합예약',
    style: cropBox(54, 51, 7, -2, 0.607, 0.533, 0.214, 0.25),
    hoverIcon: { src: guideHoverBooking, width: 59.681, height: 51, crop: [162.6, 198.07, -51.63, -54.43] },
  },
]
