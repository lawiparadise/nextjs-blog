---
title: nextjs 공식 튜토리얼 따라해보기 - 3
date: '2021-07-01'
---

# [Dynamic Routes]

## Page Path Depends on External Data
page path가 외부 data에 의해 결정되는 것에 대해 알아본다.  
getStaticPaths가 id값을 준다.  
getStaticProps가 id에 해당하는 data를 준다.  


[id].js랑 [...id].js 사용해서, MD파일명을 id로 사용하기  

# [API Routes]

pages/api 폴더에 넣어서 만들 수 있음  
getStaticProps나 getStaticPaths에서 API Route를 fetch하면 안됨  
대신, server-side code를 getStaticProps나 getStaticPaths에 직접 넣어라  
왜냐면 얘네 2개는 오직 serverside에서만 작동(내 기억으론 빌드시에만)하고 client-side에서는 절대 동작을 안 함  
그니까, API Route라는게 결국 서버에 데이터 요청하는건데, 이 API Route하는 코드를 getStaticProps나 getStaticPaths에 넣지 말고,  
getStaticProps나 getStaticPaths에는 API Route관련 함수 사용하지 말고, 직접 서버에 데이터 요청하는 코드 짜넣어라  

POST와 같은 INPUT을 받을 때 쓸만 함. 사용자 이메일 받고 바로 db에 넣으면 됨.  
API Route code는 client bundle에 포함되지 않는다.  


## Preview Mode
Static Generation은 headless CMS로부터 데이터 fetch해올 때 유용하다.  
하지만, 초안을 작성하며, 이를 page에 즉시 preview할 때에는 안좋다. 왜냐면 next는 컨텐츠를 build time에 만들기 때문  
이럴 때 사용하는게 preview mode임. 그리고 이 때 api route를 활용한다.  

## Dynamic API Routes
도 적용 가능

# [Deploying Your Next.js App]
vercel에 브랜치 올리면 preview 보기도 가능. develop > preview > ship  
Next.js는 Node.js를 support하는 어떤 hosting provider에도 배포 가능  
