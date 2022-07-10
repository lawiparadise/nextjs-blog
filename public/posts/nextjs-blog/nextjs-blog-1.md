---
title: nextjs 공식 튜토리얼 따라해보기 - 1
date: '2021-07-01'
---
# next.js 설치, gh 배포, 업데이트까지

## 만들고 싶은 레이아웃

[Adobe Experience League](https://experienceleague.adobe.com/docs/target/using/experiences/vec/visual-experience-composer.html?lang=ko)

## 공식 튜토리얼

[공식 튜토리얼](https://nextjs.org/learn/basics/create-nextjs-app)

# [Create a Next.js App]

## webpack이란?

여러개의 파일을 하나의 파일로 합쳐주는 번들러(bundler)
![](/md-images/nextjs-blog/nextjs-blog-1/images/722c1b4e.png)
[웹펙에 대해 - 1](todo)  


![](.nextjs-blog-1_images/bfdd29ac.png)

왜 합쳐야 되지?

## 번들이란?

## 리액트로 웹 어플리케이션을 만들려면??

- 코드가 웹팩같은 번들러로 묶이고, 바벨같은 컴파일러로 컴파일 되어야 한다
- 코드 분할(SPA 성능 향상을 위함)과 같은 최적화가 필요
- SEO를 위해 몇 페이지를 pre-render해야 함(또 너는 SSR이나 CSR을 원할수도 있음을 고려해야 해)
- 너는 리액트앱에서 db에 접근 가능한 SSR코드를 작성할 수도 있음 고려해야 해

## 이런 문제를 해결하는게

### 바로 Next.js:React Framework

넥스트 좋지? 또 뭐가 되나면

- 직관적인 페이지 기반 라우팅 시스템(다이나믹 라우트 포함!)
- 프리렌더링, SSG, SSR 가능
- 빠른 페이지 로드 속도를 위한 자동 코드 분할
- 최적화된 프리패치된 CSR
- CSS, SASS 기본 탑재 어떤 CSS-in-JS 라이브러리 사용 가능
- API routes endpoints 사용 가능
- 확장 가능

### Node.js 버전 10.13보다 높아야 함

```shell
node --version # v14.16.0
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
cd nextjs-blog
npm run dev
```

# [Navigate Between Pages]

## Link와 a의 차이

Link는 클라이언트 사이드 네비게이션을 가능하게 함. 뭐가 다르냐면, F12 눌러서 개발자 도구로 백그라운드를 노랑으로 변경한다음
a를 눌러 다른 페이지로 이동하면 흰색으로 다시 돌아오는 반면,
Link를 눌러서 다른 페이지로 이동하면 노랑을 유지 함.

## code splitting and prefetching

Next.js 는 자동으로 코드분할해줘서 각 페이지가 필요할때만 로드 됨
그래서 페이지가 100개 있어도 빠름

# [Assets, Metadata, and CSS]

- static files 다루기
- \<head>
- global CSS
- public 폴더

```html
<img src="/images/profile.jpg" alt="Your Name" />
```

이렇게 해버리면 문제가

- 스크린 사이즈에 따라 반응형으로 이미지가 달라지게 조절해줘야 한다
- 써드파티로 이미지 최적화 해줘야 한다
- 뷰포트에 들어왔을 때에만 이미지 로딩해줘야 한다?

Next.js의 Image 컴포넌트 쓰면 해결 됨

빌드타임이 아닌, 요청 시에 이미지를 최적화 함 그래서, 빌드 시간 안늦어짐

Next.js는 .css랑 .scss도 내장 지원하고, Tailwind CSS도 지원 함

className을 쓰면 class이름을 랜덤으로 지정해 줌

### Global Styles

_app.js

```js
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
```

### styling tips

- classnames 사용하기
- Next.js는 기본적으로 PostCSS 씀
- PostCSS 설정하려면 postcss.config.js 만들어야 함, 이건 Tailwind CSS 같은 라이브러리 쓸 떄 유용함
- Sass의 .scss와 .sass 둘 다 지원

```shell
npm install classnames
npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes
npm install sass
```

classnames 라이브러리는 쉽게 클래스 네임 바꿀 수 있게 해 줌
