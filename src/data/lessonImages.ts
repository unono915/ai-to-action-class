// 발표자(경문고 지윤호)의 실제 수업 「이미지 분류 모델로 프로그램 움직이기」 교안 캡처.
// 원본 파일: assets/수업 나눔 사례 교안.pdf
// 2단계(수업 철학 나눔 · 수업 사례 나눔)에서 철학이 수업의 어느 장면에
// 녹아 있는지를 보여 주기 위해 사용한다. 발표자 본인 자료다.

export type LessonImageId =
  | 'lesson-title'
  | 'problem-situation'
  | 'core-question'
  | 'model-judges'
  | 'activity-flow'
  | 'structure'
  | 'label-output'
  | 'connect-interests'
  | 'cautions'
  | 'four-gates'
  | 'good-cases'
  | 'ai-assists'
  | 'judgment-is-me'

export type LessonImage = {
  id: LessonImageId
  file: string
  alt: string
}

export const lessonImages: Record<LessonImageId, LessonImage> = {
  'lesson-title': {
    id: 'lesson-title',
    file: 'lesson-title.webp',
    alt: '수업 제목 화면. 카메라, 뇌, 화면 아이콘이 화살표로 이어지고 "이미지 분류 모델로 프로그램 움직이기 — 모델의 판단을 행동으로 연결하고, 적용 가능한 문제를 찾아보기"라고 적혀 있다.',
  },
  'problem-situation': {
    id: 'problem-situation',
    file: 'problem-situation.webp',
    alt: '활동1 문제 상황 슬라이드. "입 열지 않고 친구에게 말 전달하기 — 여러분은 더이상 말을 못합니다. 손으로 대화해야 하는데 상대방은 수화를 모릅니다. 컴퓨터가 손동작을 이해해 하고 싶은 말로 전달해 주면 문제가 해결되지 않을까?"',
  },
  'core-question': {
    id: 'core-question',
    file: 'core-question.webp',
    alt: '오늘의 핵심 질문 슬라이드. "세상에서 판단만 하고 실행하지 않는다면 달라지는 게 있을까요?"라는 큰 문장이 적혀 있다.',
  },
  'model-judges': {
    id: 'model-judges',
    file: 'model-judges.webp',
    alt: '모델은 스스로 판단한다는 슬라이드. 입력(손 사진) → 인공지능 모델(뇌) → 분류 결과(너/하트/기타)로 이어지며 "모델의 역할은 입력된 사진이 어떤 라벨에 가까운지 판단하는 것까지"라고 적혀 있다.',
  },
  'activity-flow': {
    id: 'activity-flow',
    file: 'activity-flow.webp',
    alt: '오늘의 활동 흐름 슬라이드. 판단하는 뇌와 행동하는 톱니바퀴가 합쳐진 아이콘의 "활동 1: 모델에 몸통 달기"가 강조되어 있다.',
  },
  structure: {
    id: 'structure',
    file: 'structure.webp',
    alt: '우리가 방금 만든 구조 슬라이드. 카메라(입력) → 인공지능 모델(판단) → 라벨(분류 결과) → 프로그램(행동/출력)의 네 단계가 화살표로 이어져 있다.',
  },
  'label-output': {
    id: 'label-output',
    file: 'label-output.webp',
    alt: '손동작 라벨과 출력 문구 표. 하트→고마워!, 엄지척→잘했어!, 손바닥→잠깐 멈춰!, 손가락 가리키기→너 차례야!, 브이→같이 하자!',
  },
  'connect-interests': {
    id: 'connect-interests',
    file: 'connect-interests.webp',
    alt: '나의 진로와 관심사에 AI 연결하기 슬라이드. 스포츠·의학·동물·환경·패션·자동차·게임·요리·디자인·교육 등 관심 분야 방울들이 떠 있다.',
  },
  cautions: {
    id: 'cautions',
    file: 'cautions.webp',
    alt: '이미지 분류로 조심해야 할 문제 슬라이드. 표정 같은 확인할 수 있는 정보(초록 체크)와 성실함·진심·착함 같은 보이지 않는 정보(빨간 경고)를 구분하고, 외모로 사람을 평가하거나 차별하는 문제를 경고한다.',
  },
  'four-gates': {
    id: 'four-gates',
    file: 'four-gates.webp',
    alt: '인공지능을 어디에 적용할지 판단하는 네 개의 관문 슬라이드. 카메라로 볼 수 있는가(시각적 특징), 명확한 라벨로 나눌 수 있는가(분류 가능성), 학습 데이터를 모을 수 있는가(데이터 수집), 판단 뒤 행동으로 연결할 수 있는가(문제 해결).',
  },
  'good-cases': {
    id: 'good-cases',
    file: 'good-cases.webp',
    alt: '이미지 분류에 잘 맞는 사례 슬라이드. 식물 잎 상태 확인, 운동 자세 확인, 손동작 의사소통, 분리수거 물품 구분. "눈에 보이고, 라벨로 나눌 수 있으며, 결과에 따라 안내할 수 있습니다."',
  },
  'ai-assists': {
    id: 'ai-assists',
    file: 'ai-assists.webp',
    alt: 'AI는 거들 뿐, 판단은 내가 슬라이드. "GEM의 아이디어 제안 + 나의 4가지 관문 필터 = 훌륭한 AI 프로젝트"라는 식이 그려져 있다.',
  },
  'judgment-is-me': {
    id: 'judgment-is-me',
    file: 'judgment-is-me.webp',
    alt: '가장 중요한 판단을 내리는 뇌는 바로 나라는 슬라이드. 받침대 위 AI 뇌와 빛나는 사람 머리를 대비하며 "인공지능은 도구일 뿐, 어떤 문제에 사용할지 결정하고 책임지는 것은 우리 자신"이라고 적혀 있다.',
  },
}

export function lessonImageUrl(id: LessonImageId): string {
  return `${import.meta.env.BASE_URL}assets/lesson/${lessonImages[id].file}`
}
