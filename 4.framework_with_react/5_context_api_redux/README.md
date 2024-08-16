# 결론
- Context API는 간단한 전역 상태 관리에 적합하며, 외부 라이브러리 없이 React 자체에서 제공하는 기능으로 상태를 관리할 수 있습니다.
- Redux는 복잡한 상태 관리가 필요한 중대형 애플리케이션에서 유용하며, 명확한 구조와 풍부한 도구 지원을 제공합니다.

## Redux는 복잡하여 이곳에 다시 정리
### 순서
1. src/toggleTheme.js
2. src/themeReducer.js
3. src/store.js
4. src/ProviderWithRedux.js

### src/toggleTheme.js
- **코드**: export const toggleTheme = () => ({type: 'TOGGLE_THEME',});
- **내용**:
  - 상태의 변화를 일으키는 이벤트나 명령을 정의하는 객체입니다. type과 필요한 데이터를 포함합니다.
  
### src/themeReducer.js
- **코드**: const themeReducer = (state = initialState, action) => {...}
- **내용**:
  - 현재 상태와 Action을 받아서 새로운 상태를 반환하는 순수 함수입니다. 상태 변화의 규칙을 정의합니다.
  - 상태를 관리할 Reducer를 작성하고, Store에 연결합니다.

### src/store.js
- **코드**: const store = createStore(themeReducer);
- **내용**:
  - 애플리케이션의 상태가 저장되는 곳입니다. 하나의 애플리케이션에는 하나의 Store가 존재합니다.
  - createStore 함수를 사용해 Store를 생성합니다.

### src/ProviderWithRedux.js
- **코드**: const dispatch = useDispatch();
- **내용**:
  - Provider 컴포넌트를 사용해 Store를 애플리케이션에 제공하고, useSelector, useDispatch 훅을 사용해 상태를 조회하고 업데이트합니다.
  