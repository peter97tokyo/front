import React from 'react';

class ClassComponent extends React.Component {
    render() {
        return <div>
            <p>2. 클래스형 컴포넌트(Class Component)</p>
            <ol>
                <li>
                    ES6 클래스 문법을 사용해 정의됩니다.
                </li>
                <li>
                    상태(state)와 생명주기 메서드(예: componentDidMount, componentDidUpdate)를 가질 수 있습니다.
                </li>
            </ol>
        </div>;
    }
}

export default ClassComponent