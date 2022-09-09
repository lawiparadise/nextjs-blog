---
title: 'jwt'
date: '2022-09-08'
---

# jwt 토큰의 안전한 사용

## XSS(cross site scripting)
XSS는 js코드 실행해서 정보 빼 감

## CSRF(cross site request forgery)
사용자가 로그인된 상태에서 이상한 링크 클릭하면 req를 보내서 이상한 글 작성하게 함

## jwt를 어디에 저장할까?
- localStorage에 저장
- cookie에 저장

localStorage에 저장하면 js를 사용해야 req에 jwt가 담기기 때문에, CSRF는 못 함  
근데 해커의 js로 localStorage에 접근하면 내 정보 뺏김

cookie에 저장하는 경우 httpOnly 옵션키면 js로 쿠키 접근 불가  
근데 