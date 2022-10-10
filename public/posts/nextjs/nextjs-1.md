---
title: nextjs 알아보기 - 1
date: '2022-10-05'
---

# nextjs

## nextjs 구조 중 _app.tsx
- 모든 페이지에 적용되는 top-level 컴포넌트임
- 모든 페이지에 공통으로 적용할 속성을 관리 함
- 구조가 항상 `Component`와 `pageProps를` 받고, 
- `return <Component {...pageProps} />`를 반환 함
- Component는 요청한 페이지가 됨
- http://localhost:3000/home에 접속하면, Component는 home 컴포넌트가 됨
- getStaticProps와 getServerSideProps를 통해 데이터를 불러올 수 없음
- 
## nextjs 구조 중 _document.tsx
- _app 다음에 실행 됨
- 공통으로 head나 body에 적용 될 것들 적어 놓음
- 폰트 넣어 놓음(근데 나는 `styles/global.css`에 넣어 놓음)
- getStaticProps와 getServerSideProps를 통해 데이터를 불러올 수 없음

## swr vs usestate
- nextjs에서 data-fetching을 할 때 3가지 있음. static, sever-side, client-side
- nextjs는 기본적으로 static과 server-side가 우선임.
- nextjs에서 react처럼 대시보드 만들어서, 데이터가 바뀌는거 하고 싶으면 client-side로 해야 함
- 이 때 swr을 쓰거나 useState를 쓴다. 근데, swr을 쓰도록 하자. 퍼포먼스거 더 좋단다.
- https://javascript.plainenglish.io/why-you-should-use-useswr-instead-of-usestate-when-calling-apis-8b6de5dc18fc
- 


## 버전 문제 관련
- 굳이 next프로젝트가 아니더라도, react나 여튼 node프로젝트에서는
- 버전이 달라지면서 에러가 뜨는 경우가 심심치 않게 나타난다..........
- 진짜 후......... 
- Error: You must `await server.start()` before calling `server.createHandler()`
- Warning: Failed prop type: The prop `rows` of `ForwardRef(TextField)` is deprecated. Use `minRows` instead
- 버전 문제인지 아닌지 잘 분간도 안되는 문제들..
