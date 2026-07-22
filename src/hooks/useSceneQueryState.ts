import { useCallback, useEffect, useState } from 'react'
import { clampScene } from '../data/presentationScenes'

function readScene(): number {
  const params = new URLSearchParams(window.location.search)
  const raw = params.get('scene')
  if (raw === null) return 1
  const parsed = Number.parseInt(raw, 10)
  return clampScene(parsed)
}

function writeScene(scene: number) {
  const params = new URLSearchParams(window.location.search)
  params.set('scene', String(scene))
  window.history.pushState(
    null,
    '',
    `${window.location.pathname}?${params.toString()}`,
  )
}

/**
 * 발표 모드 「왜 이런 수업인가」 단계 전용 `scene` query parameter 상태.
 * mode·step과 별개의 하위 상태이므로 자체 훅으로 관리한다.
 */
export function useSceneQueryState() {
  const [scene, setSceneState] = useState<number>(() =>
    typeof window === 'undefined' ? 1 : readScene(),
  )

  useEffect(() => {
    const handlePopState = () => setSceneState(readScene())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const setScene = useCallback((next: number) => {
    const clamped = clampScene(next)
    setSceneState(clamped)
    writeScene(clamped)
  }, [])

  return { scene, setScene }
}
