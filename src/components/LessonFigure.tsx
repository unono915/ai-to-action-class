import { useState } from 'react'
import { lessonImages, lessonImageUrl, type LessonImageId } from '../data/lessonImages'
import { ImageLightbox } from './ImageLightbox'

type Props = {
  id: LessonImageId
  caption?: string
}

/**
 * 수업 교안 이미지 썸네일 + 클릭 시 확대 모달.
 * 비율 왜곡 없이(object-contain) 보여 준다.
 */
export function LessonFigure({ id, caption }: Props) {
  const [open, setOpen] = useState(false)
  const image = lessonImages[id]
  const url = lessonImageUrl(id)

  return (
    <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`${caption ?? '수업 교안 이미지'} 확대 보기`}
      >
        <img
          src={url}
          alt={image.alt}
          loading="lazy"
          className="aspect-video w-full bg-neutral-50 object-contain"
        />
      </button>
      {caption && (
        <figcaption className="border-t border-neutral-100 p-2 text-center text-xs text-neutral-500">
          {caption}
        </figcaption>
      )}

      <ImageLightbox
        src={url}
        alt={image.alt}
        caption={caption}
        open={open}
        onClose={() => setOpen(false)}
      />
    </figure>
  )
}
