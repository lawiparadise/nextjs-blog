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

