// 「왜 이런 수업인가」(2단계) 발표 장면 9개.
// 출처: docs/05_SITE_CONTENT_DRAFT.md 「2. 왜 이런 수업인가」
// 표현은 다듬되 교육적 의미는 바꾸지 않는다.

export type PresentationScene = {
  id: number
  label: string
  lines: string[]
  bullets?: string[]
}

export const presentationScenes: PresentationScene[] = [
  {
    id: 1,
    label: '학생의 질문',
    lines: ['학생들은 묻습니다.', '“이걸 왜 배우나요?”', '“배워서 어디에 쓰나요?”'],
  },
  {
    id: 2,
    label: '지식의 확장',
    lines: [
      '배운 지식은 이해에서 끝나는 것이 아니라,',
      '학생의 삶과 문제 해결로 확장될 때 살아납니다.',
    ],
  },
  {
    id: 3,
    label: 'AI 시대에 필요한 것',
    lines: ['AI 시대에 필요한 것은 도구 사용법만이 아닙니다.'],
    bullets: [
      'AI를 사용하는 방법',
      'AI가 판단하는 원리',
      '판단 결과가 활용되는 구조',
      'AI의 판단을 검토하는 태도',
    ],
  },
  {
    id: 4,
    label: '판단에서 끝나면',
    lines: [
      '분류 모델 수업이 여기서 끝난다면',
      '입력 → 모델 판단 → 레이블',
      '학생은 “AI가 이미지를 구분하는구나.”라고 이해하고 넘어갈 수 있습니다.',
    ],
  },
  {
    id: 5,
    label: '행동으로 연결하면',
    lines: [
      '판단을 행동으로 연결하면',
      '입력 → 모델 판단 → 레이블 → 텍스트·이미지·소리·움직임',
      '학생의 질문은 “이걸 어디에 쓸 수 있을까?”로 바뀝니다.',
    ],
  },
  {
    id: 6,
    label: '훈련과 행동은 별개',
    lines: [
      '모델을 훈련시키는 일과',
      '판단 결과에 따라 행동을 설정하는 일은 별개의 단계입니다.',
    ],
  },
  {
    id: 7,
    label: '판단의 한계',
    lines: [
      'AI가 인간의 판단 일부를 대신할 수 있다는 것과',
      '모든 상황에서 인간보다 더 잘 판단한다는 것은 다른 문제입니다.',
    ],
  },
  {
    id: 8,
    label: '판단하기 전에 묻기',
    lines: ['판단하기 전에 묻습니다.'],
    bullets: [
      '데이터가 충분한가?',
      '레이블 기준이 명확한가?',
      '실제 환경에서도 작동하는가?',
      '틀렸을 때 위험하지 않은가?',
      'AI가 판단해도 되는 문제인가?',
    ],
  },
  {
    id: 9,
    label: '아이디어 검토 네 질문',
    lines: ['이미지 분류 수업 아이디어를 검토하는 네 질문'],
    bullets: ['보이는가?', '나눌 수 있는가?', '모을 수 있는가?', '판단 뒤 행동할 수 있는가?'],
  },
]

export const TOTAL_SCENES = presentationScenes.length

export function clampScene(value: number): number {
  if (Number.isNaN(value)) return 1
  const rounded = Math.round(value)
  if (rounded < 1) return 1
  if (rounded > TOTAL_SCENES) return TOTAL_SCENES
  return rounded
}

export function getScene(id: number): PresentationScene {
  return presentationScenes.find((scene) => scene.id === id) ?? presentationScenes[0]
}
