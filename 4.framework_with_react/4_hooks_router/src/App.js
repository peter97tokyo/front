import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NotFound = () => <h2>404 Not Found</h2>;

// useParams 훅을 사용하여 URL 파라미터를 처리하는 UserProfile 컴포넌트
const UserProfile = () => {
  const { id } = useParams(); // URL에서 id 추출
  return <h2>User ID: {id}</h2>;
};

const App = () => {
  return (
    <Router>
      {/* <Router>: 애플리케이션 전체를 감싸는 컴포넌트입니다. */}
      <h1>3.라우팅</h1>
      <nav>
        {/* <nav>: 내비게이션 링크를 포함하는 메뉴입니다. */}
        <ul>
          <li>
            기본 라우팅: <Link to="/">Home</Link>
            {/* <Link>: 다른 페이지로 이동하기 위한 링크를 생성합니다. */}
          </li>
          <li>
            기본 라우팅: <Link to="/about">About</Link>
          </li>
          <li>
            동적 라우팅: <Link to="/user/peterKim">peterKim</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Routes>: 여러 <Route>를 포함하며, 첫 번째로 일치하는 Route의 컴포넌트를 렌더링합니다. */}
        <Route path="/" element={<Home />} />
        {/* <Route>: path와 element 속성을 사용하여 경로와 렌더링할 컴포넌트를 연결합니다. element 속성은 JSX 요소를 받아들입니다. */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* path="*": 모든 경로에 대해 일치하지 않는 경우 NotFound 컴포넌트를 렌더링합니다. */}
        <Route path="/user/:id" element={<UserProfile />} />
        {/* 
            <Route path="/old-path" element={<Navigate to="/new-path" replace />} /> 
            React Router v6에서는 Redirect 대신 Navigate를 사용하여 리다이렉트를 수행합니다.
        */}
      </Routes>
    </Router>
  );
};

export default App;
