import React from 'react';

const Home = () => {
    return (
        <div className="container p-5 my-5 border">
            <h1>Bootstrap Home</h1>
            <div>
                <h3>Bootstrap이란?</h3>
                <ol>
                    <li>
                        빠르고 쉽게 웹 개발이 가능한 front-end 프레임워크이다.
                    </li>
                    <li>
                        typography, forms, buttons...등을 위한 HTML, CSS를 기반으로 템플릿이다.
                    </li>
                    <li>
                        반응형 웹 디자인을 제공한다
                    </li>
                </ol>
            </div>
            <div className="alert alert-warning">
                <strong>반응형 웹 디자인이란?</strong>
                <br/>
                모든 디바이스에서 자동적으로 보기 좋게 조정해준다. 
            </div>
            <div>
                <h3>Bootstrap Versions</h3>
                <ul>
                    <li>
                        Bootstrap5은 제일 최신의 버전이며. 새로운 컴포넌트, 빠른 스타일시프트 그리고 많은 반응형
                    </li>
                    <li>
                        Bootstrap5은 비교적 낮은 버전의 브라우저, 플랫폼을 지원합니다(인터넷 익스플로어 11보다 낮은 버전은 호환되지 않음) 
                    </li>
                    <li>
                        Bootstrap 5와 Bootstrap 3 & 4의 주요 차이점은 Bootstrap 5가 jQuery 대신 바닐라 JavaScript로 전환했다는 것입니다.
                    </li>
                </ul>
            </div>
            <div>
                <h3>왜 Bootstrap을 사용해야하는가?</h3>
                <ol>
                    <li>
                        쉬운 사용법 : HTML과 CSS의 기본지식이 있는 사람이라면 시작할수 있는 Bootstrap
                    </li>
                    <li>
                        반응형 : Bootstrap은 어떤 디바이스든지 맞게 조정해준다.
                    </li>
                    <li>
                        모바일 우선 접근 방식: Bootstrap에서는 모바일 우선 스타일이 핵심 프레임워크의 일부입니다.
                    </li>
                    <li>
                        브라우저 호환성: Bootstrap 5는 모든 최신 브라우저(Chrome, Firefox, Edge, Safari 및 Opera)와 호환됩니다. IE11 이하에 대한 지원이 필요한 경우 BS4 또는 BS3을 사용해야 합니다.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home