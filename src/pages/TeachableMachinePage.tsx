import { useState } from 'react'
import { ResourceButton } from '../components/ResourceButton'
import { CompletionPanel } from '../components/CompletionPanel'
import { TroubleshootingPanel } from '../components/TroubleshootingPanel'
import { ScreenshotFigure } from '../components/ScreenshotFigure'

const steps = [
  'Teachable Machine에 접속합니다.',
  '이미지 프로젝트를 선택합니다.',
  '레이블을 O, X, 배경으로 설정합니다.',
  '웹캠으로 각 레이블의 데이터를 수집합니다.',
  '모델을 훈련합니다.',
  '조건(거리·각도·배경)을 바꾸어 테스트합니다.',
  '오류가 나온다면 원인을 추론합니다.',
  '모델 내보내기를 준비합니다.',
]

const dataTips = [
  '손 위치를 조금씩 바꿔 주세요.',
  '카메라와의 거리를 바꿔 주세요.',
  '손의 각도를 바꿔 주세요.',
  '각 레이블의 데이터 수를 비슷하게 맞춰 주세요.',
  '배경 레이블에는 손동작이 없는 화면을 담아 주세요.',
]

const testMissions = [
  '손의 거리를 바꾸어 보기',
  '배경을 바꾸어 보기',
  '손의 각도를 바꾸어 보기',
  '일부러 애매한 동작 보여주기',
]

const completionItems = [
  'O·X·배경 데이터를 모두 수집했다.',
  '레이블별 데이터 수를 비슷하게 맞췄다.',
  '모델 훈련을 완료했다.',
  '테스트 미션을 수행했다.',
]

export function TeachableMachinePage() {
  const [errorNote, setErrorNote] = useState('')

  return (
    <section
      aria-label="분류 모델 만들기"
      className="grid grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_320px]"
    >
      <div>
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-2xl font-bold text-neutral-900">3. 분류 모델 만들기</h2>
          <span className="text-sm text-neutral-500">권장 15분</span>
        </div>

        <p className="mb-6 text-neutral-600">
          공통 실습으로 O, X, 배경을 구분하는 손 모양 이미지 분류 모델을 만듭니다.
        </p>

        <div className="mb-6 flex flex-col gap-6 xl:flex-row xl:items-start">
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
              <ScreenshotFigure id="teachable-machine-start" />
              <ScreenshotFigure id="teachable-machine-labels" />
              <ScreenshotFigure id="teachable-machine-train" />
              <ScreenshotFigure id="teachable-machine-test" />
              <ScreenshotFigure id="teachable-machine-export" />
            </div>
          </div>
        </div>

        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          데이터 수집 안내
        </h3>
        <ul className="mb-6 list-disc space-y-1 pl-5 text-neutral-700">
          {dataTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-3">
          <ResourceButton linkKey="teachableMachine" />
          <ResourceButton linkKey="sampleModel" />
        </div>

        <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-neutral-800">
            테스트 미션
          </h3>
          <ul className="mb-3 space-y-1 text-sm text-neutral-700">
            {testMissions.map((mission, index) => (
              <li key={index} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-neutral-400">□</span>
                <span>{mission}</span>
              </li>
            ))}
          </ul>
          <p className="mb-2 text-sm font-medium text-neutral-800">
            생각할 질문: 모델은 정말 손 모양을 보고 있을까요? 혹시 배경이나 손의 위치를
            더 많이 보고 있지는 않을까요?
          </p>
          <label htmlFor="tm-error-note" className="mb-1 block text-xs font-medium text-neutral-600">
            오류 원인 기록란
          </label>
          <textarea
            id="tm-error-note"
            value={errorNote}
            onChange={(event) => setErrorNote(event.target.value)}
            rows={2}
            className="w-full rounded-md border border-neutral-300 p-2 text-sm focus-visible:ring-2 focus-visible:ring-brand-500"
            placeholder="관찰한 내용을 자유롭게 적어보세요."
          />
        </div>

        <details className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-neutral-700">
            선택 확장: 이미지 파일 업로드
          </summary>
          <p className="mt-2 text-sm text-neutral-600">
            웹캠으로 직접 촬영하는 것 외에 이미지 파일을 업로드하여 학습할 수도
            있습니다. 암석, 식물, 미술 작품, 악기처럼 현장에서 바로 준비하기
            어려운 대상을 수업에 활용할 수 있습니다.
          </p>
        </details>

        <TroubleshootingPanel categories={['teachableMachine', 'webcam']} />
      </div>

      <aside className="space-y-4">
        <CompletionPanel items={completionItems} />
      </aside>
    </section>
  )
}
