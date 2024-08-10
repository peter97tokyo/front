// React 라이브러리를 임포트합니다. React는 UI를 구성하는 기본 요소입니다.
import React from 'react';

// ReactDOM 라이브러리를 임포트합니다. ReactDOM은 React 컴포넌트를 브라우저 DOM에 렌더링하는 역할을 합니다.
import ReactDOM from 'react-dom/client';

// CSS 파일을 임포트합니다. (현재 주석 처리됨)
// import './index.css';

// App 컴포넌트를 임포트합니다. 이 컴포넌트는 애플리케이션의 주요 UI를 구성하는 최상위 컴포넌트입니다.
import App from './App';

// reportWebVitals 함수를 임포트합니다. 이 함수는 애플리케이션의 성능을 측정하는 데 사용됩니다.
import reportWebVitals from './reportWebVitals';

// ReactDOM의 createRoot 함수를 사용하여 'root'라는 ID를 가진 DOM 요소를 루트로 설정합니다.
// 이 루트에 React 컴포넌트를 렌더링하게 됩니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render() 메서드를 호출하여 React 컴포넌트를 실제 DOM에 렌더링합니다.
// <React.StrictMode>로 App 컴포넌트를 감싸서 개발 모드에서 추가적인 검사 및 경고를 활성화합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 애플리케이션의 성능을 측정하고자 할 때 reportWebVitals를 호출합니다.
// 예를 들어, 성능 데이터를 콘솔에 로그하거나 분석 서비스로 전송할 수 있습니다.
// 아래 함수 호출은 현재 빈 상태이므로, 성능 측정이 실행되지 않습니다.
// 측정을 활성화하려면 예시처럼 reportWebVitals(console.log) 또는 다른 함수로 전달할 수 있습니다.
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// (애플리케이션의 성능 측정을 시작하려면 결과를 로그로 남기거나
// 분석 서버로 데이터를 전송하는 함수를 여기에 전달하면 됩니다. 자세한 내용은 링크를 참고하세요.)
