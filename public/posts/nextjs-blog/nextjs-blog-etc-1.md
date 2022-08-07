---
title: nextjs 블로그 제작 기타 - 1 posts폴더 안에서 주제별로 폴더 만들어 관리하기
date: '2021-07-11'
---
# posts에 포스트가 늘어나면 폴더로 관리하는게 좋을 것 같다는 생각이 들었다

## 원하는 폴더 구조
![](.nextjs-blog-etc-1_images/48f83ab6.png)  

posts폴더 안에  
aa폴더 안에 md파일들,  
nextjs-blog 안에 md파일들  
이 있으면 좋겠다.  

바꿔야 할 부분 :  
![](.nextjs-blog-etc-1_images/e670c13f.png)  
posts.js에서 md파일을 조회할 때 폴더명은 제외하고 불러와야 한다. 폴더 안에 있는 md파일을 조회해야 함  

![](.nextjs-blog-etc-1_images/2b78577f.png)  
[id].js 를 [..id].js로 바꿔야  
path를 posts/test1 뿐만 아니라, posts/aa/ssg-ssr2  
경로까지 인식할 수 있다.  

또한, id를 넘겨줄 때  
![](.nextjs-blog-etc-1_images/585ffa85.png)  
['aa', 'ssg-ssr2']  
이렇게 넘겨줘야 한다.

[catch all routes 부분 참고](https://nextjs.org/docs/routing/dynamic-routes)

또한, public 부분에서도 이미지 관리를 체계적으로 했다.  
![](.nextjs-blog-etc-1_images/969172c8.png)  