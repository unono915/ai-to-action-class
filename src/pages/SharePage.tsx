import { ResourceButton } from '../components/ResourceButton'
import {
  closingQuestion,
  closingResearchCards,
  closingTakeaway,
  comparisonCaution,
  designFactors,
  practiceMeaning,
} from '../data/closing'

type Props = {
  onRestart: () => void
}

export function SharePage({ onRestart }: Props) {
  return (
    <section aria-label="공유와 마무리" className="px-4 py-6">
      <h2 className="mb-2 text-2xl font-bold text-neutral-900">8. 공유와 마무리</h2>
      <p className="mb-8 text-neutral-600">
        오늘의 실습을 두 연구와 연결해 AI 시대 교사의 역할을 정리합니다.
      </p>

      <div className="mb-8 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-8 text-center sm:px-8">
        <p className="text-sm font-semibold text-brand-700">생각해 볼 질문</p>
        <h3 className="mt-2 text-2xl font-black leading-tight text-neutral-950 sm:text-3xl">
          {closingQuestion}
        </h3>
      </div>

      <div className="mb-8">
        <div className="mb-4">
          <p className="text-sm font-semibold text-neutral-500">서로 다른 두 장면</p>
          <h3 className="mt-1 text-xl font-bold text-neutral-900">
            AI에게 어떤 역할을 맡겼을까요?
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {closingResearchCards.map((research) => (
            <article
              key={research.id}
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-brand-700">{research.institution}</p>
                  <p className="text-xs text-neutral-500">{research.studyType}</p>
                </div>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-700">
                  AI 역할 · {research.roleLabel}
                </span>
              </div>

              <h4 className="mt-4 text-lg font-bold text-neutral-900">{research.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {research.context}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {research.design.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-brand-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-lg bg-neutral-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">
                  연구에서 관찰한 결과
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  {research.findings.join(' · ')}
                </p>
              </div>

              {research.caution && (
                <p className="mt-3 text-xs leading-relaxed text-amber-800">
                  {research.caution}
                </p>
              )}

              <div className="mt-4 pt-1">
                <ResourceButton linkKey={research.linkKey} />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-600">
          {comparisonCaution}
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-sm font-semibold text-brand-700">결과를 가르는 설계</p>
          <h3 className="mt-1 text-xl font-bold text-neutral-900">
            그래서 교사의 역할이 더욱 중요합니다
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-700">
            생성형 AI 자체보다, 학생의 배움을 위해 AI가 언제·어디까지·어떻게
            돕게 할지를 설계하는 일이 중요합니다.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {designFactors.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg bg-neutral-50 px-3 py-2 text-sm text-neutral-700"
              >
                <span aria-hidden="true" className="font-bold text-brand-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
          <p className="text-sm font-semibold text-brand-700">오늘 실습의 의미</p>
          <h3 className="mt-1 text-xl font-bold text-neutral-900">
            챗봇을 만든 것이 아니라 AI의 역할을 설계했습니다
          </h3>
          <ul className="mt-4 space-y-2">
            {practiceMeaning.map((item) => (
              <li key={item} className="rounded-lg bg-white px-3 py-2 text-sm text-neutral-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl bg-neutral-900 px-5 py-8 text-center text-white sm:px-10">
        <p className="text-lg text-neutral-300">{closingTakeaway.lead}</p>
        <p className="mt-1 text-2xl font-black leading-tight text-white sm:text-3xl">
          {closingTakeaway.emphasis}
        </p>
        <div className="mx-auto my-5 h-px max-w-2xl bg-neutral-700" aria-hidden="true" />
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          {closingTakeaway.teacher}
        </p>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-100"
        >
          처음부터 다시 보기
        </button>
      </div>
    </section>
  )
}
