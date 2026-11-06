// 실제 API가 생기기 전까지 쓰는 임시 데이터입니다. 내용은 Figma 완성본을 그대로 옮겼습니다.
import posterSongsan from '../assets/images/poster-songsan.jpg'
import posterBmf from '../assets/images/poster-bmf.jpg'
import posterNokyang from '../assets/images/poster-nokyang.png'
import posterBudae from '../assets/images/poster-budae.jpg'
import posterSangsaeng from '../assets/images/poster-sangsaeng.png'
import posterGosan from '../assets/images/poster-gosan.jpg'
import posterSeniorDay from '../assets/images/poster-senior-day.jpg'
import posterDongo from '../assets/images/poster-dongo.jpg'
import posterHoeryong from '../assets/images/poster-hoeryong.jpg'
import posterChoir from '../assets/images/poster-choir.jpg'
import posterMainSongsan from '../assets/images/poster-main-songsan.jpg'

const grid = (title, date, place, src, category, status, position) => ({ title, date, place, src, category, status, position })

export const GRID_EVENTS = [
  grid('송3 어울림 한마당 축제', '2026.10.17', '민락2지구 로데오거리', posterSongsan, 'festival', 'upcoming', 'center 9%'),
  grid('제19회 의정부부대찌개축제', '2026.10.24-25', '의정부 부대찌개거리', posterBudae, 'festival', 'upcoming', 'center 9%'),
  grid('2026 의정부상생페스타', '2026.10.17', '경기도청 북부청사', posterSangsaeng, 'festival', 'upcoming', 'center 12%'),
  grid('2026 녹양평 문화축제', '2026.10.17', '녹양역 서부광장', posterNokyang, 'festival', 'upcoming', 'center 12%'),
  grid('제8회 BMF', '2026.10.16-17', '의정부 예술의 전당 야외무대', posterBmf, 'festival', 'upcoming', 'center 12%'),
  grid('작은 영웅들과 함께하는 고산동 어울림 한마당', '2026.10.31', '잔돌문화공원', posterGosan, 'festival', 'upcoming', 'center 12%'),
  grid('제30회 노인의 날 기념행사', '2026.10.07', '의정부예술의 전당', posterSeniorDay, 'event', 'ended', 'center'),
  grid('제9회 동오마을축제', '2026.10.03', '동오마을 공영주차장', posterDongo, 'festival', 'ended', 'center 1%'),
  grid('제 41회 회룡문화제', '2026.10.09-10', '의정부시청 앞 광장', posterHoeryong, 'festival', 'ended', 'center 1%'),
  grid('의정부시립소년소녀합창단 제 49회 정기공연', '2026.09.19', '의정부예술의전당 대극장', posterChoir, 'performance', 'ended', 'center top'),
]

export const WEEK_EVENTS = [
  grid('송3 어울림 한마당 축제', '2026.10.17', '민락2지구 로데오 거리 일대', posterSongsan, 'festival', 'upcoming', 'center 18%'),
  grid('제8회 BMF', '2026.10.16-17', '의정부예술의전당 야외무대', posterBmf, 'festival', 'upcoming', 'center 38%'),
  grid('2026 녹양평 문화축제', '2026.10.17', '녹양역 서부광장(1번출구 앞)', posterNokyang, 'festival', 'upcoming', 'center'),
]

export const MAIN_EVENTS = [
  grid('송3 어울림 한마당', '2026.10.17', '민락2지구 로데오 거리 일대', posterMainSongsan, 'festival', 'upcoming', 'center'),
  grid('2026 의정부상생페스타', '2026.10.17', '경기도청 북부청사 앞', posterSangsaeng, 'festival', 'upcoming', 'center'),
  grid('제19회 의정부부대찌개 축제', '2026.10.24-25', '의정부 부대찌개거리 일원', posterBudae, 'festival', 'upcoming', 'center'),
  grid('작은 영웅들과 함께하는 고산동 어울림 한마당', '2026.10.31', '잔돌문화공원', posterGosan, 'festival', 'upcoming', 'center'),
]

export const DETAIL_EVENT = {
  title: '송3 어울림 한마당 축제',
  src: posterSongsan,
  category: 'festival',
  status: 'upcoming',
  date: '2026.10.17',
  place: '민락2지구 로데오 거리 일대',
  host: '송산3동 축제추진위원회',
  phone: '031-870-7645',
  price: '무료',
  description: `
송3 어울림 한마당 축제를 개최합니다.
일시: 2026.10.17(토) 12:00 ~ 17:00
장소: 민락2지구 로데오거리
대상: 주민 500여명
주요내용: 주민 노래·댄스 자랑, 문화공연
, 바자회, 체험 및 먹거리 부스 운영
(문화공연)주민자치센터 수강생 공연,
초청 공연 등
(부스운영) 지역상가 먹거리, 바자회, 주민자치센터 프로그램 체험부스 등
문의: 송산3동 축제추진위원회(031-870-7645)
`,
}
