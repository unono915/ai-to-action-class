import { useState } from 'react'
import { ResourceButton } from '../components/ResourceButton'
import { CompletionPanel } from '../components/CompletionPanel'
import { TroubleshootingPanel } from '../components/TroubleshootingPanel'
import { ScreenshotFigure } from '../components/ScreenshotFigure'
import { externalLinks } from '../data/links'

const steps = [
  '모델을 내보냅니다.',
  '생성된 모델 URL을 복사합니다.',
  '행동 연결 사이트를 엽니다.',
  '모델 URL을 입력합니다.',
  '레이블별 텍스트를 설정합니다.',
  '레이블별 이미지를 설정합니다.',
  '웹캠으로 판단 결과와 행동을 확인합니다.',
]

const exampleActions = [
  { label: 'O', text: '이해했어요!', image: '긍정·확인' },
  { label: 'X', text: '다시 설명해주세요', image: '질문·재설명' },
  { label: '배경', text: '손동작을 보여주세요', image: '기본 대기' },
]

const extensions = ['음성 안내', '화면 색상', '게임 캐릭터', '다음 문제 추천', 'LED', '모터', '로봇팔']

const completionItems = ['모델을 불러왔다.', '레이블을 확인했다.', '텍스트 출력을 확인했다.', '이미지 출력을 확인했다.']

export function ActionRunnerPage() {
  const [urlCopiedChecked, setUrlCopiedChecked] = useState(false)

  return (
    <section
      aria-label="판단을 행동으로"
      className="grid grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_320px]"
    >
      <div>
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-2xl font-bold text-neutral-900">4. 판단을 행동으로</h2>
          <span className="text-sm text-neutral-500">권장 12분</span>
        </div>

        <p className="mb-6 text-lg font-medium text-neutral-800">
          모델은 판단합니다. 이제 그 판단에 따라 무엇을 할지 정해 봅니다.
        </p>

        <div className="mb-4 flex flex-col gap-6 xl:flex-row xl:items-start">
          <div className="xl:flex-1">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
              지금 할 일
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-neutral-800">
              {steps.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="xl:w-72 xl:shrink-0">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
              화면 예시
            </h3>
            <div className="space-y-3">
              <ScreenshotFigure id="action-runner-model" />
              <ScreenshotFigure id="action-runner-actions" />
            </div>
          </div>
        </div>

        <label className="mb-6 flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800">
          <input
            type="checkbox"
            checked={urlCopiedChecked}
            onChange={() => setUrlCopiedChecked((prev) => !prev)}
            className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500"
          />
          모델 URL 복사 확인
        </label>

        <div className="mb-6 flex flex-wrap gap-3">
          <ResourceButton linkKey="actionRunner" />
          <ResourceButton linkKey="sampleModel" />
        </div>
        <p className="mb-6 text-xs text-neutral-500">
          {externalLinks.actionRunner.description} · 오류가 계속되면 예시 모델로 대체해
          실습을 이어갈 수 있습니다.
        </p>

        <div className="mb-6 overflow-x-auto rounded-lg border border-neutral-200 bg-white p-4">
          <h3 className="mb-3 text-sm font-semibold text-neutral-800">기본 예시</h3>
          <table className="w-full min-w-[360px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500">
                <th scope="col" className="py-1 pr-4">레이블</th>
                <th scope="col" className="py-1 pr-4">텍스트</th>
                <th scope="col" className="py-1">이미지(자리)</th>
              </tr>
            </thead>
            <tbody>
              {exampleActions.map((row) => (
                <tr key={row.label} className="border-b border-neutral-100 last:border-b-0">
                  <td className="py-2 pr-4 font-medium text-neutral-800">{row.label}</td>
                  <td className="py-2 pr-4 text-neutral-700">{row.text}</td>
                  <td className="py-2 text-neutral-500">{row.image}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6 max-w-xl">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            실제 결과 화면
          </h3>
          <ScreenshotFigure id="action-runner-test" highlight />
        </div>

        <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-neutral-800">확장</h3>
          <p className="mb-2 text-sm text-neutral-600">
            오늘은 텍스트와 이미지를 출력했지만, 같은 판단 결과를 아래처럼 확장할 수도
            있습니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {extensions.map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <TroubleshootingPanel categories={['actionRunner', 'webcam']} />
      </div>

      <aside className="space-y-4">
        <CompletionPanel items={completionItems} />
      </aside>
    </section>
  )
}
