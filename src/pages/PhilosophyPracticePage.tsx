import {
  lessonNarrative,
  lessonOverview,
  lessonTools,
} from '../data/lessonNarrative'
import { LessonFigure } from '../components/LessonFigure'

/**
 * 2단계 「왜 이런 수업인가 — 수업 사례로 보는 철학」.
 * 발표자의 실제 수업 「이미지 분류 모델로 프로그램 움직이기」를 따라가며
 * ① 어떤 수업이었는지(개요) ② 철학이 어느 장면에 어떻게 녹아 있었는지(흐름)
 * ③ 어떤 도구를 왜 썼고 효과는 어땠는지(도구)를 함께 보여 준다.
 * (발표 모드에서는 같은 흐름을 슬라이드로 크게 보여 준다 — PresentationDeck)
 */
export function PhilosophyPracticePage() {
  return (
    <section aria-label="왜 이런 수업인가" className="px-4 py-6">
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">
          2. 왜 이런 수업인가
        </h2>
        <span className="text-sm text-neutral-500">수업 사례로 보는 철학</span>
      </div>
      <p className="mb-6 max-w-3xl text-neutral-600">
        제가 진행한 수업 「{lessonOverview.title}」를 따라가며,
        <b className="font-semibold text-neutral-800"> ‘판단을 행동으로 잇는다’</b>는
        수업 철학이 수업의 어느 장면에 어떻게 담겨 있었는지 함께 살펴봅니다.
        각 이미지를 누르면 크게 볼 수 있습니다.
      </p>

      {/* 어떤 수업이었나 — 지도안 기반 개요 */}
      <div className="mb-8 rounded-xl border border-neutral-200 bg-white p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          어떤 수업이었나
        </h3>
        <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-medium text-neutral-500">과목·대상</dt>
            <dd className="text-neutral-800">
              {lessonOverview.subject} · {lessonOverview.target}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-neutral-500">단원</dt>
            <dd className="text-neutral-800">{lessonOverview.unit}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-medium text-neutral-500">수업 흐름</dt>
            <dd className="text-neutral-800">{lessonOverview.flow}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="mb-1 font-medium text-neutral-500">학습 목표</dt>
            <dd>
              <ol className="list-decimal space-y-0.5 pl-5 text-neutral-800">
                {lessonOverview.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ol>
            </dd>
          </div>
        </dl>
      </div>

      {/* 철학이 녹아든 수업 장면들 */}
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        철학이 녹아든 수업 장면
      </h3>
      <ol className="space-y-5">
        {lessonNarrative.map((beat, index) => (
          <li key={beat.id}>
            <article className="rounded-xl border border-neutral-200 bg-white p-5">
              <div className="grid gap-5 lg:grid-cols-[1fr_300px] lg:items-start">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {beat.eyebrow}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold leading-snug text-neutral-900">
                    {beat.heading.join(' ')}
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-lg border-l-4 border-brand-300 bg-brand-50/60 px-3 py-2">
                      <p className="text-xs font-semibold text-brand-700">수업 철학</p>
                      <p className="text-sm text-neutral-800">{beat.philosophy}</p>
                    </div>
                    <div className="rounded-lg border-l-4 border-green-300 bg-green-50/60 px-3 py-2">
                      <p className="text-xs font-semibold text-green-700">수업에서는</p>
                      <p className="text-sm text-neutral-800">{beat.lesson}</p>
                    </div>
                    {beat.quote && (
                      <figure className="rounded-lg border-l-4 border-amber-300 bg-amber-50/70 px-3 py-2">
                        <blockquote className="text-sm font-medium text-neutral-900">
                          “{beat.quote.text}”
                        </blockquote>
                        <figcaption className="mt-0.5 text-xs text-amber-700">
                          — {beat.quote.who}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                </div>

                {beat.image && (
                  <div className="lg:pt-1">
                    <LessonFigure id={beat.image} />
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>

      {/* 사용한 도구 · 왜 그 도구였나 · 효과 */}
      <h3 className="mb-3 mt-10 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        사용한 도구 — 왜 그 도구였고, 효과는 어땠나
      </h3>
      <div className="grid gap-4 lg:grid-cols-2">
        {lessonTools.map((tool) => (
          <article
            key={tool.name}
            className="flex flex-col rounded-xl border border-neutral-200 bg-white p-5"
          >
            <h4 className="text-base font-bold text-neutral-900">{tool.name}</h4>
            <p className="mb-3 text-xs font-medium text-brand-600">{tool.role}</p>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-neutral-500">왜 이 도구였나</dt>
                <dd className="text-neutral-800">{tool.why}</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-500">교실에서의 효과</dt>
                <dd className="text-neutral-800">{tool.effect}</dd>
              </div>
              {tool.caveat && (
                <div className="rounded-lg bg-amber-50 px-3 py-2">
                  <dt className="font-semibold text-amber-700">실패의 맛</dt>
                  <dd className="text-neutral-700">{tool.caveat}</dd>
                </div>
              )}
            </dl>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-lg bg-neutral-100 px-4 py-3 text-center text-sm text-neutral-600">
        이 네 질문 — <b className="text-neutral-800">보이는가 · 나눌 수 있는가 · 모을 수 있는가 · 행동할 수 있는가</b> —
        를 이어지는 실습에서 그대로 사용합니다.
      </p>
    </section>
  )
}
