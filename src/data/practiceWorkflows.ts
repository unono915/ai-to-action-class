import type { ScreenshotId } from './screenshots'

export type PracticeWorkflowStep = {
  title: string
  description: string
  points?: string[]
  screenshots: ScreenshotId[]
}

export const modelBuildingWorkflow = {
  outcome: 'O·X·배경을 구분하는 손 모양 모델과 다음 단계에서 사용할 모델 URL',
  intro:
    'Teachable Machine에서 데이터를 모으고 학습한 뒤, 조건을 바꿔 시험하고 모델 URL을 복사합니다.',
  steps: [
    {
      title: '이미지 프로젝트 열기',
      description:
        'Teachable Machine에서 새 프로젝트를 만들고 「이미지 프로젝트」를 선택합니다.',
      screenshots: ['teachable-machine-start'],
    },
    {
      title: 'O·X·배경 데이터 모으기',
      description:
        '세 레이블의 데이터 수를 비슷하게 맞추고, 웹캠 앞에서 손의 위치와 모습을 조금씩 바꾸며 촬영합니다.',
      points: [
        'O와 X는 위치·거리·각도를 조금씩 바꾸어 촬영하기',
        '배경에는 손동작이 없는 화면 담기',
        '세 레이블의 데이터 수를 비슷하게 맞추기',
      ],
      screenshots: ['teachable-machine-labels'],
    },
    {
      title: '학습하고 조건을 바꿔 시험하기',
      description:
        '모델을 학습한 뒤 거리·각도·배경을 바꾸어 봅니다. 모델이 손 모양이 아닌 다른 특징을 보고 있지 않은지 확인합니다.',
      points: [
        '손을 카메라에 가깝게·멀게 보여 주기',
        '손의 각도와 화면 속 위치 바꾸기',
        '배경을 바꾸거나 일부러 애매한 동작 보여 주기',
      ],
      screenshots: ['teachable-machine-train', 'teachable-machine-test'],
    },
    {
      title: '모델을 내보내고 URL 복사하기',
      description:
        '「모델 내보내기」에서 모델 업로드가 끝날 때까지 기다린 뒤, 생성된 공유 URL을 복사합니다.',
      screenshots: ['teachable-machine-export'],
    },
  ] satisfies PracticeWorkflowStep[],
}

export const actionRunnerWorkflow = {
  outcome: '내 손동작에 따라 문구와 이미지가 실제로 바뀌는 장면',
  intro:
    '3단계에서 복사한 모델 URL을 행동 연결 사이트에 넣고, 레이블마다 보여 줄 문구와 이미지를 정합니다.',
  steps: [
    {
      title: '모델 URL 연결하기',
      description:
        '3단계에서 복사한 URL을 붙여 넣고 모델을 불러옵니다. O·X·배경 레이블이 나타나는지 확인합니다.',
      screenshots: ['action-runner-model'],
    },
    {
      title: '레이블별 행동 정하기',
      description:
        '각 레이블에 출력할 문구와 이미지를 정합니다. 아래 예시를 그대로 사용하거나 내 말로 바꿔도 됩니다.',
      points: [
        'O → “이해했어요!”',
        'X → “다시 설명해주세요”',
        '배경 → “손동작을 보여주세요”',
      ],
      screenshots: ['action-runner-actions'],
    },
    {
      title: '웹캠으로 결과 확인하기',
      description:
        '손동작을 바꾸며 모델의 판단과 화면의 문구·이미지가 함께 바뀌는지 확인합니다.',
      screenshots: ['action-runner-test'],
    },
  ] satisfies PracticeWorkflowStep[],
}

export const actionExtensions = [
  '음성 안내',
  '화면 색상',
  '게임 캐릭터',
  '다음 문제 추천',
  'LED',
  '모터',
  '로봇팔',
]
