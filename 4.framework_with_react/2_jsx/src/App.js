const element = <h1>Hello, world!</h1>;
// 위에 희한한 태그 문법은 문자열도, HTML도 아닙니다. => JSX라 하며 JavaScript를 확장한 문법입니다.

const name = 'peter kim';
const expressionIncludeName = <h1>Hello, {name}</h1>;
// JSX에 표현식 포함하기

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'peter',
  lastName: 'kim'
};

const formatElement = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const elementWithAttribute = <a href="https://www.reactjs.org"> link </a>;
// 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.
/* 
  const element = <img src={user.avatarUrl}></img>;
  어트리뷰트에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표를 입력하지 마세요.
*/
/* 
  const title = response.potentiallyMaliciousInput;
  const element = <h1>{title}</h1>;
  기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 
  모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.
*/

function App() {
  return (
    <div className="App">
      {element} 
      {expressionIncludeName}
      {formatElement}
      {elementWithAttribute}
    </div>
  );
}

export default App;
