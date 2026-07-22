// 교과별 사례 기본 데이터.
// 출처: docs/04_CONTENT_AND_LINKS_SPEC.md 「7. 교과별 사례 기본 데이터」
// 문서에 없는 학년·수업 흐름 등의 세부 항목은 임의로 추가하지 않는다.

export type ModelType = 'image' | 'pose' | 'voice'

export const modelTypeLabels: Record<ModelType, string> = {
  image: '이미지',
  pose: '자세',
  voice: '음성',
}

export type SubjectExample = {
  id: string
  subject: string
  modelTypes: ModelType[]
  target: string
  labels: string
  action: string
  caution: string
}

export const subjectExamples: SubjectExample[] = [
  {
    id: 'pe',
    subject: '체육',
    modelTypes: ['pose'],
    target: '스쿼트·준비 자세·팔 위치',
    labels: '바른 자세 / 확인 필요',
    action: '교정 문구·시범 이미지',
    caution: '체형과 촬영 각도 차이',
  },
  {
    id: 'korean',
    subject: '국어',
    modelTypes: ['voice'],
    target: '발음·음운 변동·낭독',
    labels: '발음 A / 발음 B / 재확인',
    action: '관련 규칙·다시 읽을 문장',
    caution: '정답 판정기가 아닌 탐구 활동',
  },
  {
    id: 'music',
    subject: '음악',
    modelTypes: ['voice'],
    target: '악기 소리·리듬·강약',
    labels: '악기 A / B / C',
    action: '악기 정보·다음 연주 안내',
    caution: '주변 소음과 혼합음',
  },
  {
    id: 'science',
    subject: '과학',
    modelTypes: ['image'],
    target: '암석·잎 상태·색 변화',
    labels: '종류 또는 상태',
    action: '관찰 질문·추가 실험',
    caution: '사진만으로 확정하기 어려운 성질',
  },
  {
    id: 'art',
    subject: '미술',
    modelTypes: ['image'],
    target: '색상 계열·구도·표현 기법',
    labels: '유형별',
    action: '관련 작품·표현 활동',
    caution: '작품 가치 평가 금지',
  },
  {
    id: 'tech-home',
    subject: '기술·가정',
    modelTypes: ['image', 'pose'],
    target: '재료·공구·분리수거·안전 행동',
    labels: '종류·안전 여부',
    action: '사용법·안전 수칙',
    caution: '위험한 장치 작동을 모델에만 의존하지 않음',
  },
  {
    id: 'career',
    subject: '진로·창체',
    modelTypes: ['image'],
    target: '직업 도구·작업 환경·안전 행동',
    labels: '(교과 특성에 맞게 설정)',
    action: '직업 정보·캠페인',
    caution: '사람의 적성·성격 판단 금지',
  },
]

export const modelTypeFilters: { value: 'all' | ModelType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'image', label: '이미지' },
  { value: 'pose', label: '자세' },
  { value: 'voice', label: '음성' },
]
