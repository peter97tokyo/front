import React, { useState } from 'react';

function CounterWithUseState() {
  // count라는 상태 변수를 선언하고, 초기값은 0으로 설정
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>1.useState</h1>
      <ul>
        <li>useState는 함수형 컴포넌트에서 상태를 관리할 수 있게 해주는 Hook입니다. 
          클래스 컴포넌트의 this.state와 this.setState의 기능을 함수형 컴포넌트에서 사용할 수 있도록 합니다.</li>
      </ul>
      <p>당신이 클릭한 횟수: {count}회</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
      <ul>
        <li>useState는 배열을 반환하며, 첫 번째 요소는 현재 상태 값(count),
           두 번째 요소는 상태를 업데이트할 함수(setCount)입니다.</li>
        <li>useState의 인자(위 코드에서는 0)는 초기 상태 값입니다.</li>
      </ul>
    </div>
  );
}

export default CounterWithUseState;