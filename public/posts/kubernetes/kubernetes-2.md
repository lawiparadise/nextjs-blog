---
title: 쿠버네티스에 대해 알아보자 -2
date: '2022-11-02'
---

# 쿠버네티스 어플리케이션 배포 관련
- 사람이 직접 kubectl 실행해서도 됨 근데 좀 에바야
- 자동화 도구인 jenkins, argoCD 등과 같은 CI/CD도구 사용
- 
## CI/CD
- 여러 DevOps 단계를 아우르는 포괄적인 용어
- CI : Continuous Integration. 지속적 통합.
- CD : Continuous Deployment. 지속적 배포.

## DepOps
- dev개발과 ops운영을 합친 단어
- 개발과 운영을 같이 잘하자

## GitOps
- DevOps의 실천 방법 중 하나
- 배포와 운영에 관련된 모든 요소들을 git으로 관리

## ArgoCD
- GitOps스타일의 배포를 지원하는 CD도구
- git에 yaml푸시하면 자동으로 쿠버네티스 클러스터 반영
- 쿠버네티스를 위한 CD 툴