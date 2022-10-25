---
title: typescript 사용하기 -1
date: '2022-10-08'
---

# typescript란?

## js프로젝트에서 ts 사용하려면
- ```npm install --save-dev typescript @types/node```를 해서 typescript 깔아준다
- ```tsconfig.json``` 만들어준다
![](.typescript-1_images/bad13907.png)


## ts와 tsx의 차이
- ts는 그냥 typescript파일이고
- tsx는 react component로써 컴포넌트 구성할 때 사용 함

## error
- Type error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Object'.
- ts는 지정한 타입의 키를 인덱스로 쓰라고 한다
- https://devbirdfeet.tistory.com/211
