// 액션 타입 정의
export const TOGGLE_THEME = 'TOGGLE_THEME';

// 액션 생성자
// Action: 상태의 변화를 일으키는 이벤트나 명령을 정의하는 객체입니다. type과 필요한 데이터를 포함합니다.
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
// 사용법 => Action 생성: 상태 변화를 위한 Action을 정의하고, 이를 dispatch하여 상태를 업데이트합니다.

export default toggleTheme;