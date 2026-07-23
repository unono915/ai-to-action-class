import { CopyButton } from '../components/CopyButton'
import { ResourceButton } from '../components/ResourceButton'
import { ScreenshotFigure } from '../components/ScreenshotFigure'
import {
  groundedGemCaution,
  groundedGemChecks,
  groundedGemInstructions,
  groundedGemOverview,
  groundedGemPaths,
  groundedGemWorkflow,
} from '../data/groundedGem'
import { getStep } from '../data/steps'

export function GroundedGemPage() {
  return (
    <section aria-label="근거 자료 연결하기" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">
          7. 근거 자료 연결하기
        </h2>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
          선택 확장 · 필수 아님
        </span>
        <span className="text-sm text-neutral-500">
          권장 {getStep(7).durationMinutes}분
        </span>
      </div>

      <div className="mb-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
        <h3 className="text-lg font-bold text-neutral-900">
          {groundedGemOverview.title}
        </h3>
        <p className="mt-2 leading-relaxed text-neutral-700">
          {groundedGemOverview.summary}
        </p>
        <p className="mt-3 border-l-4 border-brand-400 pl-3 text-sm font-medium leading-relaxed text-brand-950">
          핵심은 자료를 많이 넣는 것이 아니라, Gem이 참고할 근거의 범위를
          교사가 검토하고 정하는 것입니다.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {groundedGemOverview.purpose}
        </p>
      </div>

      <div
        className="mb-6 rounded-lg border border-dashed border-neutral-300 bg-white p-4 text-sm leading-relaxed text-neutral-700"
        role="note"
      >
        <strong className="block text-neutral-900">언제 선택하면 좋을까요?</strong>
        {groundedGemOverview.optional}
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-2">
        {groundedGemPaths.map((path) => (
          <article
            key={path.title}
            className="rounded-xl border border-neutral-200 bg-white p-5"
          >
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600">
              {path.label}
            </span>
            <h3 className="mt-3 font-bold text-neutral-900">{path.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {path.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mb-8 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              선택 확장 흐름
            </p>
            <h3 className="mt-1 text-lg font-bold text-neutral-900">
              Gemini Notebook에서 모으고, 검토한 노트북을 Gem에 연결
            </h3>
          </div>
          <ResourceButton linkKey="geminiNotebook" />
        </div>

        <ol className="mt-5 grid gap-3 lg:grid-cols-5">
          {groundedGemWorkflow.map((item, index) => (
            <li
              key={item.title}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white"
              >
                {index + 1}
              </span>
              <strong className="mt-3 block text-sm text-neutral-900">
                {item.title}
              </strong>
              <span className="mt-1 block text-sm leading-relaxed text-neutral-600">
                {item.description}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <ScreenshotFigure id="gem-builder-study" />
        <ScreenshotFigure id="notebook-knowledge" />
        <ScreenshotFigure id="notebook-knowledge-added" highlight />
      </div>

      <div className="mb-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h3 className="font-bold text-neutral-900">Gem 요청사항에 덧붙일 지침</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">
            자료 안의 내용과 자료 밖의 내용을 구분하고, 학생의 사고를 대신하지
            않도록 하는 지침입니다.
          </p>
          <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-800">
            {groundedGemInstructions}
          </pre>
          <div className="mt-3">
            <CopyButton text={groundedGemInstructions} label="근거 기반 지침 복사" />
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h3 className="font-bold text-neutral-900">연결 전 교사 확인</h3>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-700">
            {groundedGemChecks.map((check) => (
              <li key={check} className="flex gap-2">
                <span aria-hidden="true" className="font-bold text-brand-600">
                  ✓
                </span>
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
        <strong className="block">자료 연결은 ‘무오류’ 설정이 아닙니다</strong>
        {groundedGemCaution}
        <span className="mt-2 block text-amber-900">
          Gemini Notebook·Deep Research·Gem 노트북 연결은 계정, 연령, 지역,
          학교 관리자 설정에 따라 보이지 않거나 다르게 제공될 수 있습니다.
        </span>
      </div>
    </section>
  )
}
