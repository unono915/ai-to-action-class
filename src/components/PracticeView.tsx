import { type Step } from '../data/steps'
import { ResourceButton } from './ResourceButton'

type Props = {
  step: Step
}

/**
 * 실습 모드: 상세 단계 안내 + 우측 보조 패널(완료 기준·주의할 점).
 * 좁은 화면에서는 보조 패널이 본문 아래로 흐른다.
 * 1차에서는 placeholder 콘텐츠로 레이아웃과 이동을 확인한다.
 */
export function PracticeView({ step }: Props) {
  return (
    <section
      aria-label={`실습 단계 ${step.id}: ${step.title}`}
      className="grid grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_320px]"
    >
      {/* 본문: 지금 할 일 */}
      <div>
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-2xl font-bold text-neutral-900">
            {step.id}. {step.title}
          </h2>
          {step.durationMinutes && (
            <span className="text-sm text-neutral-500">
              권장 {step.durationMinutes}분
            </span>
          )}
        </div>

        <p className="mb-6 text-neutral-600">{step.summary}</p>

        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          지금 할 일
        </h3>
        <ol className="mb-6 list-decimal space-y-2 pl-5 text-neutral-800">
          {step.practiceTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>

        {step.externalLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {step.externalLinks.map((linkKey) => (
              <ResourceButton key={linkKey} linkKey={linkKey} />
            ))}
          </div>
        )}

        {/* 문제 해결 아코디언 자리 (2차 구현) */}
        <details className="mt-8 rounded-lg border border-neutral-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-neutral-700">
            문제가 있나요?
          </summary>
          <p className="mt-2 text-sm text-neutral-500">
            단계별 오류 해결 안내는 다음 단계에서 제공됩니다.
          </p>
        </details>
      </div>

      {/* 보조 패널: 완료 기준 · 주의할 점 */}
      <aside className="space-y-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-neutral-700">
            완료 기준
          </h3>
          <ul className="space-y-1 text-sm text-neutral-700">
            {step.completionCriteria.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-neutral-400">
                  □
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {step.cautions.length > 0 && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-amber-800">
              주의할 점
            </h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-amber-900">
              {step.cautions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </section>
  )
}
