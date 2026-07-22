import { MAX_STEP, MIN_STEP, type StepId } from '../data/steps'
import type { Mode } from '../app/appState'

type Props = {
  step: StepId
  mode: Mode
  isCompleted: boolean
  onPrev: () => void
  onNext: () => void
  onToggleComplete: () => void
}

/**
 * 하단 고정 이전·다음 영역.
 * 실습 모드에서는 '이 단계 완료' 토글을 노출하고,
 * 발표 모드에서는 완료 체크를 숨긴다(장면 이동 중심).
 */
export function BottomNavigation({
  step,
  mode,
  isCompleted,
  onPrev,
  onNext,
  onToggleComplete,
}: Props) {
  const atStart = step <= MIN_STEP
  const atEnd = step >= MAX_STEP

  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← 이전
      </button>

      {mode === 'practice' ? (
        <button
          type="button"
          onClick={onToggleComplete}
          aria-pressed={isCompleted}
          className={
            isCompleted
              ? 'rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700'
              : 'rounded-lg border border-brand-300 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 transition hover:bg-brand-100'
          }
        >
          {isCompleted ? '완료됨 ✓' : '이 단계 완료'}
        </button>
      ) : (
        <span className="text-sm font-medium text-neutral-500">
          장면 {step}/{MAX_STEP}
        </span>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        다음 →
      </button>
    </div>
  )
}
