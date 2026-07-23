// 실제 수업 「이미지 분류 모델로 프로그램 움직이기」(2026-06-05, 고1 연구수업)
// 현장 사진. 발표자 본인이 촬영해 제공했다. 웹 변환 시 EXIF(GPS 등)는 제거했다.
// 공개 사이트 게시이므로, 얼굴이 식별되는 사진은 초상권 동의 확인이 필요하다.

export type ClassPhotoId =
  | 'class-opening'
  | 'class-wide'
  | 'class-data-collection'
  | 'class-action-test'
  | 'class-play'
  | 'class-padlet'

export type ClassPhoto = {
  id: ClassPhotoId
  file: string
  alt: string
}

export const classPhotos: Record<ClassPhotoId, ClassPhoto> = {
  'class-opening': {
    id: 'class-opening',
    file: 'class-opening.webp',
    alt: '컴퓨터실에서 교사가 전자칠판에 띄운 「이미지 분류 모델로 프로그램 움직이기」 표지 앞에서 수업을 여는 모습. 학생들은 뒤에서 화면을 보고 있다.',
  },
  'class-wide': {
    id: 'class-wide',
    file: 'class-wide.webp',
    alt: '참관 교사들이 뒤편에 앉은 공개 연구수업 전경. 학생들이 컴퓨터 앞에 앉아 전자칠판을 보고 있다.',
  },
  'class-data-collection': {
    id: 'class-data-collection',
    file: 'class-data-collection.webp',
    alt: '학생들이 Teachable Machine 학습을 위해 웹캠 앞에서 손동작(엄지척·브이 등)을 지어 이미지 데이터를 수집하는 모습.',
  },
  'class-action-test': {
    id: 'class-action-test',
    file: 'class-action-test.webp',
    alt: '전자칠판에 행동 연결 사이트가 크게 띄워져, 웹캠 예측 결과에 따라 “집에 가고 싶다” 문구와 이미지가 출력되는 장면을 학생들이 함께 보는 모습.',
  },
  'class-play': {
    id: 'class-play',
    file: 'class-play.webp',
    alt: '전자칠판의 행동 연결 사이트에서 학생이 손동작을 지어 보이자 모델이 예측하고 그에 맞는 문구·이미지가 출력되는 장면.',
  },
  'class-padlet': {
    id: 'class-padlet',
    file: 'class-padlet.webp',
    alt: '학생들이 자기 진로·관심 분야의 이미지 분류 아이디어를 모둠별로 Padlet에 올리고 서로 댓글과 좋아요로 의견을 나눈 화면.',
  },
}

export function classPhotoUrl(id: ClassPhotoId): string {
  return `${import.meta.env.BASE_URL}assets/class/${classPhotos[id].file}`
}
