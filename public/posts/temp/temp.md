---
title: 'git관련'
date: '2022-07-08'
---

## git 관련 명령어

### 원격 브랜치 삭제
```shell
git push origin --delete <branch_name>
```

### 원격 브랜치 동기화
```shell
git remote prune origin
```

new branch 'preview_test' push to preview test


## boiler plate
boiler는 보일러, plate는 접시인데, 보일러 만들 때 사용하는 판을 의미  
이 판떼기를 맨날맨날 새로 만들지 말고, 만들어진거 가져다 쓰자  

## scaffolding
스캐폴팅 : 뼈대, 초기 프로젝트의 리드미, 디렉토리 구조 등을 자동으로 만들어주는 걸 의미  
React에서도 Create React App 등으로 스캐폴드 지원  

## react와 node 연동
https://codingapple.com/unit/nodejs-react-integration/

## 프록시 서버
nginx가 대세  
엄밀히 nginx는 프록시가 아니라 역프록시다.  
프록시 서버는 클라이언트가 서버에 접속하기 위해 거쳐 가는 과정 중에 있음.  
근데 서버측에서 미리 프록시를 이용하는 경우가 있는데 이를 역프록시(리버스프록시)라고 함.  
내부 네트워크의 서버와 클라를 연결해주는 역할 함, 로드 밸런싱의 역할을 함, 캐시 데이터를 저장할 수 있음.  
