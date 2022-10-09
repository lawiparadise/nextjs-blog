---
title: 회원가입 대해 알아보자 - 1
date: '2022-10-02'
---
# 회원가입은 어떻게 하는게 좋을까?
다양한 회원가입 방식이 있음
1. id, ps 잘 안 씀
2. id, ps, 찾기 수단(email, 폰 번호 등). 인증x
3. id, ps, 핸드폰번호, 핸드폰번호로 인증번호 
4. id, email, ps, email로 인증코드 or url
5. email, ps 잘 안 씀
6. email, ps, email로 인증번호, 인증번호를 앱에서 입력 
7. email, ps, email로 url보내기 
8. email, ps, 핸드폰번호, 핸드폰번호로 인증번호 
9. 핸드폰 번호, 핸드폰 번호로 인증번호 
10. 핸드폰 번호, ps, 핸드폰 번호로 인증번호 
11. OAuth로 SNS 로그인

## 회원가입에 필요한 내용들
- 아이디
- 비밀번호
- 이메일
- 전화번호
- 이름, 생년월일, 성별
- 닉네임

### 1번의 경우
- 내부 ERP시스템 등에서 사용

### 2번의 경우
- 자사몰 등 굳이 개인 식별이 필요 없을 때 사용
- 구글도 이 방식임
- 디바이스마트도.
- 아이디 찾기는 가입 시 입력한 이메일, 휴대폰 등
- 비번 찾기는 이름, 아이디, 이메일(or 휴대폰)

### 3번의 경우
- 폰 번호로 개인 식별하기 때문에
- 번호가 바뀔 때의 개인 식별 방식에 대한 구현이 필요
- 보통은 문자 전송 시 문자 전송 api서비스를 이용 이용함(twilio, 네이버, 다음)

### 4번의 경우
- 다른 사용자가 주로 쓰는 이메일로 누가 먼저 가입해버리면 문제 생김
- 내가 비밀번호를 찾고 싶어서 비밀번호 복구 요청하면, 다른 사용자의 이메일로 링크가 전송 됨
- 그래서 비번 못 찾음
- 이메일을 id로 쓸거면, 그 이메일을 인증하도록 조치가 꼭 필요 함

## 토스의 경우
- 이름, 주민번호(뒷1자리까지만), 핸드폰 인증, 비밀번호(4자리+알파벳1개)
- 1인 1계정 원칙인 듯
- 8번에 속함. 폰번호로 개인 식별, ps있음
- 가장 시스템이 잘 되어있는 듯

## 구글의 경우
- 2번에 속함
- https://support.google.com/accounts/answer/1733224?hl=ko
- id, ps, 성이름, 생일
- 복구용 선택 : 전화번호, 복구용 이메일
- 선택 : 성별
- id 찾기 : 전화번호 or 복구용 이메일 입력해야 함
- ps 찾기 : 마지막으로 사용한 것 같은 비번 입력,  
  다른 기기에서 로그인된 것으로 확인

## jlcpcb의 경우
- username(id, 중복불가), email, ps
- 이메일 링크로 인증 함
- 로그인 시 id(or email)와 ps로 로그인 함
- id찾기 기능이 아예 없음

## 테이블링의 경우
- 이메일, 닉네임, 비밀번호, pass본인인증
- id찾기 기능이 없음
- id찾기 없는 애들은 아마 고객센터 문의한다음, 등록한 핸드폰 번호 등으로 찾지 않을까나

## 핸드폰 번호로 인증하는건 폰 번호 바뀌면 어떻게 함?
3번, 8번, 9번의 경우 핸드폰 번호로 인증 함
3번 : id, ps, 핸드폰번호, 핸드폰번호로 인증번호
- 회원 가입할 땐 문제가 없음
- 회원가입 이후, 잘 사용하고 있고, 로그인되어 있다면, 번호 인증 다시 받는 것으로 번호 쉽게 바꿀 수 있음
- 잘 사용하지 않아서 앱을 삭제했고, id나 ps가 기억나지 않는 상태에서 핸드폰 번호까지 바뀌었다면?
- 고객센터에 전화해서 이전 번호말해서, 그 번호로 등록되어있는게 있는지 확인해야 할 듯

## 이메일 찾기 기능은?
- 회원 정보를 email, ps만 가지고 있다고 할 때, 이메일을 어떻게 찾아주냐?
- 고객센터 문의를 통해 자기 이메일 같은거 전부 말해보라 하기
- 고객id가 kiwidori123@gmail.com이라면, kiwidori를 고객한테서 키워드로 받아서 db검색
- 이후, 123이나 gmail.com을 알려주기
- 근데, 그 본인의 id가 맞는지 확인이 필요 함. 이건 또 개인정보때문에 문제가 됨
- 만약, 해커가 해킹하려고 물어보는거라면??

## 핸드폰 번호를 key값으로 회원가입 하면 문제가 됨
- https://gilhwan.com/entry/휴대전화번호가-최악의-회원가입-수단인-이유
- 9번과 10번에 해당
- 다만, 핸드폰을 이용해서 본인인증으로 개인 식별 데이터를 보유하면 괜찮음

## 결론
- 이메일 인증으로 하는게 가장 비용이 적음
- 번호 인증할 경우 1건 당 약 10원, 10만명==100만원
- 2.다만, 앱 사용할 땐 번호 인증해서 문자파싱하는게 편하긴 함
- 1.이메일 회원가입보다 SNS로그인이 제일 편한 방법임
- 3.우리는 이메일 인증으로 하고, 복구용 번호를 미리 받아놓기