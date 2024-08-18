import React from "react";

const Grid = () => {
  return (
    <div className="container p-5 my-5 border">
      <h1>Bootstrap 5 Grid</h1>
      <div>
        <h3>Grid이란?</h3>
        <p>
          Bootstrap의 그리드 시스템은 반응형 레이아웃을 쉽게 만들 수 있게 도와주는 12열 기반의 시스템입니다. 
          그리드 시스템을 사용하면 다양한 화면 크기에 맞춰 요소를 배치할 수 있으며, 행과 열을 조합하여 원하는 레이아웃을 만들 수 있습니다.
        </p>
        <div className="row">
            <div className="col border">Column 1</div>
            <div className="col border">Column 2</div>
            <div className="col border">Column 3</div>
            <div className="col border">Column 4</div>
            <div className="col border">Column 5</div>
            <div className="col border">Column 6</div>
            <div className="col border">Column 7</div>
            <div className="col border">Column 8</div>
            <div className="col border">Column 9</div>
            <div className="col border">Column 10</div>
            <div className="col border">Column 11</div>
            <div className="col border">Column 12</div>
        </div>
        <div className="row">
            <div className="col-4 border">Div 4</div>
            <div className="col-4 border">Div 4</div>
            <div className="col-4 border">Div 4</div>
        </div>
        <div className="row">
            <div className="col-4 border">Div 4</div>
            <div className="col-8 border">Div 8</div>
        </div>
        <h4>그리드 시스템 기본 구조:</h4>
        <pre className="bg-success text-white">
          <code>{`
                <div className="container">
                    <div className="row">
                        <div className="col">Column 1</div>
                        <div className="col">Column 2</div>
                        <div className="col">Column 3</div>
                    </div>
                </div>
                `}
          </code>
        </pre>
        <p>위 코드는 세 개의 동일한 너비의 열을 가진 행을 생성합니다. 각 열은 화면 크기에 따라 자동으로 너비가 조정됩니다.</p>

        <h4>예시:</h4>
        <div className="row">
          <div className="col bg-primary text-white p-3">Column 1</div>
          <div className="col bg-secondary text-white p-3">Column 2</div>
          <div className="col bg-success text-white p-3">Column 3</div>
        </div>

        <h4>다양한 열 크기:</h4>
        <p>다른 크기의 열을 만들기 위해 `col` 클래스에 숫자를 추가하여 특정 너비를 지정할 수 있습니다.</p>
        <pre className="bg-success text-white">
          <code>
            {`
                <div className="row">
                    <div className="col-4">Column 1 (4/12)</div>
                    <div className="col-8">Column 2 (8/12)</div>
                </div>
            `}
          </code>
        </pre>

        <h4>예시:</h4>
        <div className="row">
          <div className="col-4 bg-info text-white p-3">Column 1 (4/12)</div>
          <div className="col-8 bg-warning text-white p-3">Column 2 (8/12)</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
