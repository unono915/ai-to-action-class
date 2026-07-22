import { useEffect, useState } from 'react'
import { type Step, MAX_STEP } from '../data/steps'
import { eventInfo } from '../data/event'
import { PresenterNotes } from './PresenterNotes'
import { Timer } from './Timer'
import { FullscreenButton } from './FullscreenButton'

type Props = {
  step: Step
}

/**
 * 발표 모드 기본 뷰(2단계 제외): 한 화면 한 메시지, 큰 글씨, 중앙 집중.
 */
export function PresentationView({ step }: Props) {
  const [notesOpen, setNotesOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable) {
        return
      }
      if (event.key === 'p' || event.key === 'P') {
        event.preventDefault()
        setNotesOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      aria-label={`발표 장면: ${step.title}`}
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand-500">
        {step.id === 1 ? eventInfo.eventName : `${step.id} / ${MAX_STEP}단계 · ${step.title}`}
      </p>

      <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
        {step.presentationHeadline}
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-neutral-600 sm:text-xl">
        {step.summary}
      </p>

      {step.id === 1 && (
        <p className="mt-10 text-base text-neutral-500">
          {eventInfo.date} · {eventInfo.location} · {eventInfo.presenter}
        </p>
      )}

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setNotesOpen((prev) => !prev)}
          className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
        >
          메모 (P)
        </button>
        <Timer />
        <FullscreenButton />
      </div>

      <PresenterNotes
        open={notesOpen}
        onClose={() => setNotesOpen(false)}
        recommendedTime={step.durationMinutes ? `약 ${step.durationMinutes}분` : undefined}
        notes={[step.presentationHeadline, step.summary]}
      />
    </section>
  )
}
