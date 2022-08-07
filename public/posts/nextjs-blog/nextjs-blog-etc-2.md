---
title: nextjs 블로그 제작 기타 - 2 css로 글자 부분인 ESC 부분만 background-image 이미지 넣기
date: '2021-07-11'
---

# Eat Sleep Code에서 ESC부분만 이쁘게 꾸미기

*글 제목에 :이 들어가면 matter에서 에러 남 ;

## 완성된 모습

![](/md-images/nextjs-blog/nextjs-blog-etc-2/images/beb3c75e.png)

```css
.pointESC {
    -webkit-text-fill-color: transparent;
    color: coral;
    background-image: url('/images/rainbow.jpeg');
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 1em;
    font-size: 1em;
}
```

```html
 <p>while :&nbsp;
    <span className={styles.pointESC} style={{"background-size":"10px"}}>E</span>at&nbsp;
    <span className={styles.pointESC} style={{"background-size":"20px"}}>S</span>leep&nbsp;
    <span className={styles.pointESC} style={{"background-size":"30px"}}>C</span>ode&nbsp;
</p>
```