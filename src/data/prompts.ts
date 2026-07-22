// Gem 프롬프트 빌더 데이터.
// 템플릿 출처: docs/04_CONTENT_AND_LINKS_SPEC.md 「8. 프롬프트 빌더 기본 템플릿」
// 자료 기반 Gem 지침 출처: 같은 문서 「9. 자료 기반 Gem 지침」

export type PromptFields = {
  subject: string
  grade: string
  concept: string
  keyElements: string
  misconception: string
  firstQuestion: string
  finalOutput: string
  tone: string
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
}

// 빈 필드는 자연스러운 기본 문장으로 처리하고, 내용을 임의로 발명하지 않는다.
const fallback = {
  subject: '선택한 교과',
  grade: '학생',
  concept: '핵심 개념',
  keyElements: '핵심 개념 요소',
  misconception: '자주 헷갈리는 부분',
  firstQuestion: '오늘 배운 개념을 자신의 말로 설명해볼까요?',
  finalOutput: '배운 개념 정리',
  tone: '친절한 교사',
}

function pick(value: string, fallbackValue: string): string {
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : fallbackValue
}

export function buildPrompt(fields: PromptFields): string {
  const concept = pick(fields.concept, fallback.concept)
  const grade = pick(fields.grade, fallback.grade)
  const tone = pick(fields.tone, fallback.tone)
  const keyElements = pick(fields.keyElements, fallback.keyElements)
  const misconception = pick(fields.misconception, fallback.misconception)
  const firstQuestion = pick(fields.firstQuestion, fallback.firstQuestion)
  const finalOutput = pick(fields.finalOutput, fallback.finalOutput)

  return `너는 학생의 [${concept}] 이해를 점검하는 AI 학습 도우미이다.

대상은 [${grade}] 학생이다. 말투는 [${tone}]로 유지한다.

학생에게 정답을 바로 알려주지 말고, 먼저 학생이 자신의 말로 개념을 설명하게 한다.

학생의 답변에서 다음 내용을 확인한다.

1. [${keyElements}]
2. 빠진 조건이나 설명
3. 다음과 같은 자주 나타나는 오개념: [${misconception}]
4. 적절한 예시
5. 새로운 상황에 적용할 수 있는지

답변이 부족하면 정답을 바로 말하지 말고, 다시 생각할 수 있는 질문이나 짧은 힌트를 제공한다.

첫 질문은 다음과 같이 시작한다.
"[${firstQuestion}]"

대화의 마지막에는 학생이 [${finalOutput}]을 자신의 말로 작성하게 한다.`
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
    },
  },
]

// 자료 기반 Gem 지침 (docs/04 「9. 자료 기반 Gem 지침」)
export const groundedGemInstructions = `답변은 연결된 자료를 우선 근거로 작성한다.

자료에서 근거를 확인할 수 없는 내용은 추측하지 말고
"제공된 자료에서는 확인할 수 없습니다."라고 답한다.

가능한 경우 답변의 근거가 된 자료나 항목을 함께 제시한다.`

export const groundedGemCaution =
  '자료를 연결하면 자료에 근거한 답변을 유도하고 오류 가능성을 줄이는 데 도움이 되지만, AI의 오류가 완전히 사라지는 것은 아닙니다.'
