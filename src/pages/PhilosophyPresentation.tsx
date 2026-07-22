import { useCallback, useEffect, useState } from 'react'
import { getScene, TOTAL_SCENES } from '../data/presentationScenes'
import { useSceneQueryState } from '../hooks/useSceneQueryState'
import { PresenterNotes } from '../components/PresenterNotes'
import { Timer } from '../components/Timer'
import { FullscreenButton } from '../components/FullscreenButton'

type Props = {
  durationMinutes: number
  onExitPrev: () => void
  onExitNext: () => void
}

/**
 * 발표 모드에서 「왜 이런 수업인가」(2단계)의 9개 장면을 넘기는 전용 뷰.
 * scene 경계를 벗어나면 상위 단계(1·3단계)로 이동한다.
 */
export function PhilosophyPresentation({ durationMinutes, onExitPrev, onExitNext }: Props) {
  const { scene, setScene } = useSceneQueryState()
  const [notesOpen, setNotesOpen] = useState(false)

  const goNext = useCallback(() => {
    if (scene < TOTAL_SCENES) {
      setScene(scene + 1)
    } else {
      onExitNext()
    }
  }, [scene, setScene, onExitNext])

  const goPrev = useCallback(() => {
    if (scene > 1) {
      setScene(scene - 1)
    } else {
      onExitPrev()
    }
  }, [scene, setScene, onExitPrev])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable) {
        return
      }

      switch (event.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          event.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault()
          goPrev()
          break
        case 'p':
        case 'P':
          event.preventDefault()
          setNotesOpen((prev) => !prev)
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  const currentScene = getScene(scene)
  const perSceneSeconds = Math.round((durationMinutes * 60) / TOTAL_SCENES)
  const recommendedTime = `약 ${Math.max(1, Math.round(perSceneSeconds / 10) * 10)}초`

  return (
    <section
      aria-label={`발표 장면 ${scene}/${TOTAL_SCENES}`}
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand-500">
        장면 {scene} / {TOTAL_SCENES} · {currentScene.label}
      </p>

      <div className="max-w-4xl space-y-4">
        {currentScene.lines.map((line, index) => (
          <p
            key={index}
            className="text-2xl font-bold leading-snug text-neutral-900 sm:text-4xl lg:text-5xl"
          >
            {line}
          </p>
        ))}
      </div>

      {currentScene.bullets && (
        <ul className="mt-8 space-y-2 text-xl text-neutral-700 sm:text-2xl">
          {currentScene.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100"
        >
          ← 이전 장면
        </button>
        <button
          type="button"
          onClick={() => setNotesOpen((prev) => !prev)}
          className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
        >
          메모 (P)
        </button>
        <Timer />
        <FullscreenButton />
        <button
          type="button"
          onClick={goNext}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          다음 장면 →
        </button>
      </div>

      <PresenterNotes
        open={notesOpen}
        onClose={() => setNotesOpen(false)}
        recommendedTime={recommendedTime}
        notes={[...currentScene.lines, ...(currentScene.bullets ?? [])]}
      />
    </section>
  )
}
