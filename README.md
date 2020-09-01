# SeventhParadigm
The purpose of this app is to help people protect the environment. It will collect product infomration through scanning QR code.
## Step: 0
https://www.jianshu.com/p/c70ca3a02087 git设定
## Step: 1 
https://reactnative.dev/docs/environment-setup 配环境
## Step: 2
npm install -g yarn
## Step: 3 (每次pull后都run一遍, 可能装了新的package)
npm rm -rf node_modules && npm install
## run 
yarn start --reset-cache

yarn react-native run-android

## 图标问题

npm install --save react-native-vector-icons // 下载库

react-native link react-native-vector-icons // 自动关联

## 可能报错 1:

 Could not initialize class org.codehaus.groovy.reflection.ReflectionCacherr
 
https://stackoverflow.com/questions/60844245/how-solve-could-not-initialize-class-org-codehaus-groovy-reflection-reflectionc
