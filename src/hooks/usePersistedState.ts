import { useCallback, useEffect, useState } from 'react'

/**
 * localStorage에 JSON 값을 저장하는 상태 훅.
 * 저장 실패(용량 초과·비공개 모드 등)는 조용히 무시하고 메모리 상태는 유지한다.
 */
export function usePersistedState<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const stored = window.localStorage.getItem(key)
      return stored === null ? initialValue : (JSON.parse(stored) as T)
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // 저장 불가 환경에서도 앱은 계속 동작해야 한다.
    }
  }, [key, value])

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue(next)
    },
    [],
  )

  return [value, update]
}
