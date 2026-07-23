// 실습용 화면 캡처 데이터.
// 파일: public/assets/screenshots/*.png
// 각 캡처는 실제 화면 내용을 직접 확인한 뒤 alt·caption을 작성했다.

export type ScreenshotId =
  | 'teachable-machine-start'
  | 'teachable-machine-labels'
  | 'teachable-machine-train'
  | 'teachable-machine-test'
  | 'teachable-machine-export'
  | 'action-runner-model'
  | 'action-runner-actions'
  | 'action-runner-test'
  | 'gem-builder'
  | 'gem-builder-study'
  | 'notebook-knowledge'
  | 'notebook-knowledge-added'

export type Screenshot = {
  id: ScreenshotId
  file: string
  alt: string
  caption: string
}

export const screenshots: Record<ScreenshotId, Screenshot> = {
  'teachable-machine-start': {
    id: 'teachable-machine-start',
    file: 'teachable-machine-start.png',
    alt: 'Teachable Machine 새 프로젝트 화면에서 이미지 프로젝트, 오디오 프로젝트, 포즈 프로젝트 중 하나를 선택하는 화면',
    caption: '새 프로젝트에서 「이미지 프로젝트」를 선택합니다.',
  },
  'teachable-machine-labels': {
    id: 'teachable-machine-labels',
    file: 'teachable-machine-labels.png',
    alt: 'Teachable Machine에서 O, X, 배경 세 개의 클래스에 각각 이미지 샘플이 수집된 화면',
    caption: 'O·X·배경 레이블을 만들고 각 레이블에 웹캠 데이터를 모읍니다.',
  },
  'teachable-machine-train': {
    id: 'teachable-machine-train',
    file: 'teachable-machine-train.png',
    alt: 'Teachable Machine에서 학습 버튼을 눌러 모델을 훈련하는 중인 화면. 진행 상태가 30/50으로 표시됨',
    caption: '데이터 수집이 끝나면 「모델 학습시키기」로 훈련을 시작합니다.',
  },
  'teachable-machine-test': {
    id: 'teachable-machine-test',
    file: 'teachable-machine-test.png',
    alt: 'Teachable Machine 미리보기 영역에서 웹캠으로 손 모양을 비추고 O 레이블에 92% 확률이 표시된 화면',
    caption: '웹캠으로 모델을 테스트하고 레이블별 예측 확률을 확인합니다.',
  },
  'teachable-machine-export': {
    id: 'teachable-machine-export',
    file: 'teachable-machine-export.png',
    alt: 'Teachable Machine 모델 내보내기 창에서 업로드된 모델의 공유 가능한 링크와 코드 스니펫이 표시된 화면',
    caption: '「모델 내보내기」에서 공유 가능한 모델 URL을 복사합니다.',
  },
  'action-runner-model': {
    id: 'action-runner-model',
    file: 'action-runner-model.png',
    alt: '행동 연결 사이트에서 Teachable Machine 모델 URL을 입력하고 모델을 불러와 O, X, 배경 레이블을 확인한 화면',
    caption: '행동 연결 사이트에 모델 URL을 입력하면 레이블을 불러옵니다.',
  },
  'action-runner-actions': {
    id: 'action-runner-actions',
    file: 'action-runner-actions.png',
    alt: '행동 연결 사이트에서 O, X, 배경 레이블마다 출력 문구와 이미지를 설정하는 화면',
    caption: '레이블별로 출력할 문구와 이미지를 설정합니다.',
  },
  'action-runner-test': {
    id: 'action-runner-test',
    file: 'action-runner-test.png',
    alt: '행동 연결 사이트에서 웹캠에 비친 손 모양을 O로 93.2% 확률로 판단하고 "이해했어요!" 문구와 이미지를 실제로 출력한 화면',
    caption: '웹캠 판단 결과에 따라 설정한 문구와 이미지가 실제로 출력됩니다.',
  },
  'gem-builder': {
    id: 'gem-builder',
    file: 'gem-builder.png',
    alt: 'Gemini Gem 만들기 화면에서 이름, 설명, 요청 사항, 지식 항목을 입력하고 오른쪽 미리보기에서 Gem을 확인하는 화면',
    caption: '생성형 AI가 만든 요청사항을 Gem에 붙여 넣고 지식 자료를 추가합니다.',
  },
  'gem-builder-study': {
    id: 'gem-builder-study',
    file: 'gem-builder-study.png',
    alt: 'Gem 만들기 화면의 「기본 도구」 드롭다운에서 기본 도구 없음, 가이드 학습, 이미지 만들기, 음악 만들기, Canvas 중 「가이드 학습」을 선택하는 화면',
    caption:
      '개념 확인형 Gem이라면 「기본 도구」에서 「가이드 학습」을 선택할 수 있습니다.',
  },
  'notebook-knowledge': {
    id: 'notebook-knowledge',
    file: 'notebook-knowledge.png',
    alt: 'Gem의 지식 영역에서 「노트북 추가」 창을 열어 연결할 Notebook 목록을 선택하는 화면',
    caption:
      'Gem의 「지식」에서 더보기 업로드를 열고, 검토를 마친 노트북을 선택합니다.',
  },
  'notebook-knowledge-added': {
    id: 'notebook-knowledge-added',
    file: 'notebook-knowledge-added.png',
    alt: 'Gem의 지식 영역에 Notebook 하나가 자료로 연결되어 표시된 화면',
    caption: '노트북 자체가 Gem의 지식 자료로 연결된 완료 상태입니다.',
  },
}

export function screenshotUrl(id: ScreenshotId): string {
  return `${import.meta.env.BASE_URL}assets/screenshots/${screenshots[id].file}`
}
