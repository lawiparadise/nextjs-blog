---
title: chatgpt api 사용해보기 - 2
date: '2023-09-26'
---

# chatgpt api를 사용해보자 - API reference
- https://platform.openai.com/docs/api-reference

## Introduction
- HTTP req로 어떤 언어든지 사용 가능
- chatgpt 공식 라이브러리도 있음
```shell
pip install openai
npm install openai@^4.0.0
```
---
## Authentication
- API key 사용 함. 발급 받아야 돼. 당연히 유출되면 안 됨
```shell
Authorization: Bearer OPENAI_API_KEY
```

### Organization(optional)
- 여러 organization에 속해있으면, 헤더에 뭐 추가시켜야 됨