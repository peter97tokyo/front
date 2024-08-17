
const Container = () => {
    return (
        <div className="container p-5 my-5 border">
            <h1>Bootstrap 5 Containers</h1>
                <h3>Containers이란?</h3>
                <ul>
                    <li>
                        Bootstrap 요구합니다 포장된 컨텐츠 속성을 포함시키는 것을
                    </li>
                    <li>
                        컨테이너는 내부 콘텐츠를 채우는 데 사용되며 사용 가능한 두 가지 컨테이너 클래스가 있습니다.
                    </li>
                </ul>
                <div className="alert alert-warning">
                    <ol>
                        <li><span className="bg-success text-white">.container</span> 클래스는 반응형 고정 너비 컨테이너를 제공합니다.</li>    
                        <li><span className="bg-success text-white">.container-fluid</span> 클래스는 뷰포트의 전체 너비에 걸쳐 있는 전체 너비 컨테이너를 제공합니다.</li>    
                    </ol>
                </div>
                 {/* Container */}
                <div
                    className="container"
                    style={{
                    marginBottom: "20px",
                    border: "4px solid #f1f1f1",
                    padding: "20px",
                    maxWidth: "1140px",
                    }}
                >
                    <div
                        style={{
                            height: "100px",
                            width: "80%",
                            margin: "auto",
                            backgroundColor: "#ccc",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                    <span>.container</span>
                    </div>
                </div>

                {/* Container-Fluid */}
                <div
                    className="container-fluid"
                    style={{
                        border: "4px solid #f1f1f1",
                        padding: "20px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            height: "100px",
                            width: "100%",
                            backgroundColor: "#ccc",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                    <span>.container-fluid</span>
                    </div>
                </div>
                <h3>Container Padding</h3>
                <ul>
                    <li>
                        기본적으로 컨테이너에는 왼쪽 및 오른쪽 패딩이 있으며 상단 또는 하단 패딩은 없습니다. 
                        따라서 우리는 더 보기 좋게 만들기 위해 추가 패딩 및 여백과 같은 간격 유틸리티를 자주 사용합니다. 예를 들어 .pt-5는 "큰 상단 패딩 추가"를 의미합니다.
                    </li>
                    <li>
                        <pre>
                            <code className="bg-success text-white">
                                {`<div class="container pt-5"></div>`}
                            </code>
                        </pre>
                    </li>
                </ul>
        </div>
    )
}

export default Container