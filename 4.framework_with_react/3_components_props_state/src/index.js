import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import ParentComponent from './Props';
import Counter from './State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionComponent /> 
    <ClassComponent />
    <ParentComponent />
    <Counter />
  </React.StrictMode>
);
/* 공부 순서 */
// 1. FunctionComponent
// 2. ClassComponent
// 3. ParentComponent
// 4. Counter
reportWebVitals();
