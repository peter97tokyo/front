import React, { useState, useEffect } from 'react';

function ExampleWithUseEffect() {
  const [count, setCount] = useState(0);

  // 이펙트를 이용하여 문서 타이틀을 업데이트
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // 클린업 함수를 반환할 수 있음 (컴포넌트 언마운트 시 호출)
    return () => {
      console.log('Cleanup');
    };
  }, [count]); // count가 변경될 때마다 이펙트가 실행됨

  return (
    <div>
      <h1>2.useEffect</h1>
      <ul>
        <li>useEffect는 사이드 이펙트를 관리하기 위한 Hook입니다. 
          클래스 컴포넌트에서의 componentDidMount, componentDidUpdate, componentWillUnmount를 합쳐놓은 것과 유사합니다.</li>
      </ul>
      <p>당신이 클릭한 횟수: {count}회</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
      <ul>
        <li>useEffect는 기본적으로 컴포넌트가 렌더링된 후에 실행됩니다.</li>
        <li>두 번째 인자로 빈 배열([])을 넘기면, 이펙트는 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.</li>
        <li>특정 값에만 반응하게 하고 싶다면, 배열에 그 값을 넣어주면 됩니다. 위 코드에서는 count가 변경될 때마다 이펙트가 실행됩니다.</li>
      </ul>
    </div>
  );
}

export default ExampleWithUseEffect;