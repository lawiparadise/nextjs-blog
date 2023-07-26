---
title: git 관련 기타 등등
date: '2022-08-07'
---

## github으로 협업하기
https://victorydntmd.tistory.com/91

## git 관련 명령어

### 원격 브랜치 삭제
```shell
git push origin --delete <branch_name>
```

### 원격 브랜치 동기화
```shell
git remote prune origin
```

### 원격 저장소에 로컬 브랜치 올리기
이거 하면 원격 저장소에서 PR할래요? 나옴
```shell
git push origin feature
```

### 원격 저장소의 브랜치A를 로컬 저장소의 브랜치A에 반영할 때
```shell
git pull origin main
```

### 로컬 저장소엔 없고, 원격 저장소엔 있는 브랜치를 로컬에 만들 때
```shell
git checkout -t origin/develop
git checkout develop # 이렇게 해도 원격꺼 가져와지는 듯 함
git checkout unknown # 브랜치 없어서 error 남
```

### 원격 저장소에 있는 브랜치를 임시로 탐색하려면
```shell
git checkout origin/develop
```

### 로컬 저장소에 pull하지도 않은 커밋이 들어와있다면
```shell
git reset HEAD^ 이걸로 없애주면 됨
```
근데, 이 경우는 코드를 pm2가 쓰고 있는데, 5개 커밋 있는 브랜치에서  
커밋 3개 있는 브랜치로 바꾸면서 코드는 그대로 있고, 그러면서 커밋 2개도 같이 딸려온 듯  
여튼, reset하고, git status로 상태 보고, 코드가 있다면 그냥 다른 브랜치로 checkout -f 해서  
modified된거 없애주면 됨  

### git branch 네임 변경
```shell
git branch -m old new
```

### 변경 내용 임시 저장
```shell
git stash
git stash apply
git stash drop
```
