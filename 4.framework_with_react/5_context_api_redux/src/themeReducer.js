import { TOGGLE_THEME } from './toggleTheme';

const initialState = {
  theme: 'light',
};
// Reducer: 현재 상태와 Action을 받아서 새로운 상태를 반환하는 순수 함수입니다. 상태 변화의 규칙을 정의합니다.
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};
// 사용법 => Reducer 작성: 상태를 관리할 Reducer를 작성하고, Store에 연결합니다.
export default themeReducer;
