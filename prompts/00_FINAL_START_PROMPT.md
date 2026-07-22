# Claude Code 최종 개발 착수 프롬프트

이 저장소는 2026 AI·디지털러닝 콘페스타의 80분 교사 연수
「판단하는 AI, 움직이는 수업」을 위한 강의 운영 웹사이트다.

작업을 시작하기 전에 아래 파일을 순서대로 모두 읽어라.

1. `CLAUDE.md`
2. `docs/00_PROJECT_DECISIONS.md`
3. `docs/01_PRD.md`
4. `docs/02_WIREFRAME.md`
5. `docs/03_IMPLEMENTATION_GUIDE.md`
6. `docs/04_CONTENT_AND_LINKS_SPEC.md`
7. `docs/05_SITE_CONTENT_DRAFT.md`
8. `docs/06_ASSET_SPEC.md`

그다음 `prompts/01_FOUNDATION_BUILD_PROMPT.md`의 1차 기반 구축을 수행해라.

## 반드시 실제로 반영할 확정 정보

- 저장소: `https://github.com/unono915/ai-to-action-class`
- GitHub Pages base: `/ai-to-action-class/`
- 발표자: 경문고등학교 지윤호
- 행사명: 2026 AI·디지털러닝 콘페스타
- 날짜: 2026년 7월 24일
- 장소: 마곡 코엑스
- Teachable Machine: `https://teachablemachine.withgoogle.com/`
- 예시 모델: `https://teachablemachine.withgoogle.com/models/Hf9Rr15V_/`
- 행동 연결 사이트: `https://unono915.github.io/teachable_agent/`
- 교과별 아이디어 코치 Gem:
  `https://gemini.google.com/gem/1PQ9e5qigzqBHQc04XO2xNKv4jzIoqh1N?usp=sharing`
- Padlet:
  `https://padlet.com/yoonhojiji/padlet-j7bdyn43y5vnqaew`
- 행사 설문: 없음. 설문 버튼이나 placeholder를 만들지 마라.

## 메인 이미지

최종 이미지 파일의 예정 경로는 다음과 같다.

```text
public/assets/hero/main-hero.png
```

파일이 아직 없으면 의미 있는 CSS placeholder를 사용한다.
깨진 이미지 아이콘이 보이면 안 된다.
이미지 파일이 나중에 추가되면 코드 변경 없이 자동으로 표시되게 구성한다.

## 이번 작업 범위

이번에는 1차 기반 구축만 수행한다.

- Vite + React + TypeScript
- Tailwind CSS
- GitHub Pages 자동 배포
- 하나의 주소에서 발표·실습 모드 전환
- `?mode=`와 `?step=` 상태
- 8단계 공통 레이아웃
- 진행률
- localStorage
- 확정 외부 링크 데이터
- 도움말·자료 영역 placeholder
- 접근성 기본
- README

전체 강의 콘텐츠, 교과 카드, 프롬프트 빌더를 한 번에 완성하려 하지 마라.
그것은 2차 프롬프트에서 진행한다.

## 검증과 Git

반드시 다음을 실행하고 오류를 해결한다.

```bash
npm run lint
npm run build
```

성공하면 main 브랜치에 commit하고 push해라.

완료 보고에는 다음을 포함한다.

1. 구현 기능
2. 주요 파일
3. lint/build 결과
4. commit hash
5. push 결과
6. GitHub Actions 또는 Pages 상태
7. 아직 필요한 이미지·캡처
8. 2차 개발 권장 사항
