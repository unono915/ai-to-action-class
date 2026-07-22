import { useState } from 'react'
import { screenshots, screenshotUrl, type ScreenshotId } from '../data/screenshots'
import { ImageLightbox } from './ImageLightbox'

type Props = {
  id: ScreenshotId
  /** 핵심 결과 화면: 더 크게 강조해 보여준다. */
  highlight?: boolean
}

export function ScreenshotFigure({ id, highlight = false }: Props) {
  const [open, setOpen] = useState(false)
  const screenshot = screenshots[id]
  const url = screenshotUrl(id)

  return (
    <figure
      className={
        highlight
          ? 'overflow-hidden rounded-xl border-2 border-brand-300 bg-white shadow-sm'
          : 'overflow-hidden rounded-lg border border-neutral-200 bg-white'
      }
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`${screenshot.caption} 이미지 확대 보기`}
      >
        <img
          src={url}
          alt={screenshot.alt}
          loading="lazy"
          className="aspect-video w-full object-contain bg-neutral-50"
        />
      </button>
      <figcaption className="flex items-start gap-2 border-t border-neutral-100 p-3 text-sm text-neutral-700">
        {highlight && (
          <span className="mt-0.5 shrink-0 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-800">
            핵심 결과
          </span>
        )}
        <span>{screenshot.caption}</span>
      </figcaption>

      <ImageLightbox
        src={url}
        alt={screenshot.alt}
        caption={screenshot.caption}
        open={open}
        onClose={() => setOpen(false)}
      />
    </figure>
  )
}
