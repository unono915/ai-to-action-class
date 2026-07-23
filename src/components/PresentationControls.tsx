import { Timer } from './Timer'
import { FullscreenButton } from './FullscreenButton'

type Props = {
  slide: number
  slideCount: number
  step: number
  totalSteps: number
  /** 이 단계 권장 소요 시간(분) — 발표 페이싱 참고용 */
  recommendedMinutes: number
  atStart: boolean
  atEnd: boolean
  onPrev: () => void
  onNext: () => void
}

/**
 * 발표 모드 하단 컨트롤 바. 슬라이드 이전·다음, 현재 위치, 권장 시간,
 * 타이머, 전체 화면을 제공한다. 좌우 방향키로도 이동할 수 있다.
 */
export function PresentationControls({
  slide,
  slideCount,
  step,
  totalSteps,
  recommendedMinutes,
  atStart,
  atEnd,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← 이전
      </button>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="whitespace-nowrap text-sm font-medium text-neutral-500">
          {step}/{totalSteps}단계 · 슬라이드 {slide}/{slideCount}
        </span>
        <span className="whitespace-nowrap rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
          권장 {recommendedMinutes}분
        </span>
        <Timer />
        <FullscreenButton />
      </div>

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
