# React Native News App

## 리액트 네이티브와 native base로 만든 뉴스 앱 입니다

This is a simple news app made of react-native.<br>
`React`와 `native-base`를 사용해서 만들어 본 뉴스 어플입니다

![preview](./src/imgs/previewImg.gif)

## Third-party Library

- moment.js
- native-base
- react-native-webview

---

How to Simulate this App

- 안드로이드 에뮬레이터 실행 (안드로이드 스튜디오)
  Execute Android Emulator
- 프로젝트 소스 다운<br>

  - git clone https://github.com/haerang94/simple-news-app.git

- native-base 설치

  - npm install native-base --save
  - react-native link

- momentjs 라이브러리 설치

  - npm install moment --save

- react-native-webview설치

  - react-native link react-native-webview

- 프로젝트 실행
  - npx react-native run-android

## Source

- 시간 관련 라이브러리 moment.js(뉴스 포스트 업로드 시간 계산시 사용)
  - https://momentjs.com/
- native-base
  - https://docs.nativebase.io/docs/GetStarted.html

## Reference 참고

### 뉴스 앱 <br>

(해당 강의는 iOS를 기반으로 한 프로젝트입니다. 그대로 따라할 시 Android로 개발할 경우 제대로 작동이 되지 않는 라이브러리가 있거나 영상 소스에서 잘못된 부분이 있는데 몇몇 오류가 발생하는 데 그럴 경우 제 프로젝트 소스를 참고해서 수정하시면 됩니다.) <br>
https://www.youtube.com/watch?v=BnCpdXfg2HY&feature=youtu.be&list=PLSMIv0i-2Ebmp-FpmJW84UO_48ErxzhAB
