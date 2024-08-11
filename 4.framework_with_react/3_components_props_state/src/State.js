import React, { useState } from 'react';

function Counter() {
  // useState 훅을 사용하여 상태 변수와 그 상태를 변경하는 함수를 선언
  const [count, setCount] = useState(0);

  // 버튼 클릭 시 상태 변경 함수 호출
  return (
    <div>
        <p>4. 상태(State)</p>
        <ol>
            <li>
                State는 컴포넌트 내부에서 관리되는 데이터입니다. State는 동적이며, 변경될 수 있습니다. 
                컴포넌트의 State가 변경되면 해당 컴포넌트가 다시 렌더링됩니다.
            </li>
            <li>
                클래스형 컴포넌트에서는 this.state로, 함수형 컴포넌트에서는 useState 훅을 사용하여 상태를 관리합니다.
            </li>
        </ol>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <ul>
            <li>
                설명: 이 예시에서 Counter 컴포넌트는 count라는 상태를 가지고 있습니다. 
                useState(0)을 사용하여 상태를 초기화하고, setCount 함수를 통해 상태를 업데이트할 수 있습니다. 
                사용자가 버튼을 클릭하면 setCount(count + 1)이 호출되어 count 상태가 증가하고, 컴포넌트가 다시 렌더링됩니다.
            </li>
        </ul>
        <p>Props와 State의 차이점</p>
        <ul>
            <li>Props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법이며, 읽기 전용입니다.</li>
            <li>State는 컴포넌트 내부에서 관리되는 동적인 데이터이며, 컴포넌트에서 직접 수정할 수 있습니다.</li>
        </ul>
    </div>
  );
}

// 사용 예
export default Counter
