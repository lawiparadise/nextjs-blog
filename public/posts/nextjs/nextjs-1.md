---
title: nextjs 알아보기 - 1
date: '2022-10-05'
---

# nextjs

## swr vs usestate
- nextjs에서 data-fetching을 할 때 3가지 있음. static, sever-side, client-side
- nextjs는 기본적으로 static과 server-side가 우선임.
- nextjs에서 react처럼 대시보드 만들어서, 데이터가 바뀌는거 하고 싶으면 client-side로 해야 함
- 이 때 swr을 쓰거나 useState를 쓴다. 근데, swr을 쓰도록 하자. 퍼포먼스거 더 좋단다.
- https://javascript.plainenglish.io/why-you-should-use-useswr-instead-of-usestate-when-calling-apis-8b6de5dc18fc
- 