import React, { createContext, useState, useContext } from 'react';

// 1. Context 생성
const ThemeContext = createContext(); // Context 생성: React.createContext()를 사용해 Context를 생성합니다.

const ThemeProvider = ({ children }) => { 
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Provider: 생성한 Context의 Provider를 사용해, 상태를 공유할 컴포넌트를 감싸고, value를 통해 전달할 데이터를 지정합니다. */}
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  // 2. Context 사용
  const { theme, toggleTheme } = useContext(ThemeContext); // 프로바이더에게 변수(상태값, 함수)를 받아냄
  // Consumer: useContext 훅을 사용하거나, Consumer 컴포넌트를 사용해 하위 컴포넌트에서 Context의 데이터를 사용합니다.
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      Toggle Theme
    </button>
  );
};

const ContextApi = () => (
  <div>
    <h1>1. Context API</h1>
    <p>Context API는 React에서 전역적으로 데이터를 공유하기 위해 제공하는 내장 기능입니다. 
      이를 통해 부모 컴포넌트에서 하위 컴포넌트로 props를 일일이 전달하지 않고도, 여러 컴포넌트 간에 상태를 공유할 수 있습니다.</p>
    <ul>
      <li>
        <h4>사용방법:</h4>
        <ul>
          <li>Context 생성: React.createContext()를 사용해 Context를 생성합니다.</li>
          <li>Provider: 생성한 Context의 Provider를 사용해, 상태를 공유할 컴포넌트를 감싸고, value를 통해 전달할 데이터를 지정합니다.</li>
          <li>Consumer: useContext 훅을 사용하거나, Consumer 컴포넌트를 사용해 하위 컴포넌트에서 Context의 데이터를 사용합니다.</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <h4>장점:</h4>
        <ul>
          <li>간단한 전역 상태 관리: 비교적 단순한 구조의 애플리케이션에서 전역 상태를 쉽게 관리할 수 있습니다.</li>
          <li>외부 라이브러리 불필요: React 내장 기능으로, 추가적인 라이브러리 없이 사용 가능합니다.</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <h4>단점:</h4>
        <ul>
          <li>복잡한 상태 관리에는 부적합: 상태 관리가 복잡해지거나, 로직이 많아지면 코드가 복잡해질 수 있습니다.</li>
          <li>리렌더링 문제: Context의 값이 바뀌면, 해당 Context를 구독하고 있는 모든 컴포넌트가 리렌더링되므로 성능에 영향을 미칠 수 있습니다.</li>
        </ul>
      </li>
    </ul>
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
    <hr></hr>
  </div>
);

export default ContextApi;
