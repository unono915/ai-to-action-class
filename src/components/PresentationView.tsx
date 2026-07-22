import { type Step } from '../data/steps'
import { eventInfo } from '../data/event'

type Props = {
  step: Step
}

/**
 * 발표 모드: 한 화면 한 메시지. 큰 글씨, 중앙 집중.
 * 발표자 메모·타이머·QR 등 상세 기능은 2차 작업에서 채운다(자리만 유지).
 */
export function PresentationView({ step }: Props) {
  return (
    <section
      aria-label={`발표 장면 ${step.id}`}
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand-500">
        {step.id === 1 ? eventInfo.eventName : `장면 ${step.id} / ${8}`}
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

      {/* 발표자 메모 · 타이머 · QR 자리 (2차 구현) */}
      <div className="mt-12 rounded-lg border border-dashed border-neutral-300 px-4 py-2 text-xs text-neutral-400">
        발표자 메모 · 타이머 · QR 영역 (다음 단계에서 구현)
      </div>
    </section>
  )
}
