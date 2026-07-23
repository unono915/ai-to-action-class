import gemMetaPromptTemplate from './gemMetaPromptTemplate.md?raw'

// Gem 메타 프롬프트 빌더 데이터.
// 입력 정보를 짧은 Gem 지침으로 바로 축약하지 않고, 생성형 AI가 Gem 요청사항과
// 지식 자료 초안을 만들 수 있는 맞춤 메타 프롬프트로 조합한다.

export type PromptFields = {
  subject: string
  grade: string
  concept: string
  keyElements: string
  misconception: string
  firstQuestion: string
  finalOutput: string
  tone: string
  completionCode: string
  sourceContext: string
  additionalRequirements: string
}

export const emptyPromptFields: PromptFields = {
  subject: '',
  grade: '',
  concept: '',
  keyElements: '',
  misconception: '',
  firstQuestion: '',
  finalOutput: '',
  tone: '친절한 교사',
  completionCode: '',
  sourceContext: '',
  additionalRequirements: '',
}

export const requiredPromptFields: {
  key: keyof PromptFields
  label: string
}[] = [
  { key: 'subject', label: '교과' },
  { key: 'grade', label: '학년' },
  { key: 'concept', label: '개념' },
  { key: 'keyElements', label: '핵심 요소' },
  { key: 'misconception', label: '자주 나타나는 오개념' },
  { key: 'firstQuestion', label: '첫 질문' },
  { key: 'finalOutput', label: '마지막 산출물' },
  { key: 'tone', label: '말투' },
]

export function getMissingPromptFields(fields: PromptFields): string[] {
  return requiredPromptFields
    .filter(({ key }) => !fields[key]?.trim())
    .map(({ label }) => label)
}

function requiredValue(value: string | undefined, label: string): string {
  const trimmed = value?.trim()
  return trimmed ? trimmed : `[입력 필요: ${label}]`
}

function optionalValue(value: string | undefined): string {
  const trimmed = value?.trim()
  return trimmed ? trimmed : '입력하지 않음'
}

export function buildMetaPrompt(fields: PromptFields): string {
  const replacements: Record<string, string> = {
    '{{교과}}': requiredValue(fields.subject, '교과'),
    '{{학년}}': requiredValue(fields.grade, '학년'),
    '{{개념}}': requiredValue(fields.concept, '개념'),
    '{{핵심 요소}}': requiredValue(fields.keyElements, '핵심 요소'),
    '{{자주 나타나는 오개념}}': requiredValue(
      fields.misconception,
      '자주 나타나는 오개념',
    ),
    '{{첫 질문}}': requiredValue(fields.firstQuestion, '첫 질문'),
    '{{마지막 산출물}}': requiredValue(fields.finalOutput, '마지막 산출물'),
    '{{말투}}': requiredValue(fields.tone, '말투'),
    '{{학습 완료 코드}}':
      fields.completionCode?.trim() || '입력하지 않음 — 8자리 코드 생성 필요',
    '{{수업 범위 및 참고 근거}}': optionalValue(fields.sourceContext),
    '{{추가 요청사항}}': optionalValue(fields.additionalRequirements),
  }

  return Object.entries(replacements).reduce(
    (prompt, [placeholder, value]) => prompt.split(placeholder).join(value),
    gemMetaPromptTemplate,
  )
}

function safeFilePart(value: string | undefined, fallback: string): string {
  const normalized = value?.trim() || fallback
  return normalized
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, '_')
    .slice(0, 48)
}

export function buildMetaPromptFilename(fields: PromptFields): string {
  const subject = safeFilePart(fields.subject, '교과')
  const concept = safeFilePart(fields.concept, '개념')
  return `${subject}_${concept}_Gem_제작_메타프롬프트.md`
}

export type PromptExample = {
  id: string
  label: string
  fields: PromptFields
}

// 「입력 예시 버튼」(docs/02_WIREFRAME.md 「9. Gem 프롬프트 빌더」)에서 제시한
// 교과·개념 쌍을 기반으로 나머지 필드는 예시용으로 합리적인 값을 채운다.
export const promptExamples: PromptExample[] = [
  {
    id: 'science',
    label: '과학: 광합성과 호흡',
    fields: {
      subject: '과학',
      grade: '중학교 2학년',
      concept: '광합성과 호흡',
      keyElements: '광합성과 호흡의 반응물·생성물, 에너지 출입 방향',
      misconception: '식물은 광합성만 하고 호흡은 하지 않는다는 오개념',
      firstQuestion: '식물도 우리처럼 숨을 쉴까요? 광합성과 호흡의 차이를 설명해볼까요?',
      finalOutput: '광합성과 호흡을 비교하는 한 문장 요약',
      tone: '친절한 교사',
      completionCode: '',
      sourceContext: '중학교 2학년 과학 수업에서 다룬 광합성과 호흡의 기본 개념 범위',
      additionalRequirements: '',
    },
  },
  {
    id: 'korean',
    label: '국어: 주장과 근거',
    fields: {
      subject: '국어',
      grade: '고등학교 1학년',
      concept: '주장과 근거의 타당성',
      keyElements: '주장, 근거, 근거와 주장의 논리적 연결',
      misconception: '근거처럼 보이는 예시가 실제로는 주장을 뒷받침하지 못하는 경우',
      firstQuestion: '이 글에서 글쓴이의 주장은 무엇이고, 그 근거는 무엇인가요?',
      finalOutput: '주장과 근거를 정리한 개요표',
      tone: '친절한 교사',
      completionCode: '',
      sourceContext: '고등학교 1학년 국어 수업에서 다룬 주장과 근거의 타당성 범위',
      additionalRequirements: '',
    },
  },
  {
    id: 'math',
    label: '수학: 함수와 그래프',
    fields: {
      subject: '수학',
      grade: '중학교 3학년',
      concept: '함수와 그래프의 관계',
      keyElements: '정의역과 치역, 함숫값, 그래프 위 점의 의미',
      misconception: '그래프의 모양만 보고 함수 여부를 판단하는 오개념',
      firstQuestion: '이 그래프에서 x값 하나에 y값이 하나씩 대응하는지 확인해볼까요?',
      finalOutput: '함수 여부를 판단하는 나만의 기준 한 가지',
      tone: '친절한 교사',
      completionCode: '',
      sourceContext: '중학교 3학년 수학 수업에서 다룬 함수와 그래프의 기본 개념 범위',
      additionalRequirements: '',
    },
  },
  {
    id: 'society',
    label: '사회: 수요와 공급',
    fields: {
      subject: '사회',
      grade: '중학교 3학년',
      concept: '수요와 공급의 원리',
      keyElements: '가격 변화에 따른 수요량·공급량 변화, 균형 가격',
      misconception: '가격이 오르면 수요와 공급이 항상 같은 방향으로 움직인다는 오개념',
      firstQuestion: '가격이 오르면 사려는 사람과 팔려는 사람의 행동은 각각 어떻게 달라질까요?',
      finalOutput: '수요와 공급으로 설명한 실생활 사례 하나',
      tone: '친절한 교사',
      completionCode: '',
      sourceContext: '중학교 3학년 사회 수업에서 다룬 수요·공급과 균형 가격의 기본 범위',
      additionalRequirements: '',
    },
  },
  {
    id: 'informatics',
    label: '정보: 조건문',
    fields: {
      subject: '정보',
      grade: '고등학교 1학년',
      concept: '조건문(if)의 실행 흐름',
      keyElements: '조건식의 참·거짓, 분기별 실행 코드',
      misconception: '조건이 거짓이어도 if 블록이 실행된다고 생각하는 오개념',
      firstQuestion: '이 조건문에서 조건이 거짓이면 어떤 코드가 실행될까요?',
      finalOutput: '조건문 실행 흐름을 그린 순서도 설명',
      tone: '친절한 교사',
      completionCode: '',
      sourceContext: '고등학교 1학년 정보 수업에서 다룬 파이썬 조건문의 기본 실행 흐름',
      additionalRequirements: '',
    },
  },
]
