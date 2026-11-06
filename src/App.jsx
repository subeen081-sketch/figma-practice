import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import useIsDesktop from './hooks/useIsDesktop'
import CalendarPage from './pages/CalendarPage'
import DetailPage from './pages/DetailPage'
import GridPage from './pages/GridPage'
import MainPage from './pages/MainPage'
import DesktopCalendarPage from './pages/desktop/DesktopCalendarPage'
import DesktopDetailPage from './pages/desktop/DesktopDetailPage'
import DesktopGridPage from './pages/desktop/DesktopGridPage'
import DesktopMainPage from './pages/desktop/DesktopMainPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const isDesktop = useIsDesktop()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={isDesktop ? <DesktopMainPage /> : <MainPage />} />
          <Route path="/calendar" element={isDesktop ? <DesktopCalendarPage /> : <CalendarPage />} />
          <Route path="/grid" element={isDesktop ? <DesktopGridPage /> : <GridPage />} />
          <Route path="/detail" element={isDesktop ? <DesktopDetailPage /> : <DetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
