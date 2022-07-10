---
title: nextjs 공식 튜토리얼 따라해보기 - 2
date: '2021-07-01'
---

# [Pre-rendering and Data Fetching]

### pre-rendering
- Next.js는 모든 페이지를 pre-render 함  
- 각 페이지 마다 html을 만듬(client-side js 없이)  
- js끄고([방법](https://developer.chrome.com/docs/devtools/javascript/disable/)), [이 사이트](https://next-learn-starter.vercel.app/) 들어가면 잘 작동 하는 것 확인 가능  
- js없이도 앱 렌더링 되는 걸 볼 수 있다. 왜냐면 Next.js가 미리 렌더링 해서 static한 HTML로 만들어 놓기 때문  
- 내 사이트(localhost:3000)에서도 F12 > ctrl+shift+p > js disable시킨 후 F5하면 html은 다 볼 수 있으나, CSS도 같이 안나오(js가 css 로드해주기 때문)는 것을 볼 수 있음  
- 순수 React앱이었다면 pre-rendering은 없다

### pre none-pre 요약
![](/md-images/nextjs-blog/nextjs-blog-1/images/942e2227.png)
![](/md-images/nextjs-blog/nextjs-blog-1/images/4a02225c.png)


## pre-rendering에는 2가지 방식이 있다
- static generation
- server-side rendering

static generation에서는 *next build*하면 build time 중에 HTML이 만들어지고, client가 request할때마다 재사용된다.  
server-side rendering에서는 client가 요청할때마다 HTML이 만들어진다.   
*단, dev모드(npm run dev)에서 모든 page는 each request마다 pre-rendered된다(static generation이라 할지라도) > 개발 편의성을 위해서
*또한 각 page별로 5개는 static generation, 1개는 server-side rendering 이렇게도 가능하다. 

```shell
npm install gray-matter
npm install remark remark-html
npm install date-fns
```

## 중간 정리
getStaticProps와 getStaticPaths는 서버사이드에서 돌아간다.  
따라서, client-side에서는 사용이 불가능하다.

블로그는 SSG나 SSR을 이용하는게 맞고  
웹앱은 CSR이나 SPA를 이용하는게 맞다  
(엄밀한 개념은 아니다)  
SSG랑 SSR 둘을 구분하자면  
SSG는 사용자와의 상호작용이 거의 없고, 빌드 때 다 만들어진걸 보여주기만 할 때  
SSR은 사용자가 현재 온도를 보여달라고 하면 보여달라고 할 때마다 온도를 가져와야하니까  
네이버는 SSG 또는 SSR

SPA는 앱처럼 보여주고 싶을 때 사용

인스타그램은 CSR 또는 SPA

유저 대시보드를 만든다면 CSR

굳이 SEO 적용 또는 데이터 pre-rendering이 필요 없다면 CSR 방식
정적 문서로 충분한 화면이면서 빠른 HTML 문서 반환이 필요하다면 SSG 방식
매 요청마다 달라지는 화면이면서 서버 사이드로 이를 렌더링 하고자 한다면 SSR 방식


## When to Use Static Generation v.s. Server-side Rendering
가능한한 static generation을 선호한다. 왜냐면 page가 한 번에 built되고, CDN으로 served 가능하여, server-side rendering보다 빠르다.  
SG 이요 가능한 것 :  
- marketing pages
- 블로그
- e-commerce product listings
- help and documentation

page가 빈번하게 data를 업데이트하거나 page의 content가 client 요청마다 바뀔 때엔 비추  


## Static Generation with and without Data
지금까진 외부 데이터 fetching이 필요 없었는데, 앞으로는 쓸거임   
build time에 file system으로부터, 외부api로부터 db로부터 데이터를 가져오고, 이걸 HTML에 쓸거임  
이 때 사용하는게 바로바로 **getStaticProps**  
_Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!_  
*dev모드에서 getStaticProps는 each request마다 실행 됨  


## getStaticProps Details
getStaticProps only runs on the server-side이고, 절대 client-side에서 실행되지 않기 때문에, db접근이나 api가져오는게 가능하다.  

### What If I Need to Fetch Data at Request Time?
Static Generation is not a good idea  
In cases like this, you can try Server-side Rendering  

## Fetching Data at Request Time
이제 server-side rendering 하면 됨. 이 때 getServerSideProps가 사용 됨  

```javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```
parameter 'context'가 요청 parameter를 담고 있음  
request 시 data가 fetch되어야 하는 경우에만 사용해야 함  

### Client-side Rendering
data를 pre-render할 필요가 없을 때 사용 함  
외부 데이터 요청 없이 page만든 다음, page가 load되고 나서 외부 데이터를 client-side에서 가져 옴  
user dashboard 등에 사용 됨. 왜냐면 dashboard는 private하고, user-specific하고, SEO 필요없기 때문  
또한 data가 자주 update됨.  

SWR을 사용하면 됨  
```javascript
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```
