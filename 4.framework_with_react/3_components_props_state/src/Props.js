// 부모 컴포넌트
function ParentComponent() {
    return (
      <div>
        <ChildComponent name="John" age={30} />
      </div>
    );
  }
  
  // 자식 컴포넌트
  function ChildComponent(props) {
    return (
      <div>
        <p>3. 프로퍼티(Props)</p>
        <ol>
            <li>
                Props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법입니다. 
                Props는 읽기 전용이며, 자식 컴포넌트에서는 이를 변경할 수 없습니다. 부모 컴포넌트가 전달한 데이터에 따라 자식 컴포넌트의 렌더링 결과가 달라질 수 있습니다.
            </li>
            <li>
                Props는 함수의 매개변수처럼 전달되며, 컴포넌트 내부에서는 this.props(클래스형 컴포넌트) 또는 매개변수로 접근합니다(함수형 컴포넌트).
            </li>
        </ol>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <ul>
            <li>
                설명: 이 예시에서 ParentComponent는 ChildComponent에 name과 age라는 Props를 전달합니다. 
                ChildComponent는 props.name과 props.age를 사용하여 전달받은 데이터를 렌더링합니다. 
                Props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터이므로, 자식 컴포넌트에서 이를 변경할 수 없습니다.
            </li>
        </ul>
      </div>
    );
  }
  
  // 사용 예
export default ParentComponent
  