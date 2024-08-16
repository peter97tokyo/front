import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { toggleTheme } from './toggleTheme';

const ThemeButton = () => {
  const theme = useSelector((state) => state.theme);
  // React와 연결: react-redux 라이브러리를 사용해 Redux와 React 컴포넌트를 연결합니다. 
  // Provider 컴포넌트를 사용해 Store를 애플리케이션에 제공하고, useSelector, useDispatch 훅을 사용해 상태를 조회하고 업데이트합니다.
  const dispatch = useDispatch();

  return (
    <div>
      <h1>2. Redux</h1>
      <p>Redux는 JavaScript 애플리케이션에서 상태 관리를 더 구조적이고 예측 가능하게 해주는 라이브러리입니다. 
        특히 대규모 애플리케이션에서 유용하며, 상태를 중앙 집중식으로 관리할 수 있습니다.</p>
      <ul>
        <li>
          <h4>핵심 개념:</h4>
          <ul>
            <li>Store: 애플리케이션의 상태가 저장되는 곳입니다. 하나의 애플리케이션에는 하나의 Store가 존재합니다.</li>
            <li>Action: 상태의 변화를 일으키는 이벤트나 명령을 정의하는 객체입니다. type과 필요한 데이터를 포함합니다.</li>
            <li>Reducer: 현재 상태와 Action을 받아서 새로운 상태를 반환하는 순수 함수입니다. 상태 변화의 규칙을 정의합니다.</li>
            <li>Dispatch: Action을 Store에 전달하여 상태를 변경하는 역할을 합니다.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <h4>사용 방법:</h4>
          <ul>
            <li>Store 생성: createStore 함수를 사용해 Store를 생성합니다.</li>
            <li>Reducer 작성: 상태를 관리할 Reducer를 작성하고, Store에 연결합니다.</li>
            <li>Action 생성: 상태 변화를 위한 Action을 정의하고, 이를 dispatch하여 상태를 업데이트합니다.</li>
            <li>React와 연결: react-redux 라이브러리를 사용해 Redux와 React 컴포넌트를 연결합니다. 
              Provider 컴포넌트를 사용해 Store를 애플리케이션에 제공하고, useSelector, useDispatch 훅을 사용해 상태를 조회하고 업데이트합니다.
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <h4>장점:</h4>
          <ul>
            <li>구조적 관리: 애플리케이션의 상태 관리가 명확한 구조에 따라 이루어져 예측 가능성이 높습니다.</li>
            <li>중대형 애플리케이션에 적합: 상태 관리가 복잡해질 때 매우 유용합니다.</li>
            <li>커뮤니티와 도구 지원: 많은 미들웨어와 확장 도구가 제공되어 기능 확장이 쉽습니다.</li>
          </ul>
        </li>
      </ul>  
      <ul>
        <li>
          <h4>단점:</h4>
          <ul>
            <li>복잡성: 작은 애플리케이션에서는 오히려 불필요하게 복잡할 수 있습니다.</li>
            <li>설정과 코드 양: 기본 설정 및 코드가 많아질 수 있습니다.</li>
          </ul>
        </li>
      </ul>      
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

const ProviderWithRedux = () => (
  <Provider store={store}>
    <ThemeButton />
  </Provider>
);

export default ProviderWithRedux;
