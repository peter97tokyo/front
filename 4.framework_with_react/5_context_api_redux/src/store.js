import { createStore } from 'redux';
import themeReducer from './themeReducer';

// Store: 애플리케이션의 상태가 저장되는 곳입니다. 하나의 애플리케이션에는 하나의 Store가 존재합니다.
const store = createStore(themeReducer);
// 사용법 => Store 생성: createStore 함수를 사용해 Store를 생성합니다.

export default store;
