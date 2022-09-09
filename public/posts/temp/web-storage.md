---
title: 'local storage, session storage'
date: '2022-09-08'
---

# 웹의 2가지 스토리지

## session storage
크롬에서 탭을 3개 띄우면 각각의 탭에는 각각의 세션 스토리지가 있는거.  
탭 닫으면 세션 스토리지도 종료되어 데이터 없어짐  
새로 고침하면 남아 있음

## local storage
오리진(domain/port/protocol)만 같다면 url경로가 달라도 공유 됨  
근데 같은 오리진인데 시크릿 모드로 접속하니까 공유 안 됨
크롬 종료해도 데이터 남아 있음

## 쓰는 법
```javascript
localStorage.setItem('test', 1)
localStorage.getItem('test')
```
