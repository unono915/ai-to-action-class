import { presentationScenes } from '../data/presentationScenes'

/**
 * 실습 모드에서는 발표 장면을 순서대로 읽는 형태로 제공한다.
 * (발표 모드에서는 같은 내용을 슬라이드로 크게 보여준다 — PresentationDeck)
 */
export function PhilosophyPracticePage() {
  return (
    <section aria-label="왜 이런 수업인가" className="px-4 py-6">
      <h2 className="mb-2 text-2xl font-bold text-neutral-900">2. 왜 이런 수업인가</h2>
      <p className="mb-6 text-neutral-600">
        판단을 행동으로 연결하는 수업이 왜 필요한지 아홉 장면으로 살펴봅니다.
      </p>

      <ol className="space-y-6">
        {presentationScenes.map((scene) => (
          <li
            key={scene.id}
            className="rounded-lg border border-neutral-200 bg-white p-4"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
              장면 {scene.id} · {scene.label}
            </p>
            <div className="space-y-1 text-neutral-800">
              {scene.lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            {scene.bullets && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
                {scene.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
