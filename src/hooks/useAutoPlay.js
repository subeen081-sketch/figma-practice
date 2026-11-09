import { useEffect, useRef } from 'react'

// 정해진 시간(ms)마다 onTick을 실행합니다. paused가 true이면 멈춥니다.
function useAutoPlay(onTick, delay, paused = false) {
  const tickRef = useRef(onTick)

  useEffect(() => {
    tickRef.current = onTick
  }, [onTick])

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => tickRef.current(), delay)
    return () => window.clearInterval(timer)
  }, [delay, paused])
}

export default useAutoPlay
