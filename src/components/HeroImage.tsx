import { useState } from 'react'
import { startHeroImage, startHeroImageUrl } from '../data/startPage'

/**
 * 시작 화면 메인 이미지. 파일을 불러오지 못해도 깨진 이미지나 이모지 대신
 * 연수의 핵심 흐름을 텍스트로 보여준다.
 */
export function HeroImage() {
  const [loadFailed, setLoadFailed] = useState(false)
  const src = startHeroImageUrl()
  const { alt } = startHeroImage

  if (loadFailed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 via-white to-cyan-50 p-4"
      >
        <div
          className="grid w-full max-w-lg grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center"
          aria-hidden="true"
        >
          {['이미지 입력', 'AI 판단', '수업 행동'].map((label, index) => (
            <div key={label} className="contents">
              <span className="rounded-xl border border-white bg-white/90 px-2 py-4 text-xs font-bold text-neutral-700 shadow-sm sm:text-sm">
                {label}
              </span>
              {index < 2 && (
                <span className="font-semibold text-brand-400">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="aspect-video w-full rounded-2xl object-cover shadow-sm"
      width="1536"
      height="864"
      loading="eager"
      decoding="async"
      onError={() => setLoadFailed(true)}
    />
  )
}
