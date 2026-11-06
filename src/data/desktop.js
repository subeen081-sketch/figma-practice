// 데스크탑 화면의 임시 데이터입니다. 내용은 Figma 완성본을 그대로 옮겼습니다.
import posterSongsan from '../assets/images/poster-songsan.jpg'
import posterBmf from '../assets/images/poster-bmf.jpg'
import posterNokyang from '../assets/images/poster-nokyang.png'
import posterBudae from '../assets/images/poster-budae.jpg'
import posterSangsaeng from '../assets/images/poster-sangsaeng.png'
import posterGosan from '../assets/images/poster-gosan.jpg'
import posterDongo from '../assets/images/poster-dongo.jpg'
import posterHoeryong from '../assets/images/poster-hoeryong.jpg'
import posterChoir from '../assets/images/poster-choir.jpg'
import posterBeer from '../assets/images/poster-beer.jpg'
import posterAiForum from '../assets/images/poster-ai-forum.png'
import posterDance from '../assets/images/poster-dance.jpg'
import posterChorus from '../assets/images/poster-chorus.jpg'
import posterMusicDrama from '../assets/images/poster-music-drama.jpg'
import posterChildrenDay from '../assets/images/poster-children-day.png'
import posterScaleup from '../assets/images/poster-scaleup.jpg'
import slide01 from '../assets/images/slide-01.png'
import slide02 from '../assets/images/slide-02.png'
import slide03 from '../assets/images/slide-03.png'
import slide04 from '../assets/images/slide-04.png'
import slide05 from '../assets/images/slide-05.png'
import slide06 from '../assets/images/slide-06.png'
import slide07 from '../assets/images/slide-07.png'
import slide08 from '../assets/images/slide-08.png'
import slide09 from '../assets/images/slide-09.png'
import slide10 from '../assets/images/slide-10.png'
import slide14 from '../assets/images/slide-14.png'
import slide15 from '../assets/images/slide-15.png'
import slide16 from '../assets/images/slide-16.jpg'

const card = (title, date, place, src, category, status, position) => ({ title, date, place, src, category, status, position })

export const DESKTOP_SLIDES = [slide14, slide01, slide02, slide03, slide04, slide05, slide06, slide15, slide16, slide07, slide08, slide09, slide10]

export const DESKTOP_MAIN_EVENTS = [
  card('송3 어울림 한마당 축제', '2026.10.17', '민락2지구 로데오 거리 일대', posterSongsan, 'festival', 'upcoming'),
  card('2026 의정부상생페스타', '2026.10.17', '경기도청 북부청사 앞', posterSangsaeng, 'festival', 'upcoming'),
  card('작은 영웅들과 함께하는 고산동 어울림 한마당', '2026.10.31', '잔돌문화공원', posterGosan, 'festival', 'upcoming'),
  card('제 19회 의정부\n부대찌개 축제', '2026.10.24-25', '의정부 부대찌개거리 일원', posterBudae, 'festival', 'upcoming'),
]

export const DESKTOP_CALENDAR_EVENTS = [
  card('송3 어울림 한마당 축제', '2026.10.17', '민락2지구 로데오 거리 일대', posterSongsan, 'festival', 'upcoming', 'center 17%'),
  card('2026 의정부상생페스타', '2026.10.17', '경기도청 북부청사 앞', posterSangsaeng, 'festival', 'upcoming', 'center top'),
  card('작은 영웅들과 함께하는 고산동 어울림 한마당', '2026.10.31', '잔돌문화공원', posterGosan, 'festival', 'upcoming', 'center 16%'),
  card('제 19회 의정부 부대찌개 축제', '2026.10.24-25', '의정부 부대찌개거리 일원', posterBudae, 'festival', 'upcoming', 'center 3%'),
  card('제 41회 회룡문화제: 회룡 600년, 역사와 시민을 잇다', '2026.10.09 -10.10', '의정부시청 앞 광장', posterHoeryong, 'festival', 'ended', 'center top'),
  card('2026 녹양평 문화축제', '2026.10.17', '녹양역 서부광장(1번 출구 앞)', posterNokyang, 'festival', 'upcoming', 'center 5%'),
  card('제 8회 BMF', '2026.10.16 -10.17', '의정부 예술의 전당 야외무대', posterBmf, 'festival', 'upcoming', 'center 3%'),
]

export const DESKTOP_GRID_EVENTS = [
  card('송3 어울림 한마당 축제', '2026.10.17', '민락2지구 로데오 거리 일대', posterSongsan, 'festival', 'upcoming'),
  card('제 8회 BMF', '2026.10.16 - 17', '의정부 예술의 전당 야외무대', posterBmf, 'festival', 'upcoming'),
  card('제 41회 회룡문화제: 회룡 600년 , 역사와 시민을 잇다', '2026.10.09 - 10', '의정부시청 앞 광장', posterHoeryong, 'festival', 'ended'),
  card('2026 녹양평 문화축제', '2026.10.17', '녹양역 서부광장(1번 출구 앞)', posterNokyang, 'festival', 'upcoming'),
  card('의정부시립소년소녀합창단 제49회 정기공연', '2026.09.19', '의정부예술의전당 대극장', posterChoir, 'performance', 'ended', 'center top'),
  card('제 19회 의정부 부대찌개 축제', '2026.10.24-25', '의정부 부대찌개거리 일원', posterBudae, 'festival', 'upcoming'),
  card('제9회 동오마을축제 ', '2026.10.03', '동오마을 공영주차장 일원', posterDongo, 'festival', 'ended'),
  card('2026 의정부상생페스타', '2026.10.17', '경기도청 북부청사 앞', posterSangsaeng, 'festival', 'upcoming'),
  card('작은 영웅들과 함께하는 고산동 어울림 한마당', '2026.10.31', '잔돌문화공원', posterGosan, 'festival', 'upcoming'),
  card('[2026년 제5회 민락맥주축제] 개최', '2026.09.11 - 12', '민락2지구 로데오거리 광장 일원', posterBeer, 'festival', 'ended'),
  card('[의정부 AI 혁신 포럼] 행사', '2026.09.05', '의정부 예술의 전당 소극장 및 로비', posterAiForum, 'event', 'ended'),
  card('의정부시립무용단 제46회 정기공연', '2026.07.22', '의정부 예술의전당 대극장', posterDance, 'performance', 'ended'),
  card('의정부시립합창단 제36회 정기연주회', '2026.07.09', '의정부예술의전당 대극장', posterChorus, 'performance', 'ended'),
  card('2026년 제25회 의정부음악극축제', '2026.05.09 - 17', '의정부예술의전당', posterMusicDrama, 'festival', 'ended'),
  card('2026년 의정부시 어린이날 기념행사 개최', '2026.05.05', '의정부시청 앞 평화의 광장 및 도로 일원', posterChildrenDay, 'festival', 'ended'),
  card('[2026 첨단산업 스케일업] 인뎁스(In-depth)네트워킹', '2026.04.17', '의정부 문화역 이음라운지', posterScaleup, 'event', 'ended'),
]

export const DESKTOP_DETAIL = {
  title: '송3 어울림 한마당',
  who: '주민 500여명',
}

export const DESKTOP_NEWS = [
  { department: '여성보육과', title: '2026년 하반기 어린이집 보육교직원 아동학대 예방', date: '26.09.23' },
  { department: '일자리경제과', title: '2026년 10월 중 주요업무계획(일자리경제과)', date: '26.09.23' },
  { department: '기후에너지과', title: '취약계층 [동절기 도시가스 공급중단 유예제도]', date: '26.09.23' },
]
