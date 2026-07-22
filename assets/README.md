# 자산 폴더 안내

최종 개발 전 아래 자산을 이 폴더 또는 저장소의 `public/assets/`에 추가합니다.

## 권장 구조

```text
public/assets/
  hero/
    main-hero.webp
  screenshots/
    teachable-machine-start.webp
    teachable-machine-labels.webp
    teachable-machine-train.webp
    teachable-machine-export.webp
    action-runner-model-url.webp
    action-runner-label-actions.webp
    gem-create.webp
    notebook-knowledge.webp
  backup/
    hand-o-images.zip
    sample-prompts.txt
```

## 아직 없는 자산

- 최종 메인 이미지: 생성 후 `public/assets/hero/main-hero.png`에 저장
- Teachable Machine 단계별 캡처
- 행동 연결 사이트 단계별 캡처
- Gemini Gems 제작 캡처
- Notebook 연결 캡처
- 예시 모델 링크
- 수업 사진

자산이 없을 때 Claude Code는 외부 이미지를 임의로 가져오지 않습니다.
의미 있는 CSS placeholder와 파일 교체 위치를 제공합니다.


## 확정된 메인 이미지 저장 경로

```text
public/assets/hero/main-hero.png
```

Claude Code는 이 파일이 존재하면 홈 hero와 발표 표지에 사용합니다.
존재하지 않으면 교체 가능한 CSS placeholder를 사용합니다.
