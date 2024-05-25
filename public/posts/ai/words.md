---
title: AI, ML 관련 용어 정리
date: '2024-03-11'
---

# 용어 정리
- HAAR Cascade(하르 캐스케이드) : 머신러닝 기반의 오브젝트 검출 알고리즘. 
  - 붙어있는 두 개의 크기가 같은 사각형(흰색, 검은색) 영역의 픽셀값 차이를 계산
  - 눈동자(검은색)와 콧등(흰색) 등의 차이로 얼굴 찾아냄



## 임시

face detection(facial recognition) : 이미지에 얼굴이 있는지 감지
face verification : 두 이미지가 같은 사람의 얼울인지 감지
face recognition : 이미지들 중에서 내가 넣은 이미지가 어떤 사람인지 찝어냄

deepface : 
python이라 안드로이드에서 돌리기 힘들듯
서버에서 돌려야하는데 그러려면 안드로이드에서 bytearray를 계속 서버로 보내야 함. 또는 파이썬 코드가 안드로이드에서 돌아가게 해야하나 복잡함

ML kit :
안드로이드에서 가능하나, face detection에 치중되어있고, face recognition이 될지는 모름

opencv :
가장 유력함
https://developer.opencv.fr/ui/#/onboard/demo
안드로이드에서 가능하고, face recognition 가능
face comparison이라고 부름

