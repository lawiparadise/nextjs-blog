---
title: nodejs 개발 해보기 - 1
date: '2022-07-06'
---

# 노드js 개발을 위해 알아야 할 것

### nvm
nvm은 node version manager  
[nvm 깃헙](https://github.com/nvm-sh/nvm) 에서 설치 가능

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm ls
nvm install --lts # lts최신 버전 설치 v16.15.1
nvm use 16 # v16.15.1 사용
```

npm은 node package manager

package.json의 scripts안의 start, dev가 있다고 할 때,  
start는 npm start로 해주면 되고,  
dev는 npm run dev로 해줘야 한다.  

nvm start, stop, restart, test는 기본적으로 설정되어있는 애들이라 run 안 붙여도 됨  

move md to public   