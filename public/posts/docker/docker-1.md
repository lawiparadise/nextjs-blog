---
title: docker 기초 -1
date: '2022-10-19'
---

# docker란?
- 컨테이너 어쩌구

## docker-compose
- 여러 개의 컨테이너로 이루어진 서비스를 구축, 실행하는 순서를 자동으로 간단히 관리
- 도커 컴포즈는 여러 컨테이너들을 한 네트워크 안에다가 배포할 수 있다는 점에서 쿠버네티스랑 비슷 함
- 네트워크 인터페이스도 구현해서 쓸 수 있음(내부망 비슷하게 씀)

## docker-compose.yaml
- services안에 각각의 컨테이너를 만든다
- docker-compose up으로 전체 컨테이너 실행한다

## 실행
- `docker-compose up`하면 됨
- `ERROR: Windows named pipe error: 파이프가 끝났습니다. (code: 109)` 에러 나면
- 이상하게 .graphqlrc의 쌍따옴표 없애면 에러가 안 남
- 쌍따옴표가 그 표준 쌍따옴표가 아니라서 그런가? > 아님
- 근데 또 쌍따옴표 때문에 나는 에러가 아닌 듯도 함

## 기타 등등
- ports: -1234:5678 1234를 5678로 포트포워딩 느낌
- volumes: data:/var/lib/abc 왼쪽이 로컬, 오른쪽이 도커에서 마운트 되는 곳