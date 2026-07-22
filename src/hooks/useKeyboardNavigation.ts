import { useEffect } from 'react'

type Handlers = {
  onPrev: () => void
  onNext: () => void
  enabled: boolean
}

/**
 * 발표 모드용 좌우 방향키 / Space / PageUp·PageDown 이동.
 * 입력 요소에 포커스가 있을 때는 동작하지 않는다.
 */
export function useKeyboardNavigation({ onPrev, onNext, enabled }: Handlers) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const tag = target?.tagName
      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        target?.isContentEditable
      ) {
        return
      }

      switch (event.key) {
        case 'ArrowRight':
        case 'PageDown':
          event.preventDefault()
          onNext()
          break
        case ' ':
          event.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault()
          onPrev()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enabled, onPrev, onNext])
}
