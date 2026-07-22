import { getSlide, slideCountForStep } from '../data/presentationSlides'
import { lessonImages, lessonImageUrl } from '../data/lessonImages'
import type { StepId } from '../data/steps'

type Props = {
  step: StepId
  slide: number
}

/**
 * 발표 모드 슬라이드 뷰. 실습 모드와 같은 핵심 내용을
 * 발표용 슬라이드처럼 크게 띄운다. 이미지가 있는 슬라이드는
 * 글자 크기를 조금 줄이고 이미지 높이를 제한해 글자가 밀리지 않게 한다.
 * 이동·타이머 등 조작은 하단 컨트롤 바(App footer)에서 담당한다.
 */
export function PresentationDeck({ step, slide }: Props) {
  const current = getSlide(step, slide)
  const total = slideCountForStep(step)
  const hasImage = Boolean(current.image)

  const headingClass = hasImage
    ? 'text-balance text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl'
    : 'text-balance text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl'

  return (
    <section
      aria-label={`발표 슬라이드 ${slide} / ${total}`}
      aria-live="polite"
      className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center gap-4 overflow-y-auto px-6 py-4 text-center"
    >
      {current.eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 sm:text-base">
          {current.eyebrow}
        </p>
      )}

      <div className="space-y-2">
        {current.lines.map((line, index) => (
          <p key={index} className={headingClass}>
            {line}
          </p>
        ))}
      </div>

      {current.image && (
        <img
          src={lessonImageUrl(current.image)}
          alt={lessonImages[current.image].alt}
          className="max-h-[42vh] w-auto max-w-full rounded-xl border border-neutral-200 object-contain shadow-sm"
        />
      )}

      {current.bullets && (
        <ul className="space-y-3 text-left text-xl text-neutral-700 sm:text-2xl lg:text-3xl">
          {current.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 text-brand-400">
                •
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {current.note && (
        <p className="max-w-3xl text-base text-neutral-500 sm:text-lg">{current.note}</p>
      )}
    </section>
  )
}
