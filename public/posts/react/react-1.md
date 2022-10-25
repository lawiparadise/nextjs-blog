---
title: react 기초 1
date: '2022-09-22'
---

# react란?
- 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JS 라이브러리
- 컴포넌트라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 도움

## react 시작
```shell
npx create-react-app blog
```

## 구조
- index.tsx : 여기서 ReactDom의 render를 실행 함. html파일 안의 id가 root인 애한테 렌더링 해 줌
- App.js : 여기에 원하는걸 그리고, 이걸 index.js에 넣어 줌
- index.html : html파일임

## tic tac toe 게임
- https://ko.reactjs.org/tutorial/tutorial.html#passing-data-through-props
- 음 한 번 따라해보긴 했는데, 구조 알려면 좀 더 학습해야할 듯

## 좀 더
- React.component를 상속받음
- 개별 컴포넌트는 props라는 매개변수를 받아오고
- render함수를 통해 뷰를 반환 함
- 무언가를 기억할 때 component는 state를 사용 함
- component의 생성자에 this.state를 넣으면 됨
- ```this.setState({value:'X'})```하면 컴포넌트가 다시 렌더링 됨
- 모든 react 컴포넌트 클래스는 생성자를 가질 때 super(props)부터 작성해야 함

## 부모로부터 자식한테 값 전달
- 부모 컴포넌트가 자식 컴포넌트 사용 할 때 ```value={'z'}```이렇게 넘겨주면 자식에선 ```this.props.value```로 사용 가능

## 부모 자식 component
- 자식이 5명이면 자식 component에 상태를 저장하지 말고, 부모 component에 상태 저장하는게 좋다
- 부모가 자식한테 state값을 요청할수도 있긴한데 이 방식은 문제있음
- 여러 자식들로부터 데이터를 모으거나, 두 개의 자식 컴포넌트들이 통신하게 하려면
- 부모 컴포넌트에 공유 state를 정의해야 함
- 컴포넌트는 자신이 정의한 state에만 접근이 가능해서, 자식이 부모의 state를 직접 변경 불가
- 대신, 부모에서 자식으로 함수를 전달하고, 자식은 클릭되었을 때, 그 함수를 호출하면서 변경 가능
- 이 때 자식 컴포넌트를 제어되는 컴포넌트라고 함

## 불변성
- 기존 객체 변경하지 말고 새 객체 만드는게 더 좋음
1. 되돌아가기 기능 가능
2. 변화 감지 가능
3. react에서 다시 렌더링 하는 시기 결정함

## 함수 컴포넌트
- 더 간단하게 컴포넌트를 작성하는 방법
- state없이 render함수만 가짐
- props만 입력받아서 렌더링할 대상을 반환하는 함수 작성 가능
- 클래스보다 빠르게 작성할 수 있음

## list에서는 key를 사용하기
- 각 li들이 뭔지를 구분하기 위해서 key를 사용 함
- 동적 리스트를 만들 때마다 적절한 키를 할당하는게 강력히 추천 됨
- 배열의 인덱스를 키로 사용하는 것은 아이템 추가, 제거 시 문제가 됨
- 컴포넌트는 key 참조 불가
- 리액트에서 li사용 관련, key를 사용하는 방식을 배워둘 필요가 있음
- https://reactjs.org/docs/lists-and-keys.html#keys

