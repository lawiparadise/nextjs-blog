---
title: html 기초에 대해 알아보자 - 1
date: '2021-08-07'
---

# html 구조
![](.html-basics-1_images/a0af020f.png)
```html
<!doctype html>
<html>
<head>
    <meta>
    <title>devlog</title>
</head>
<body>
    <header></header>
    <nav></nav>
    <aside></aside>
    <section>
        <article></article>
    </section>
    <footer></footer>
</body>
</html>
```
header랑 main으로 크게 구분해도 됨.  

네이버는 div에 id 붙여서 구분
![](.html-basics-1_images/00dc53e5.png)
```html
<!doctype html>
<head>
    <title>NAVER</title>
</head>
<body>
    <div id="u_skip"></div> <!--#이동 영역-->
    <div id="wrap"> <!--전체를 감싸는 영역-->
        <div id="NM_TOP_BANNER"></div> <!--상단 배너 광고 영역 -->
        <div id="header">
            <div id="special_bg"></div> <!--로고와 검색창-->
            <div id="gnb"></div> <!--nav 영역-->
        </div>
        <div id="container"></div> <!--실질적인 컨텐츠 영역-->
        <div id="footer"></div> <!--마지막 컨텐츠, 이용약관 등-->
    </div>
</body>
</html>
```
