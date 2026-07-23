import { useState } from 'react'
import { ResourceButton } from '../components/ResourceButton'
import type { StepId } from '../data/steps'

type Props = {
  onJumpToStep: (step: StepId) => void
  onOpenHelp: () => void
  onRestart: () => void
}

const resourceLinks: { label: string; onClick: (props: Props) => void }[] = [
  { label: '실습 안내 (분류 모델 만들기)', onClick: (p) => p.onJumpToStep(3) },
  { label: '메타 프롬프트 (Gem 만들기)', onClick: (p) => p.onJumpToStep(6) },
  { label: '교과 사례 (내 교과로 확장하기)', onClick: (p) => p.onJumpToStep(5) },
  { label: '오류 해결 (도움말)', onClick: (p) => p.onOpenHelp() },
]

export function SharePage(props: Props) {
  const [subject, setSubject] = useState('')
  const [tool, setTool] = useState('')
  const [outcome, setOutcome] = useState('')

  return (
    <section aria-label="공유와 마무리" className="px-4 py-6">
      <h2 className="mb-2 text-2xl font-bold text-neutral-900">8. 공유와 마무리</h2>
      <p className="mb-6 text-neutral-600">
        오늘 수업에 가져갈 한 가지를 정리하고 공유합니다.
      </p>

      <div className="mb-8 rounded-lg border border-neutral-200 bg-white p-4">
        <h3 className="mb-3 text-base font-bold text-neutral-900">
          오늘 내 수업에 가져갈 한 가지
        </h3>
        <p className="mb-4 leading-loose text-neutral-800">
          나는{' '}
          <input
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            aria-label="수업 이름"
            placeholder="____________"
            className="w-40 border-b border-neutral-400 bg-transparent px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          />{' '}
          수업에서{' '}
          <input
            type="text"
            value={tool}
            onChange={(event) => setTool(event.target.value)}
            aria-label="활용할 모델 또는 Gem"
            placeholder="____________"
            className="w-40 border-b border-neutral-400 bg-transparent px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          />{' '}
          모델 또는 Gem을 활용하여 학생들이{' '}
          <input
            type="text"
            value={outcome}
            onChange={(event) => setOutcome(event.target.value)}
            aria-label="학생 활동"
            placeholder="________________________"
            className="w-64 border-b border-neutral-400 bg-transparent px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          />{' '}
          하도록 하겠습니다.
        </p>
        <ResourceButton linkKey="padlet" />
      </div>

      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          전체 자료
        </h3>
        <div className="flex flex-wrap gap-2">
          {resourceLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => link.onClick(props)}
              className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            >
              {link.label}
            </button>
          ))}
          <ResourceButton linkKey="downloads" />
        </div>
      </div>

      <div className="rounded-lg border border-brand-200 bg-brand-50 p-4 text-neutral-800">
        <p className="mb-2">오늘 중요한 것은 도구를 완벽히 익힌 것이 아닙니다.</p>
        <p className="mb-2">
          학생이 배운 지식을 자기 삶과 문제 해결로 확장하도록 AI의 판단과
          행동을 수업 안에서 어떻게 연결할지 생각해 보는 것입니다.
        </p>
        <p>내 수업의 작은 개념 하나, 작은 질문 하나부터 시작할 수 있습니다.</p>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={props.onRestart}
          className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-100"
        >
          처음부터 다시 보기
        </button>
      </div>
    </section>
  )
}
