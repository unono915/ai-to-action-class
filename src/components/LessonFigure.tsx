import { useState } from 'react'
import { ImageLightbox } from './ImageLightbox'

type Props = {
  src: string
  alt: string
  caption?: string
  /** 실제 현장 사진 여부 (배경색 등 표시 차이) */
  photo?: boolean
}

/**
 * 수업 교안 이미지 또는 현장 사진 썸네일 + 클릭 시 확대 모달.
 * 비율 왜곡 없이(object-contain) 보여 준다.
 */
export function LessonFigure({ src, alt, caption, photo = false }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`${caption ?? (photo ? '수업 현장 사진' : '수업 교안 이미지')} 확대 보기`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={
            photo
              ? 'aspect-video w-full bg-neutral-100 object-cover'
              : 'aspect-video w-full bg-neutral-50 object-contain'
          }
        />
      </button>
      {caption && (
        <figcaption className="border-t border-neutral-100 p-2 text-center text-xs text-neutral-500">
          {caption}
        </figcaption>
      )}

      <ImageLightbox
        src={src}
        alt={alt}
        caption={caption}
        open={open}
        onClose={() => setOpen(false)}
      />
    </figure>
  )
}
