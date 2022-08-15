---
title: git-flow 알아보기
date: '2022-08-07'
---

# git-flow 방법론

## 5개 브랜치 사용(4개도 됨)
- main : 배포용 브랜치
- develop : 개발 브랜치, 이 브랜치를 기준으로 merge
- feature : 단위 기능 개발 브랜치, 만들면 develop 브랜치에 PR보냄
- release : 배포를 위해 main으로 보내기전에 QA하기 위한 브랜치
- hotfix : main 브랜치에 배포했는데 버그 생기면 긴급 수정하는 브랜치

![](.git-flow_images/bba8247c.png)

## 순서
1. main 브랜치 만들기
2. develop 브랜치 만들기
3. feature_enhancement 브랜치 만들고, 코드 짜고, feature_enhancement -> develop 브랜치에 PR날리기
4. develop 브랜치에서 PR받고, develop -> release 브랜치로 넘기기
5. QA진행하고, release -> main 브랜치로 버전명으로 PR보내고, git pull 받아서 서버에 적용하기