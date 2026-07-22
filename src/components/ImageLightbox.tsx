import { useEffect, useRef } from 'react'

type Props = {
  src: string
  alt: string
  caption?: string
  open: boolean
  onClose: () => void
}

/**
 * 이미지 확대 모달. ESC·배경 클릭·닫기 버튼으로 닫힌다.
 * 열리면 닫기 버튼으로 포커스를 이동하고, 닫히면 모달을 열었던 요소로
 * 포커스를 되돌린다. 비율 왜곡 없이 object-fit: contain으로 표시한다.
 */
export function ImageLightbox({ src, alt, caption, open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null
      closeRef.current?.focus()

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }

    previouslyFocused.current?.focus()
    return undefined
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="이미지 확대 보기 닫기"
          className="absolute -top-10 right-0 rounded-md bg-white/90 p-2 text-neutral-800 hover:bg-white sm:-right-10 sm:top-0"
        >
          <span aria-hidden="true">✕</span>
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
        />
        {caption && (
          <p className="mt-3 max-w-2xl text-center text-sm text-white">{caption}</p>
        )}
      </div>
    </div>
  )
}
