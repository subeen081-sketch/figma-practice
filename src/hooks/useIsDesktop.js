import { useEffect, useState } from 'react'

const QUERY = '(min-width: 1280px)'

// 화면 폭이 데스크탑 구간(1280px 이상)인지 알려 줍니다.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const update = () => setIsDesktop(media.matches)

    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export default useIsDesktop
