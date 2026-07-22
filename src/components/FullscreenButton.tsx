import { useEffect, useState } from 'react'

/**
 * 전체 화면 전환 버튼. Fullscreen API가 없거나 요청이 실패해도
 * 오류 없이 일반 화면으로 계속 사용할 수 있어야 한다.
 */
export function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.()
      } else {
        await document.exitFullscreen?.()
      }
    } catch {
      // 전체 화면 API를 지원하지 않거나 요청이 거부되어도 일반 화면으로 계속 사용한다.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleFullscreen}
      className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
    >
      {isFullscreen ? '전체 화면 종료' : '전체 화면'}
    </button>
  )
}
