---
title: nx 등 모노레포 구성에 대해 -1
date: '2022-10-12'
---

# nx란?
- 모노레포 구성을 위한 다양한 개발 도구를 제공 함
- ws생성 시 cypress도 만들어 줌
- react, express, nest도 지원

## cypress란?
- js end to end testing framework
- 유저와 최대한 비슷한 환경으로 테스트 가능한 E2E테스트
- 안정성과 성능이 좋음

## nx 공부하기
- https://nx.dev/react-tutorial

## 모노레포란?
- 두 개 이상의 프로젝트(모듈일수도)가 하나의 git으로 관리 됨
- 각각의 프로젝트는 여전히 각각의 프로젝트로 존재하지만, 하나의 git으로 관리되고
- 데브옵스도 한 개인듯. 하나의 데브옵스를 사용하니까, 새 플젝 생성도 쉬움

## 멀티레포란?
- 각 프로젝트(모듈)마다 각자 각각의 git으로 관리 됨
- 자율성이 높음. 개발 라이프사이클 스스로 결정
- but, 관리 포인트 증가 함
- 플젝마다 코드가 달라지고, 중복 코드 생기고, 업데이트 문제 등

## 모노레포 구축 도와주는 도구
- Lerna
- yarn
- npm
- **nx**
- pnpm

## nx 폴더 구조
- apps : 플젝들 위치
- libs : 공통 사용 코드 위치
- tools : 개발에 필요한 tooling script 위치

## nx 스타트
```shell
npx create-nx-workspace@latest
Workspace name (e.g., org name)     myorg
What to create in the new workspace react
Application name                    todos
Default stylesheet format           CSS
npx nx serve todos
```

