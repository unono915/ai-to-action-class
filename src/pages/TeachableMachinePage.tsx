import { ResourceButton } from '../components/ResourceButton'
import { ScreenshotFigure } from '../components/ScreenshotFigure'
import { TroubleshootingPanel } from '../components/TroubleshootingPanel'
import { modelBuildingWorkflow } from '../data/practiceWorkflows'

export function TeachableMachinePage() {
  return (
    <section aria-label="분류 모델 만들기" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">
          3. 분류 모델 만들기
        </h2>
        <span className="text-sm text-neutral-500">권장 15분</span>
      </div>

      <div className="mb-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              이번 단계가 끝나면
            </p>
            <h3 className="mt-1 text-lg font-bold text-neutral-900">
              {modelBuildingWorkflow.outcome}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {modelBuildingWorkflow.intro}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <ResourceButton linkKey="teachableMachine" />
            <ResourceButton linkKey="sampleModel" variant="secondary" />
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          직접 만든 모델이 잘 작동하지 않을 때만 예시 모델을 안전망으로
          사용하세요.
        </p>
      </div>

      <ol className="space-y-4">
        {modelBuildingWorkflow.steps.map((step, index) => (
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

              <div
                className={
                  step.screenshots.length > 1
                    ? 'grid gap-3 sm:grid-cols-2'
                    : 'grid gap-3'
                }
              >
                {step.screenshots.map((screenshot) => (
                  <ScreenshotFigure key={screenshot} id={screenshot} />
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
        <strong className="text-neutral-900">다음 단계에 가져갈 것</strong>
        <p className="mt-1 text-sm leading-relaxed text-neutral-700">
          방금 복사한 모델 URL입니다. 4단계에서 이 주소를 행동 연결 사이트에
          붙여 넣습니다.
        </p>
      </div>

      <TroubleshootingPanel
        categories={['teachableMachine', 'webcam', 'modelExport']}
      />
    </section>
  )
}
