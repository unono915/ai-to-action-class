import { useState } from 'react'

/**
 * 메인 이미지. `public/assets/hero/main-hero.png`가 없으면
 * 깨진 이미지 대신 의미를 담은 CSS placeholder를 보여준다.
 * (docs/00_PROJECT_DECISIONS.md, docs/06_ASSET_SPEC.md)
 */
export function HeroImage() {
  const [loadFailed, setLoadFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}assets/hero/main-hero.png`

  if (loadFailed) {
    return (
      <div
        role="img"
        aria-label="왼쪽 손 모양 이미지 입력, 중앙 판단하는 AI 모델, 오른쪽 텍스트·이미지 출력과 수업 활동으로 이어지는 흐름을 나타내는 대표 이미지 자리"
        className="flex aspect-video w-full items-center justify-center rounded-2xl bg-gradient-to-r from-brand-100 via-brand-200 to-cyan-100"
      >
        <div className="flex items-center gap-6 text-4xl sm:gap-10 sm:text-6xl" aria-hidden="true">
          <span title="이미지 입력">✋</span>
          <span className="text-neutral-400">→</span>
          <span title="판단하는 AI 모델">🤖</span>
          <span className="text-neutral-400">→</span>
          <span title="텍스트·이미지 출력, 수업 활동">💬</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="왼쪽 손 모양 이미지 입력, 중앙 판단하는 AI 모델, 오른쪽 텍스트·이미지 출력과 수업 활동으로 이어지는 흐름을 나타내는 대표 이미지"
      className="aspect-video w-full rounded-2xl object-cover"
      onError={() => setLoadFailed(true)}
    />
  )
}
