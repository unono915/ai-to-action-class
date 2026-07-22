# 1차: 프로젝트 기반 구축 프롬프트

이 저장소는 「판단하는 AI, 움직이는 수업」 80분 교사 연수용 강의 운영 웹사이트다.

먼저 다음 파일을 순서대로 모두 읽고 요구사항을 정리해라.

1. `CLAUDE.md`
2. `docs/00_PROJECT_DECISIONS.md`
3. `docs/01_PRD.md`
4. `docs/02_WIREFRAME.md`
5. `docs/03_IMPLEMENTATION_GUIDE.md`
6. `docs/04_CONTENT_AND_LINKS_SPEC.md`
7. `docs/05_SITE_CONTENT_DRAFT.md`

이번 작업에서는 **1차 기반 구축만** 진행한다. 전체 사이트의 상세 콘텐츠를 한꺼번에 구현하지 마라.

## 구현 범위

1. 빈 저장소를 Vite + React + TypeScript 프로젝트로 구성한다.
2. Tailwind CSS를 설치하고 기본 디자인 토큰을 설정한다.
3. GitHub Pages 배포를 설정한다.
   - Vite base는 `/ai-to-action-class/`
   - GitHub Actions로 main push 시 자동 배포
4. 하나의 주소에서 query parameter로 모드를 전환한다.
   - `?mode=practice`
   - `?mode=present`
   - 기본은 practice
5. query parameter로 8단계 현재 위치를 관리한다.
   - `?step=1`부터 `?step=8`
   - 잘못된 값은 안전하게 보정
   - 브라우저 뒤로가기·앞으로가기 지원
6. 공통 App Shell을 만든다.
   - 고정 헤더
   - 8단계 내비게이션
   - 진행률
   - 모드 전환
   - 도움말·전체 자료 자리
   - 하단 이전·다음
7. 발표 모드와 실습 모드의 시각적 차이를 구현한다.
   - 발표: 큰 글씨, 중앙 집중, 장면 이전·다음 자리
   - 실습: 상세 안내, 완료 기준, 체크박스, 도움말 자리
8. 완료 단계와 마지막 단계는 localStorage에 저장한다.
9. 외부 링크를 `src/data/links.ts`에서 관리한다.
   - Teachable Machine URL 활성
   - 행동 연결 사이트 URL 활성
   - 교과별 아이디어 코치 Gem, Padlet, 예시 모델은 확정 URL로 활성화
   - 행사 설문은 없으므로 구현하지 않음
   - 전체 다운로드처럼 미확정 항목만 pending 처리
10. 8개 단계에 최소 placeholder 콘텐츠를 넣어 레이아웃과 이동이 확인되게 한다.
11. 접근성 있는 시맨틱 HTML과 키보드 focus를 적용한다.
12. README에 설치·개발·배포·링크 수정 방법을 작성한다.

## 이번 단계에서 구현하지 않을 것

- 전체 발표 문구
- 교과별 상세 카드
- Gem 프롬프트 빌더
- Notebook 상세 가이드
- 실제 QR 코드
- 실제 단계별 화면 캡처
- API·서버·DB·인증

## 검증

반드시 다음을 실행하고 오류를 해결한다.

```bash
npm run lint
npm run build
```

가능하면 로컬 preview도 확인한다.

## Git

검증이 모두 성공하면 논리적인 커밋을 만들고 main 브랜치에 push한다.

권장 커밋:

```text
feat: scaffold course hub and GitHub Pages deployment
feat: add shared layout and presentation mode switching
```

## 완료 보고

- 구현 기능
- 주요 파일
- lint/build 결과
- commit hash
- push 결과
- GitHub Pages workflow 상태
- 아직 pending인 링크와 자료
- 2차 작업 권장 사항

작업 중 확정되지 않은 URL이나 콘텐츠를 임의로 만들지 마라.
중대한 차단 문제가 아니라면 질문만 하고 멈추지 말고 문서 기준으로 진행해라.


## 확정 링크와 행사 정보

`docs/00_PROJECT_DECISIONS.md`에 있는 다음 값을 실제 UI에 반영한다.

- 발표자: 경문고등학교 지윤호
- 행사: 2026 AI·디지털러닝 콘페스타
- 날짜: 2026년 7월 24일
- 장소: 마곡 코엑스
- 아이디어 코치 Gem
- Padlet
- 예시 모델
- 행동 연결 사이트

설문은 만들지 않는다.
