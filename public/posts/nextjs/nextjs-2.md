---
title: nextjs 알아보기 - 2
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

## 데이터를 하나의 page가 아닌 전역에서 사용하기
- https://github.com/vercel/next.js/discussions/10949

## getInitialProps 관련 문제
- local에서 돌릴 땐 _app.tsx의 getInitialProps가 새로고침할 때 마다 실행되나, vercel에 배포 후엔 안 됨
- 그래서 아래 코드를 실행 못해서 쿠키에 있는 theme값을 못 가져옴
- 왜지????????????
- https://github.com/i18next/next-i18next/issues/615
- getInitialPropse를 쓰지 말라고 한다..
- https://9yujin.tistory.com/104
- 가정1. vercel에 배포하면 server에서의 기능을 실행 안해준다
- ex) serversideprops로 가져오는 정보도 안 보여줄 것이다->이건안되지만,
- 가정2. vercel에 배포하면 csr못한다 -> 잘 됨. 이문제는아님
- https://github.com/vercel/next.js/issues/30484
- 음......
- 이거 그대로 netbook에 배포해서 되는지 확인해보기
- dark2로 다시 해보니, 새로고침하면 getInitialProps은 실행되는걸 확인 함
- 단순히, local에서는 cookie를 잘 가져오고, vercel에서는 cookie를 못 가져오는 것 뿐
- 쿠키라이브러리 문제는 아님.
- 그리고, _app.tsx는 getStaticProps나 getServerSideProps를 지원하지 않음...;
- App does not support Next.js Data Fetching methods like getStaticProps or getServerSideProps. If you need global data fetching, consider incrementally adopting the app/ directory.
- 로그찍어본 결과 getInitialProps가 실행은 되나, 브라우저의 쿠키가 getInitialProps로 넘어가지 않음.
- 가정3) vercel에서 url접속은 csr로 돼서, 쿠키전달이 안된다
- 여튼 getInitialProps가 받는 context의 req는 서버only임~!
- npm run start로 해보니, 배포했을때랑 같은 증상임.
- 그냥 npm run dev했을때만 잘 되니까 그 차이인 듯
- 왜 냐 구 요. 이유 아직 못 찾음

### getInitialProps 의 실행 원리
```
https://davidhwang.netlify.app/TIL/(0320)nextjs%EC%97%90%EC%84%9C-next-cookies-%EC%82%AC%EC%9A%A9-%EC%9D%B4%EC%8A%88/  

getInitialProps 는 next page 렌더링 위치에 따라
실행 위치가 달라진다

SSR(브라우저 url 입력, 첫 렌더링 등) : server 에서 실행
CSR(Link component 이동, Router.push(‘url’) 등) : client 에서 실행
위에 SSR과 CSR을 어떻게 확인할 수 있을까?
getIntialProps 의 인자인 ctx 에서
req 존재 여부에 따라 확인 가능하다

ctx.req 가 존재하면 SSR
ctx.req 가 undefined 면 CSR
로 구분할 수 있다
각 실행 위치(SSR, CSR) 에 따라서 cookie 확인 방법도 다르다

SSR 일 경우, server side 에서 cookie 확인 방법
ctx.req 가 존재하므로 req.headers.cookie 를 확인하면 cookie 확인이 가능하다

CSR 일 경우, client side 에서 cookie 확인 방법
ctx.req 가 undefined 이므로
document.cookie 를 확인하면 cookie 확인이 가능하다
```
