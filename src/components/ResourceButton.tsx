import { externalLinks, type ExternalLinkKey } from '../data/links'

type Props = {
  linkKey: ExternalLinkKey
}

/**
 * 외부 링크 버튼. 확정 링크는 새 탭으로 열고,
 * 미확정(pending) 링크는 비활성 상태로 '준비 중'을 표시한다.
 * 색상만으로 상태를 구분하지 않고 텍스트 배지를 함께 제공한다.
 */
export function ResourceButton({ linkKey }: Props) {
  const link = externalLinks[linkKey]

  if (link.status === 'pending') {
    return (
      <span
        className="inline-flex items-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-500"
        aria-disabled="true"
      >
        {link.label}
        <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">
          준비 중
        </span>
      </span>
    )
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
    >
      {link.label}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  )
}
