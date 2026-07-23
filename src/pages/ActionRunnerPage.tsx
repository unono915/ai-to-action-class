import { ResourceButton } from '../components/ResourceButton'
import { ScreenshotFigure } from '../components/ScreenshotFigure'
import { TroubleshootingPanel } from '../components/TroubleshootingPanel'
import { actionRunnerWorkflow } from '../data/practiceWorkflows'
import { getStep } from '../data/steps'

export function ActionRunnerPage() {
  return (
    <section aria-label="판단을 행동으로" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">
          4. 판단을 행동으로
        </h2>
        <span className="text-sm text-neutral-500">
          권장 {getStep(4).durationMinutes}분
        </span>
      </div>

      <div className="mb-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              이번 단계가 끝나면
            </p>
            <h3 className="mt-1 text-lg font-bold text-neutral-900">
              {actionRunnerWorkflow.outcome}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {actionRunnerWorkflow.intro}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <ResourceButton linkKey="actionRunner" />
            <ResourceButton linkKey="sampleModel" variant="secondary" />
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          모델 URL이 없거나 불러오지 못하면 예시 모델을 사용해 실습을 이어갈 수
          있습니다.
        </p>
      </div>

      <ol className="space-y-4">
        {actionRunnerWorkflow.steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <article className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.description}
                </p>
                {step.points && (
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-700">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand-500">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-3">
                {step.screenshots.map((screenshot) => (
                  <ScreenshotFigure
                    key={screenshot}
                    id={screenshot}
                    highlight={index === actionRunnerWorkflow.steps.length - 1}
                  />
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
        <strong className="text-neutral-900">핵심 결과</strong>
        <p className="mt-1 text-sm leading-relaxed text-neutral-700">
          카메라 입력 → 모델의 판단 → 레이블 → 문구와 이미지 출력이 하나의
          흐름으로 연결되었습니다.
        </p>
      </div>

      <TroubleshootingPanel categories={['actionRunner', 'webcam']} />
    </section>
  )
}
