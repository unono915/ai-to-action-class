import type { LessonImageId } from './lessonImages'

// 2단계 「수업 철학 나눔 — 수업 사례로」의 핵심 데이터.
// 발표자의 실제 수업 「이미지 분류 모델로 프로그램 움직이기」를 따라가며,
// 수업 철학이 수업의 어느 장면에 어떻게 녹아 있는지를 한 흐름으로 보여 준다.
//
// - 발표 모드: heading을 슬라이드로 크게 띄우고 image를 함께 보여 준다.
// - 실습 모드: philosophy(수업 철학)와 lesson(수업 장면)을 카드로 나란히 읽는다.

export type NarrativeBeat = {
  id: string
  /** 철학 테마 라벨 */
  eyebrow: string
  /** 발표용 큰 문장 (1~2줄, 밀림 방지를 위해 짧게 유지) */
  heading: string[]
  /** 수업 철학 한 줄 */
  philosophy: string
  /** 그 철학이 수업의 어느 장면에 어떻게 나타났는지 */
  lesson: string
  /** 함께 띄울 교안 이미지 */
  image?: LessonImageId
  /** 발표용 보조 문구(작게) */
  note?: string
}

export const lessonNarrative: NarrativeBeat[] = [
  {
    id: 'intro',
    eyebrow: '수업 사례 나눔',
    heading: ['제가 나눈 수업으로', '이야기를 시작합니다'],
    philosophy: '추상적인 원칙보다, 실제로 진행한 수업 한 편으로 철학을 이야기합니다.',
    lesson:
      '「이미지 분류 모델로 프로그램 움직이기」 — 모델의 판단을 행동으로 연결한 고등학교 수업입니다.',
    image: 'lesson-title',
    note: '이미지 분류 모델로 프로그램 움직이기 · 경문고등학교 지윤호',
  },
  {
    id: 'student-question',
    eyebrow: '학생의 질문',
    heading: ['“이걸 왜 배워요?', '어디에 쓰나요?”'],
    philosophy:
      '배운 것이 삶의 어디에 닿는지 보이지 않으면, 지식은 이해에서 멈춥니다.',
    lesson:
      "그래서 수업을 개념이 아니라 '진짜 문제'에서 시작했습니다 — 입을 열지 않고 친구에게 말을 전해야 하는 상황.",
    image: 'problem-situation',
    note: "수업은 개념이 아니라 '풀고 싶은 문제'에서 출발했습니다",
  },
  {
    id: 'core-question',
    eyebrow: '수업의 출발점',
    heading: ['판단만 하고 실행하지 않으면,', '달라지는 게 있을까요?'],
    philosophy: '지식은 삶과 문제 해결로 확장될 때 비로소 살아납니다.',
    lesson: '이 한 문장을 오늘 수업의 핵심 질문으로 칠판에 걸어 두고 시작했습니다.',
    image: 'core-question',
  },
  {
    id: 'model-judges',
    eyebrow: '1단계 · 판단',
    heading: ['모델의 역할은', "'판단'까지입니다"],
    philosophy: '분류 모델은 입력이 어떤 레이블에 가까운지 판단하는 데서 역할이 끝납니다.',
    lesson:
      "손 사진을 넣으면 모델은 '하트·너·기타' 같은 레이블만 내놓습니다. 여기서 멈추면 'AI가 손을 구분하는구나'로 수업이 끝나 버립니다.",
    image: 'model-judges',
    note: '입력(사진) → 인공지능 모델 → 분류 결과(레이블)',
  },
  {
    id: 'action',
    eyebrow: '판단 → 행동',
    heading: ["판단에 '몸통'을 달아", '행동으로 잇습니다'],
    philosophy:
      '판단을 행동으로 연결하면, 분류 결과가 텍스트·이미지·소리·움직임이 됩니다.',
    lesson:
      "활동 이름이 바로 '모델에 몸통 달기'였습니다. 카메라 → 모델 → 라벨 → 프로그램(행동/출력) 구조를 학생이 직접 완성했습니다.",
    image: 'structure',
    note: '카메라 → 모델 → 라벨 → 프로그램(행동/출력)',
  },
  {
    id: 'train-vs-action',
    eyebrow: '별개의 단계',
    heading: ['모델을 학습시키는 일과', '행동을 정하는 일은 다릅니다'],
    philosophy: '모델 훈련과 행동 설정은 서로 다른 별개의 단계입니다.',
    lesson:
      "손 모양을 학습시키는 일과, 각 레이블에 '고마워!·잘했어!·잠깐 멈춰!' 같은 출력 문구를 붙이는 일을 따로 설계하게 했습니다.",
    image: 'label-output',
  },
  {
    id: 'question-changes',
    eyebrow: '질문이 바뀝니다',
    heading: ["'왜 배워요?'가", "'어디에 쓸까?'로"],
    philosophy: '판단을 행동에 연결하는 순간, 학생의 질문이 바뀝니다.',
    lesson:
      '학생들은 스포츠·의학·환경·요리처럼 자기 관심 분야에서 이미지 분류로 무엇을 해결할지 스스로 찾기 시작했습니다.',
    image: 'connect-interests',
  },
  {
    id: 'limits',
    eyebrow: '그러나 — 판단의 한계',
    heading: ['AI가 늘 더 잘', '판단하지는 않습니다'],
    philosophy:
      'AI가 판단 일부를 대신할 수 있다는 것과, 늘 더 잘 판단한다는 것은 다른 문제입니다.',
    lesson:
      '표정은 카메라로 볼 수 있어도 진심·성실함은 보이지 않습니다. 사람을 외모로 평가하거나 차별하는 문제에는 쓰지 않기로 함께 선을 그었습니다.',
    image: 'cautions',
    note: '보이지 않는 것을 억지로 판단하지 않기',
  },
  {
    id: 'four-gates',
    eyebrow: '좋은 아이디어를 거르는 질문',
    heading: ['아이디어를 거르는', '네 개의 관문'],
    philosophy: '이미지 분류 수업 아이디어를 검토하는 네 가지 질문입니다.',
    lesson:
      '카메라로 볼 수 있는가 · 명확한 라벨로 나눌 수 있는가 · 학습 데이터를 모을 수 있는가 · 판단 뒤 행동으로 연결할 수 있는가. 네 관문을 모두 통과해야 좋은 프로젝트가 됩니다.',
    image: 'four-gates',
    note: '보이는가 · 나눌 수 있는가 · 모을 수 있는가 · 행동할 수 있는가',
  },
  {
    id: 'judgment-is-me',
    eyebrow: '수업이 남긴 것',
    heading: ['가장 중요한 판단을 내리는 건', "바로 '나'입니다"],
    philosophy:
      'AI는 도구일 뿐, 어디에 쓸지 결정하고 그 결과에 책임지는 것은 사람입니다.',
    lesson:
      "수업의 마지막 장면입니다. 학생이 스스로 '판단하는 뇌'가 되어 문제를 고르고 책임지는 데까지 나아갔습니다.",
    image: 'judgment-is-me',
  },
  {
    id: 'bridge',
    eyebrow: '그래서 오늘, 함께',
    heading: ['이 흐름을 여러분의', '교과에서 찾아봅니다'],
    philosophy: '판단에서 멈추지 않고 행동까지 잇는 흐름을, 선생님들의 교과로 옮겨 봅니다.',
    lesson:
      '보이는가 → 나눌 수 있는가 → 모을 수 있는가 → 행동할 수 있는가. 이 네 질문을 이어지는 실습에서 그대로 사용합니다.',
    image: 'good-cases',
    note: '이어지는 실습이 바로 그 연습입니다',
  },
]
