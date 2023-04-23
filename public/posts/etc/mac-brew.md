---
title: '맥 brew 기본 설정'
date: '2023-04-23'
---

# 맥 기본 설정에 관련된 것
- homebrew
- brew install nvm
- nvm install --lts
- brew install yarn

## homebrew
- https://brew.sh/index_ko

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo ~ >> .zprofile # eval 명령어를 .zprofile에 넣음
eval ~
```

## node version manager
```shell
brew install nvm
mkdir .nvm
vim .zshrc
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
nvm install --lts
```

## yarn
```shell
brew install yarn
```
- brew install yarn --ignore-dependencies # node를 빼고 설치하기 위해서 옵션을 넣어주라는데, 안해도 되는 듯?