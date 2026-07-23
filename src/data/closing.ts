import type { ExternalLinkKey } from './links'

export type ClosingResearchCard = {
  id: 'harvard' | 'mit'
  institution: string
  studyType: string
  roleLabel: string
  title: string
  context: string
  design: string[]
  findings: string[]
  caution?: string
  linkKey: ExternalLinkKey
}

export const closingQuestion = '같은 생성형 AI, 결과도 같았을까요?'

export const closingResearchCards: ClosingResearchCard[] = [
  {
    id: 'harvard',
    institution: 'Harvard',
    studyType: '2025 · 대학 물리학 수업 RCT',
    roleLabel: '학습 도우미',
    title: '맞춤형 AI 튜터',
    context: '학생 194명이 교과 내용에 맞춘 AI 튜터와 능동학습 수업을 교차 경험했습니다.',
    design: [
      '교과 내용과 학습 자료에 맞춘 설계',
      '질문·순차적 안내·적시 피드백 제공',
      '학생이 스스로 풀도록 돕는 튜터 역할',
    ],
    findings: ['더 높은 학습 성과', '더 높은 참여도와 동기'],
    linkKey: 'harvardAiTutorStudy',
  },
  {
    id: 'mit',
    institution: 'MIT Media Lab',
    studyType: '2025 · 에세이 작성 연구 프리프린트',
    roleLabel: '작성 도구',
    title: '범용 LLM 글쓰기',
    context: '참여자 54명이 LLM, 검색, 도구 없음 조건에서 에세이 작성 과제를 수행했습니다.',
    design: [
      '범용 LLM으로 에세이 작성 지원',
      '결과물 작성 과정에서 AI 활용',
      '사고와 표현 일부를 대신할 가능성',
    ],
    findings: ['더 약한 뇌 연결성 관찰', '더 낮은 글의 소유감과 회상'],
    caution: '동료평가 전 프리프린트로, 표본과 과제 범위를 넘어 일반화하지 않도록 주의해야 합니다.',
    linkKey: 'mitBrainOnChatGptStudy',
  },
]

export const comparisonCaution =
  '두 연구는 과제·대상·설계가 달라 직접 우열을 비교할 수 없습니다. 다만 함께 보면 AI의 효과를 하나로 말하기보다, 언제 어떤 역할과 도움을 맡겼는지 살펴봐야 한다는 질문을 던집니다.'

export const designFactors = [
  '학생이 AI를 사용하는 시점',
  'AI가 제공할 도움의 범위',
  '정답 대신 설명과 판단을 이끌 질문',
  '교과 자료와 평가 기준의 반영',
  'AI의 답변을 학생이 검토하는 활동',
]

export const practiceMeaning = [
  '먼저 학생에게 설명하게 하는 AI',
  '빠진 내용을 질문하는 AI',
  '오개념을 다시 생각하게 하는 AI',
  '학생이 자기 말로 수정하게 하는 AI',
]

export const closingTakeaway = {
  lead: '학생의 생각을 대신하는 AI가 아니라,',
  emphasis: '학생이 더 깊이 생각하도록 돕는 AI를 설계해야 합니다.',
  teacher:
    'AI 시대의 교사는 도구의 사용법을 알려주는 사람을 넘어, 학생의 배움을 위해 AI의 역할을 설계하는 사람입니다.',
}
