import React from 'react';
import ReactDOM from 'react-dom/client';

import CounterWithUseState from './CounterWithUseState';
import ExampleWithUseEffect from './ExampleWithUseEffect';

import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterWithUseState />
    <ExampleWithUseEffect />
    <App/>
  </React.StrictMode>
);

reportWebVitals();
