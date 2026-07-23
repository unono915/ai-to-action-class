import { useState } from 'react'
import { usePersistedState } from '../hooks/usePersistedState'
import { STORAGE_KEYS } from '../app/appState'
import {
  buildMetaPrompt,
  buildMetaPromptFilename,
  emptyPromptFields,
  getMissingPromptFields,
  promptExamples,
  type PromptFields,
} from '../data/prompts'
import { CopyButton } from '../components/CopyButton'
import { ResourceButton } from '../components/ResourceButton'
import { ScreenshotFigure } from '../components/ScreenshotFigure'
import { getStep } from '../data/steps'

type FieldConfig = {
  key: keyof PromptFields
  label: string
  required?: boolean
  multiline?: boolean
  rows?: number
  helper?: string
  placeholder?: string
}

const fieldConfig: FieldConfig[] = [
  { key: 'subject', label: '교과', required: true, placeholder: '예: 과학' },
  { key: 'grade', label: '학년', required: true, placeholder: '예: 중학교 2학년' },
  { key: 'concept', label: '개념', required: true, placeholder: '예: 광합성과 호흡' },
  {
    key: 'keyElements',
    label: '핵심 요소',
    required: true,
    multiline: true,
    rows: 4,
    helper: '학생이 반드시 이해해야 할 내용을 한 줄에 하나씩 적으면 좋습니다.',
  },
  {
    key: 'misconception',
    label: '자주 나타나는 오개념',
    required: true,
    multiline: true,
    rows: 3,
    helper: '학생이 흔히 하는 잘못된 설명이나 혼동을 적습니다.',
  },
  {
    key: 'firstQuestion',
    label: '첫 질문',
    required: true,
    multiline: true,
    rows: 2,
  },
  {
    key: 'finalOutput',
    label: '마지막 산출물',
    required: true,
    multiline: true,
    rows: 2,
    helper: '모든 확인이 끝난 뒤 학생이 직접 작성할 결과를 적습니다.',
  },
  { key: 'tone', label: '말투', required: true },
  {
    key: 'completionCode',
    label: '학습 완료 코드',
    helper: '비워 두면 생성형 AI가 영문 대문자와 숫자로 된 8자리 코드를 만듭니다.',
    placeholder: '예: SCI2026A',
  },
  {
    key: 'sourceContext',
    label: '수업 범위·성취기준·참고 근거',
    multiline: true,
    rows: 3,
    helper: '선택 사항입니다. 수업 범위와 제외할 심화 내용을 적으면 지식 초안이 더 정확해집니다.',
  },
  {
    key: 'additionalRequirements',
    label: '추가 요청사항',
    multiline: true,
    rows: 3,
    helper: '선택 사항입니다. 단계 수, 예시 방식 등 특별히 원하는 점을 적습니다.',
  },
]

const workflow = [
  '다운로드한 메타 프롬프트를 원하는 생성형 AI에 입력합니다.',
  'AI가 만든 Gem 요청사항과 지식 자료를 교과서·수업 자료와 대조합니다.',
  '검토한 요청사항을 Gem에 붙여 넣고 지식 마크다운 파일을 추가합니다.',
]

function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

export function GemBuilderPage() {
  const [storedFields, setFields] = usePersistedState<PromptFields>(
    STORAGE_KEYS.promptBuilder,
    emptyPromptFields,
  )
  const [downloadedFilename, setDownloadedFilename] = useState('')

  // v1 localStorage에 새 필드가 없더라도 입력 폼을 안전하게 복원한다.
  const fields: PromptFields = { ...emptyPromptFields, ...storedFields }
  const metaPrompt = buildMetaPrompt(fields)
  const missingFields = getMissingPromptFields(fields)
  const isReady = missingFields.length === 0
  const filename = buildMetaPromptFilename(fields)

  const updateField = (key: keyof PromptFields, value: string) => {
    setFields((prev) => ({ ...emptyPromptFields, ...prev, [key]: value }))
    setDownloadedFilename('')
  }

  const loadExample = (exampleFields: PromptFields) => {
    setFields(exampleFields)
    setDownloadedFilename('')
  }

  const resetFields = () => {
    setFields(emptyPromptFields)
    setDownloadedFilename('')
  }

  const downloadMetaPrompt = () => {
    if (!isReady) return
    downloadTextFile(filename, metaPrompt)
    setDownloadedFilename(filename)
  }

  return (
    <section aria-label="나만의 Gem 만들기" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">6. 나만의 Gem 만들기</h2>
        <span className="text-sm text-neutral-500">
          권장 {getStep(6).durationMinutes}분
        </span>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">
        <p className="text-neutral-600 lg:flex-1">
          수업 정보를 입력하면 생성형 AI가 정교한 Gem 요청사항과 교과 지식
          자료를 만들 수 있도록 맞춤 메타 프롬프트를 준비합니다. 이 사이트는
          AI를 직접 실행하거나 입력 내용을 전송하지 않습니다.
        </p>
        <div className="lg:w-64 lg:shrink-0">
          <ScreenshotFigure id="gem-builder" />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {promptExamples.map((example) => (
          <button
            key={example.id}
            type="button"
            onClick={() => loadExample(example.fields)}
            className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
          >
            {example.label}
          </button>
        ))}
        <button
          type="button"
          onClick={resetFields}
          className="rounded-full border border-dashed border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500 hover:bg-neutral-100"
        >
          초기화
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {fieldConfig.map(
            ({ key, label, required, multiline, rows, helper, placeholder }) => (
              <label key={key} className="block text-sm">
                <span className="mb-1 flex items-center gap-2 font-medium text-neutral-700">
                  {label}
                  {required ? (
                    <span className="text-xs font-normal text-brand-700">필수</span>
                  ) : (
                    <span className="text-xs font-normal text-neutral-400">선택</span>
                  )}
                </span>
                {multiline ? (
                  <textarea
                    value={fields[key]}
                    onChange={(event) => updateField(key, event.target.value)}
                    rows={rows ?? 2}
                    required={required}
                    aria-required={required}
                    placeholder={placeholder}
                    className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
                  />
                ) : (
                  <input
                    type="text"
                    value={fields[key]}
                    onChange={(event) => updateField(key, event.target.value)}
                    required={required}
                    aria-required={required}
                    placeholder={placeholder}
                    className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
                  />
                )}
                {helper && (
                  <span className="mt-1 block text-xs leading-relaxed text-neutral-500">
                    {helper}
                  </span>
                )}
              </label>
            ),
          )}
          <p className="text-xs text-neutral-400">
            입력 내용은 이 브라우저에만 저장됩니다. 민감정보는 입력하지 마세요.
          </p>
        </div>

        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900">
              맞춤 메타 프롬프트
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">
              생성형 AI가 Gem 요청사항, 지식 자료 초안, 교사 검토 메모를 만들도록
              안내하는 파일입니다.
            </p>

            {isReady ? (
              <div
                className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-900"
                role="status"
              >
                필수 정보가 모두 입력되었습니다. 파일을 내려받을 수 있습니다.
              </div>
            ) : (
              <div
                className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"
                role="status"
              >
                <strong>필수 입력이 남았습니다.</strong>
                <span className="mt-1 block">{missingFields.join(' · ')}</span>
              </div>
            )}

            <dl className="mt-4 grid grid-cols-[5rem_1fr] gap-x-3 gap-y-2 text-sm">
              <dt className="text-neutral-500">교과·학년</dt>
              <dd className="min-w-0 break-words text-neutral-800">
                {fields.subject || '—'} · {fields.grade || '—'}
              </dd>
              <dt className="text-neutral-500">확인 개념</dt>
              <dd className="min-w-0 break-words text-neutral-800">
                {fields.concept || '—'}
              </dd>
              <dt className="text-neutral-500">생성 목표</dt>
              <dd className="text-neutral-800">Gem 요청사항 + 지식 자료 초안</dd>
            </dl>

            <div className="mt-5 flex flex-wrap items-start gap-3">
              <button
                type="button"
                onClick={downloadMetaPrompt}
                disabled={!isReady}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
              >
                메타 프롬프트 다운로드
              </button>
              <CopyButton
                text={metaPrompt}
                label="메타 프롬프트 복사"
                disabled={!isReady}
              />
              <ResourceButton linkKey="gemini" />
            </div>

            <p className="mt-2 min-h-5 text-xs text-green-700" role="status">
              {downloadedFilename && `${downloadedFilename} 파일을 내려받았습니다.`}
            </p>

            <details className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-neutral-700">
                메타 프롬프트 전체 내용 미리보기
              </summary>
              <pre className="max-h-96 overflow-auto whitespace-pre-wrap border-t border-neutral-200 p-4 text-xs leading-relaxed text-neutral-700">
                {metaPrompt}
              </pre>
            </details>
          </div>

          <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
            <h4 className="font-bold text-neutral-900">다운로드한 뒤</h4>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-700">
              {workflow.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
            <strong className="block">교사 확인이 필요합니다</strong>
            생성형 AI가 만든 교과 지식은 초안입니다. 실제 수업 자료와 대조한 뒤
            사용하세요. 학습 완료 코드는 활동 확인을 돕는 수단이며 보안이나
            학습 성취를 보장하지 않습니다.
          </div>

        </div>
      </div>
    </section>
  )
}
