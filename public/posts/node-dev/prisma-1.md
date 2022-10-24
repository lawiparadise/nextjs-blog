---
title: prisma해보기 - 1
date: '2022-10-07'
---

# prisma란?
- nodejs랑 ts를 위한 ORM
- JDBC나 SQLAlchemy 같은 애임
- 좋다고 함.

## 사용하기
https://www.youtube.com/watch?v=PWuvaxa78kw
```shell
npx create-react-app aa
npm i
npx prisma init
npx prisma migrate dev
npx prisma studio
npm run dev
```
- 만약, ```prisma @prisma/client```가 안생기면 직접 만들어줘
```shell
npm install prisma @prisma/client
```

- init하면 prisma 폴더랑, .env파일 생김
- .env파일 가서 DATABASE_URL="postgresql://id:ps@localhost:5432/db?schema=myschema"
- 요렇게 바꾸자
- 그리고, ```schema.prisma```가서 model 만들어줘

## 버전 에러
- node v16.17.1로 하면 [에러 남](https://github.com/prisma/prisma/issues/14834)
- node v16.15.1로 하자

## prisma vs hasura
- graphql 엔진
- graphql api로 쓸 수 있음. 얘가 api서버처럼 작동
- prisma는 서버에 붙여서 씀
![](.prisma-1_images/b5ce351a.png)

## hasura
- ㅇㅇ

## hasura 사용하기
- 커스텀 헤더 쓰려면 앞에 `x-hasura-`를 붙여야 함
- 근데 굳이 헤더 건드릴 필요는 없음
- jwt토큰도 됨. `authorization` 이러면
- DATA > Permissions에서 토큰으로 권한 줄 수 있음
- REST로 바꿔서 외부 api제공도 가능

## hasura database
- `스키마명_테이블명`으로 접근 `test_sample`

## relation
- 포린키 베이스, gql 베이스
- 무결성이 항상 지켜지는 보장이 없다거나, 외부 영향 많이 받는 테이블은 포린키 쓰고싶지 않아

## actions
- 비지니스로직 처리를 위해 웹 훅을 보내는거

## hasura cli
- https://hasura.io/docs/latest/hasura-cli/commands/hasura_console/
- `hasura console`로 실행하면
- db table만드는게 metadata랑 migrations에 기록 됨
- 그래서 기록 남기려면 이걸로 들어가서 해라
- `hasura deploy`
- `hasura metadata`
- `hasura metadata diff` // 1:14
- `hasura clear`

## hasura
- pg dump

## postgres 
- schema 사이에서는 쿼리가 되고
- database 사이에서는 조인 등의 쿼리가 안 됨
