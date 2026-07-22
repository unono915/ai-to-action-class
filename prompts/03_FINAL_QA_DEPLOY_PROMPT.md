# 3차: 최종 QA와 배포 검증 프롬프트

현재 저장소의 구현 상태와 문서를 모두 검토하고 최종 강의 운영에 사용할 수 있도록 QA를 진행한다.

## 1. 기능 점검

- 기본 URL
- `?mode=practice`
- `?mode=present`
- `?step=1`부터 `8`
- 잘못된 query fallback
- 뒤로가기·앞으로가기
- 새로고침
- 완료 체크 localStorage
- 프롬프트 빌더 저장
- 외부 링크 새 탭
- 확정 Gem·Padlet·예시 모델 링크 활성
- 미확정 전체 다운로드 링크만 비활성
- 복사 성공·실패 안내
- 발표 키보드 이동
- 타이머
- 전체 화면 fallback

## 2. 반응형 점검

- 1440px
- 1280px
- 1024px
- 768px
- 375px

가로 스크롤과 잘림을 제거한다.

## 3. 접근성

- 시맨틱 landmark
- heading 구조
- aria-current
- label 연결
- focus 표시
- 색상 외 상태 표시
- 아이콘 버튼 이름
- 진행률 텍스트
- alt
- aria-live

## 4. 콘텐츠 검수

- 수업 철학이 먼저 드러나는가
- 모델 훈련과 행동 설정이 구분되는가
- AI 판단의 한계가 포함되는가
- 교과 사례에 레이블·데이터·행동·유의점이 있는가
- 자료 기반 Gem을 무오류라고 표현하지 않는가
- 확정 링크가 올바른가
- 행사 설문을 만들지 않았는가
- 미확정 링크를 임의로 만들지 않았는가

## 5. 배포

- `vite.config` base 확인
- Pages workflow 확인
- `npm ci` 기준 lockfile 확인
- production build
- main push
- GitHub Actions 상태 확인
- 가능하면 실제 Pages URL 접속 확인

## 6. 문서

README에 다음을 보완한다.

- 개발 실행
- 빌드
- 배포
- 링크 수정
- 콘텐츠 수정
- 이미지 교체
- 발표 모드 사용법
- 실습 당일 체크리스트
- pending 자료 목록

## 7. 검증

```bash
npm run lint
npm run build
```

테스트가 있으면 함께 실행한다.

모든 오류를 해결한 뒤 commit/push한다.

권장 커밋:

```text
fix: finalize responsive and accessible workshop experience
chore: complete deployment and operating documentation
```

최종 보고:

- 실제 배포 URL
- GitHub Actions 결과
- commit hash
- 남은 수동 작업
- 강의 당일 사용 순서
- 발견된 제한 사항
