---
title: cors 에러 희망편
date: '2022-10-10'
---

# cors란?
- cross origin resource sharing
- 다른 경로로부터의 데이터 공유
- SOP(same origin policy)를 기본적으로 지켜야 한다

![](.cors-error_images/f4da7ada.png)

![https://ko.wikipedia.org/wiki/동일-출처_정책](.cors-error_images/fa69100e.png)

## cors에러 해결법
- res header에 `Access-Control-Allow-Headers`를 넣는다
- origin에 클라이언트 추가한다