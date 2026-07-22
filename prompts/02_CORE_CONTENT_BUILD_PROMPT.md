# 2차: 핵심 콘텐츠와 실습 기능 구현 프롬프트

1차 기반 구축 결과를 먼저 점검하고 `npm run lint`, `npm run build`가 통과하는지 확인해라.

그다음 `CLAUDE.md`와 `docs/`의 모든 문서를 다시 읽고 다음 기능을 구현한다.

## 구현 범위

1. `docs/05_SITE_CONTENT_DRAFT.md`의 실제 한국어 문구를 반영한다.
2. 시작 화면:
   - 메인 이미지 placeholder
   - 오늘의 결과물
   - 준비 체크
   - 발표·실습 모드 시작
3. 사례 나눔:
   - 9개 발표 장면
   - 이전·다음
   - 키보드 이동
   - 발표자 메모
   - 타이머
   - 전체 화면
4. Teachable Machine 실습:
   - O / X / 배경
   - 단계별 지금 할 일·완료 기준·주의·오류 해결
   - Teachable Machine 새 탭 열기
   - 테스트 미션
   - 파일 업로드 선택 확장
5. 행동 연결:
   - 실제 주소 `https://unono915.github.io/teachable_agent/`
   - 내보내기·모델 URL·레이블별 텍스트·이미지 설정 안내
   - 완료 체크
   - 확장 사례
6. 교과별 확장:
   - 이미지·자세·음성 필터
   - 교과별 사례 카드
   - 상세 정보
   - 확정된 아이디어 코치 Gem·Padlet·예시 모델 버튼
7. Gem 프롬프트 빌더:
   - 교과·학년·개념·핵심 요소·오개념·첫 질문·마지막 산출물·말투
   - 프롬프트 생성
   - 복사
   - 예시
   - 초기화
   - localStorage 저장
   - 일반 Gemini 또는 Gems 열기 버튼은 확정된 공식 URL만 사용하거나 pending 처리
8. 자료 기반 Gem:
   - 선택 심화
   - 자료 기반 지침 복사
   - 계정별 기능 차이와 환각 주의 문구
9. 공유와 마무리:
   - 실천 계획 입력
   - 확정 Padlet
   - 설문 기능 없음
   - 전체 자료 목록
10. 도움말:
   - 웹캠
   - Teachable Machine
   - 모델 내보내기
   - 행동 연결
   - Google 로그인
   - Gem
   - Notebook

## 콘텐츠 규칙

- 문서에 없는 사실·링크·학생 인용을 만들지 않는다.
- 확정된 Gem·Padlet·예시 모델·행동 연결 주소를 사용한다.
- 미확정 전체 다운로드만 pending으로 유지한다.
- 행사 설문은 만들지 않는다.
- 외부 이미지를 임의로 다운로드하지 않는다.
- 자산이 없으면 교체 가능한 placeholder를 사용한다.
- 한국어 문구를 자연스럽게 유지한다.
- 개인정보 입력 금지 안내를 포함한다.

## 품질

- 노트북 화면 1280px 우선
- 1024px, 768px, 375px에서도 깨지지 않게 한다.
- 키보드 접근과 focus를 확인한다.
- 복사 실패 fallback을 제공한다.
- 브라우저 뒤로가기와 새로고침 후 상태를 확인한다.

## 검증과 Git

```bash
npm run lint
npm run build
```

성공 후 main에 commit/push한다.

권장 커밋:

```text
feat: add workshop content and guided practice flows
feat: add subject examples and Gem prompt builder
```

완료 보고에는 구현 결과, 검증, commit, push, pending 자료를 포함한다.


## 메인 이미지

사용자가 생성한 최종 이미지를 `public/assets/hero/main-hero.png`에 넣으면 즉시 사용되도록 구현한다.
개발 시 파일이 아직 없으면 CSS placeholder를 사용하고 깨진 이미지가 나타나지 않게 한다.
