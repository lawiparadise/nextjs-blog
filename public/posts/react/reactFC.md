---
title: react FC에 대하여
date: '2023-01-06'
---

# react.FC를 다들 쓰지 말라고 한다
- 왜 쓰지 말라는지 궁금했다.
1. props에 children이 암시적으로 들어가있다.
2. 제네릭을 못 쓴다.

## 1.props에 children이 암시적으로 들어가있다.
```typescript
type Props = {
    children: React.ReactNode;
}

const MyComponent:FC<Props> = (props) => {
    return <div>hello</div>
}

const App2 = () => {
    return (
        // TS2559: Type '{ children: Element; }' has no properties in common with type 'IntrinsicAttributes'.
        <MyComponent>
            <span>이 자식은 보이지도 않고 에러도 안 남</span>
        </MyComponent>
    )
}
```
- Props 안 써주면 IntrinsicAttributes 에러 남
- intrinsic : 고유한, 본질적인, 내재적인
- IntrinsicAttributes : 내재적 속성
- https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
