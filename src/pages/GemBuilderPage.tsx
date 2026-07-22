import { usePersistedState } from '../hooks/usePersistedState'
import { STORAGE_KEYS } from '../app/appState'
import {
  buildPrompt,
  emptyPromptFields,
  promptExamples,
  type PromptFields,
} from '../data/prompts'
import { CopyButton } from '../components/CopyButton'

const fieldConfig: { key: keyof PromptFields; label: string; multiline?: boolean }[] = [
  { key: 'subject', label: '교과' },
  { key: 'grade', label: '학년' },
  { key: 'concept', label: '개념' },
  { key: 'keyElements', label: '핵심 요소', multiline: true },
  { key: 'misconception', label: '자주 나타나는 오개념', multiline: true },
  { key: 'firstQuestion', label: '첫 질문', multiline: true },
  { key: 'finalOutput', label: '마지막 산출물' },
  { key: 'tone', label: '말투' },
]

const checklist = ['먼저 설명하게 하는가?', '정답을 바로 말하지 않는가?']

export function GemBuilderPage() {
  const [fields, setFields] = usePersistedState<PromptFields>(
    STORAGE_KEYS.promptBuilder,
    emptyPromptFields,
  )

  const prompt = buildPrompt(fields)

  const updateField = (key: keyof PromptFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section aria-label="나만의 Gem 만들기" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">6. 나만의 Gem 만들기</h2>
        <span className="text-sm text-neutral-500">권장 15분</span>
      </div>

      <p className="mb-6 text-neutral-600">
        정답을 바로 알려주는 챗봇이 아니라, 학생의 설명을 듣고 빠진 부분을
        질문하는 개념 체크 도우미를 만듭니다.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {promptExamples.map((example) => (
          <button
            key={example.id}
            type="button"
            onClick={() => setFields(example.fields)}
            className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
          >
            {example.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setFields(emptyPromptFields)}
          className="rounded-full border border-dashed border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500 hover:bg-neutral-100"
        >
          초기화
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {fieldConfig.map(({ key, label, multiline }) => (
            <label key={key} className="block text-sm">
              <span className="mb-1 block font-medium text-neutral-700">{label}</span>
              {multiline ? (
                <textarea
                  value={fields[key]}
                  onChange={(event) => updateField(key, event.target.value)}
                  rows={2}
                  className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
                />
              ) : (
                <input
                  type="text"
                  value={fields[key]}
                  onChange={(event) => updateField(key, event.target.value)}
                  className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
                />
              )}
            </label>
          ))}
          <p className="text-xs text-neutral-400">
            입력 내용은 이 브라우저에만 저장됩니다. 민감정보는 입력하지 마세요.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-neutral-700">생성된 Gem 지침</h3>
          <pre className="mb-3 max-h-96 overflow-auto whitespace-pre-wrap rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800">
            {prompt}
          </pre>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <CopyButton text={prompt} label="지침 복사" />
            <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-500">
              Gemini Gems 열기
              <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600">
                준비 중
              </span>
            </span>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <h4 className="mb-2 text-sm font-semibold text-neutral-800">테스트 체크리스트</h4>
            <ul className="space-y-1 text-sm text-neutral-700">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-neutral-400">□</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
