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

## jwt를 공부해보자
- secretKey가 있어야 똑같은 jwt를 만들어 낼 수 있음
- secretKey가 다르면, 같은 payload라도 jwt가 달라짐
- 따라서, 해커가 secretKey를 모른다면 payload만을 바꿔서 다른 사용자의 정보를 알아낼 수 있는 jwt를 만들 수 없음
- 