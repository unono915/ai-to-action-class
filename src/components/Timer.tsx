import { useEffect, useRef, useState } from 'react'

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

/**
 * 발표 모드 타이머. 시작·일시정지·초기화만 제공하는 단순 스톱워치.
 */
export function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [running])

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-1.5">
      <span
        className="min-w-[3.5rem] text-center text-sm font-mono font-semibold text-neutral-800"
        role="timer"
        aria-live="off"
      >
        {formatTime(seconds)}
      </span>
      <button
        type="button"
        onClick={() => setRunning((prev) => !prev)}
        className="rounded-md px-2 py-1 text-xs font-semibold text-brand-700 hover:bg-brand-50"
      >
        {running ? '일시정지' : '시작'}
      </button>
      <button
        type="button"
        onClick={() => {
          setRunning(false)
          setSeconds(0)
        }}
        className="rounded-md px-2 py-1 text-xs font-semibold text-neutral-500 hover:bg-neutral-100"
      >
        초기화
      </button>
    </div>
  )
}
