---
title: apollo에 대해 알아보자 - 1
date: '2022-10-05'
---

# apollo란?
- graphql의 클라이언트 라이브러리라네. db잘 가져다 쓸 수 있는 라이브러리인가?
- 클라랑 서버 둘 다 유용한 듯 함.
- apollo로 graphql 잘 쓸 수 있음

## 강의 추천
- [얄코 강의 좋음](https://www.youtube.com/watch?v=9BIXcXHsj0A)

장점
- query 및 mutation 직접 전송
- query를 통해 받은 데이터 자동 캐싱
- local state 관리

## apollo client 사용하기
```shell
npm i @apollo/client
```

## apollo server 사용하기
[간단히 apollo server 구축](https://velog.io/@ryong9rrr/Apollo-server-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)

```shell
mkdir apollo-server
cd apollo-server
npm init -y
npm install apollo-server graphql
```

server.js
```shell
const { ApolloServer, gql } = require("apollo-server");

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

package.json
```shell
"scripts": {
    "dev": "node server.js"
  },
```

```shell
npm run dev
```

## apollo server버전 차이
- v2.19.0에서는 플레이그라운드 바로 뜨는데,
- v3.10.2에서는 ready to explore your graph 뜨고, stuio로 넘어감
- v3.10.2에서는 studio로 가서, 로그인 후 publish할 수 있음 

## apollo query, mutation
- 가져올 땐 query
- 바꿀 땐 mutation

## apollo server의 인자 2개
- typeDef : graphql 명세에서 사용도리 데이터, 요청의 타입 지정
- resolver : 요청에 따라 데이터를 반환, 입력, 수정, 삭제