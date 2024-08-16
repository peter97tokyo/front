import React from 'react';
import ReactDOM from 'react-dom/client';

import ContextApi from './ContextApi';
import ProviderWithRedux from './ProviderWithRedux';  // 대문자로 시작하도록 변경
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApi />
    <ProviderWithRedux />  {/* 대문자로 변경된 컴포넌트를 사용 */}
  </React.StrictMode>
);

reportWebVitals();
