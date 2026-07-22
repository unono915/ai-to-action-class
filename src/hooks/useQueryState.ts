import { useCallback, useEffect, useState } from 'react'
import {
  DEFAULT_MODE,
  DEFAULT_STEP,
  parseMode,
  parseStep,
  type AppState,
  type Mode,
} from '../app/appState'
import type { StepId } from '../data/steps'

function readStateFromLocation(): AppState {
  const params = new URLSearchParams(window.location.search)
  return {
    mode: parseMode(params.get('mode')),
    step: parseStep(params.get('step')),
  }
}

function buildUrl(next: AppState): string {
  const params = new URLSearchParams(window.location.search)
  params.set('mode', next.mode)
  params.set('step', String(next.step))
  return `${window.location.pathname}?${params.toString()}`
}

/**
 * URL query parameter(mode·step)를 단일 상태 소스로 사용한다.
 * - 잘못된 값은 안전한 기본값으로 보정된다.
 * - 브라우저 뒤로가기·앞으로가기(popstate)를 지원한다.
 * - 값이 실제로 바뀔 때만 history에 push 한다.
 */
export function useQueryState() {
  const [state, setState] = useState<AppState>(() =>
    typeof window === 'undefined'
      ? { mode: DEFAULT_MODE, step: DEFAULT_STEP }
      : readStateFromLocation(),
  )

  // 최초 진입 시 정규화된 값을 URL에 반영한다(뒤로가기 오염 없이 replace).
  useEffect(() => {
    const normalized = readStateFromLocation()
    window.history.replaceState(null, '', buildUrl(normalized))
    setState(normalized)
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setState(readStateFromLocation())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const update = useCallback((patch: Partial<AppState>) => {
    setState((prev) => {
      const next: AppState = { ...prev, ...patch }
      if (next.mode === prev.mode && next.step === prev.step) {
        return prev
      }
      window.history.pushState(null, '', buildUrl(next))
      return next
    })
  }, [])

  const setMode = useCallback(
    (mode: Mode) => update({ mode }),
    [update],
  )

  const setStep = useCallback(
    (step: StepId) => update({ step }),
    [update],
  )

  return { state, setMode, setStep }
}
