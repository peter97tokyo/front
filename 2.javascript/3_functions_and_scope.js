// 함수 선언
// 함수 선언 방식으로 greet 함수를 정의합니다.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"

// 함수 표현식
// 함수 표현식 방식으로 greetExpression 함수를 정의합니다.
const greetExpression = function(name) {
return `Hello, ${name}!`;
};

console.log(greetExpression("Bob")); // "Hello, Bob!"

// 화살표 함수
// 화살표 함수 방식으로 greetArrow 함수를 정의합니다.
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow("Charlie")); // "Hello, Charlie!"

// 즉시 실행 함수 (IIFE)
// 즉시 실행 함수를 정의하고, 정의되자마자 실행합니다.
(function() {
console.log("This is an IIFE.");
})();

// 함수 파라미터와 기본값
// 기본값이 설정된 파라미터를 가진 함수를 정의합니다.
function greetDefault(name = "Guest") {
return `Hello, ${name}!`;
}

console.log(greetDefault()); // "Hello, Guest!"
console.log(greetDefault("Dave")); // "Hello, Dave!"

// 전역 스코프
// 전역 변수 globalVar를 선언합니다.
let globalVar = "I am global";

function checkGlobal() {
// 전역 변수에 접근하여 값을 출력합니다.
console.log(globalVar); // "I am global"
}

checkGlobal();
console.log(globalVar); // "I am global"

// 함수 스코프
// 함수 내부에서 선언된 변수는 함수 외부에서 접근할 수 없습니다.
function checkScope() {
let functionVar = "I am local";
console.log(functionVar); // "I am local"
}

checkScope();
// 아래 줄을 주석 해제하면 에러가 발생합니다. (ReferenceError: functionVar is not defined)
// console.log(functionVar); // ReferenceError: functionVar is not defined

// 블록 스코프
// 블록 내부에서 선언된 변수는 블록 외부에서 접근할 수 없습니다.
{
let blockVar = "I am block scoped";
console.log(blockVar); // "I am block scoped"
}

// 아래 줄을 주석 해제하면 에러가 발생합니다. (ReferenceError: blockVar is not defined)
// console.log(blockVar); // ReferenceError: blockVar is not defined

// 중첩된 스코프
// 함수 내부에서 다른 함수를 선언하고, 외부 함수의 변수를 내부 함수에서 접근합니다.
let outerVar = "I am outer";

function outerFunction() {
let innerVar = "I am inner";

function innerFunction() {
    // 내부 함수에서 외부 함수의 변수에 접근합니다.
    console.log(outerVar); // "I am outer"
    console.log(innerVar); // "I am inner"
}

innerFunction();
}

outerFunction();

// 클로저
// 클로저는 함수와 그 함수가 선언될 당시의 스코프를 기억하는 기능을 말합니다.
function outerFunctionClosure(outerVar) {
// 내부 함수가 외부 함수의 변수에 접근할 수 있습니다.
return function innerFunction(innerVar) {
    console.log(`Outer variable: ${outerVar}`);
    console.log(`Inner variable: ${innerVar}`);
};
}

// outerFunctionClosure 함수를 호출하여 클로저를 생성합니다.
const newFunction = outerFunctionClosure("outside");
newFunction("inside");
// Outer variable: outside
// Inner variable: inside
