console.log('hello world')
/* 
    var: 과거에 많이 사용되었지만, 현재는 권장되지 않습니다. 함수 스코프를 가집니다.
    let: 블록 스코프를 가지며, 변수를 재선언할 수 없습니다.
    const: 상수 선언에 사용됩니다. 블록 스코프를 가지며, 재할당할 수 없습니다.
*/
var x = 10;
let y = 20;
const z = 30;
//console.log(x)
//console.log(y)
//console.log(z)

/* 숫자 (Number): 정수와 부동소수점 숫자를 포함합니다. */
let num = 42;
let price = 19.99;

/* 문자열 (String): 텍스트 데이터를 나타냅니다. */
let name = "John Doe";

/* 불리언 (Boolean): 참(true) 또는 거짓(false) 값을 가집니다. */
let isActive = true;

/* null: 의도적으로 아무런 값을 가지지 않음을 나타냅니다. */
let emptyValue = null;

/* undefined: 값이 할당되지 않은 변수를 나타냅니다. */
let notAssigned;

/* let uniqueId = Symbol('id'); */
let uniqueId = Symbol('id');
/* 
    ECMAScript6에서 새로운 primitive type인 Symbol이 도입되었다. Symbol은 변경 불가능한 원시 값이다. 
    고유한 ID 역할을 하는 토큰이다. 아래 코드와 같이 Symbol을 생성할 수 있다.

    Symbol() 코드에는 Symbol을 생성하는데, description(설명)을 넣어줄 수 있다. 
    description은 문자열이 들어가는데 Symbol 생성에 영향을 주지 않으며, 디버깅 용도로만 사용된다.
*/
console.log(uniqueId)

/* 
    객체 자료형 (Object Data Types)
        객체 (Object): 키-값 쌍의 컬렉션입니다.
        배열 (Array): 순서가 있는 값의 리스트입니다.
*/
// 객체 (Object): 키-값 쌍의 컬렉션입니다.
let person = {
    name: "Alice",
    age: 25
  };
// 배열 (Array): 순서가 있는 값의 리스트입니다.
let numbers = [1, 2, 3, 4, 5];
//console.log(person)
//console.log(numbers)

/* 연산자 (Operators) 
    연산자는 변수나 값에 대해 연산을 수행하는 데 사용됩니다.
    산술 연산자 (Arithmetic Operators)
        + : 덧셈
        - : 뺄셈
        * : 곱셈
        / : 나눗셈
        % : 나머지
        ** : 거듭제곱
*/
console.log('연산자')
let a = 10;
let b = 3;
console.log('console.log(a + b);')
console.log(a + b); // 13
console.log('console.log(a - b);')
console.log(a - b); // 7
console.log('console.log(a * b);')
console.log(a * b); // 30
console.log('console.log(a / b);')
console.log(a / b); // 3.3333
console.log('console.log(a % b);')
console.log(a % b); // 1
console.log('console.log(a ** b);')
console.log(a ** b); // 1000

/* 
    대입 연산자 (Assignment Operators)
        = : 값을 할당
        += : 더한 후 할당
        -= : 뺀 후 할당
        *= : 곱한 후 할당
        /= : 나눈 후 할당
        %= : 나머지를 구한 후 할당
*/
let c = 5;
console.log('c += 3;')
c += 3; // c = c + 3; => c는 8
console.log('c -= 2;')
c -= 2; // c = c - 2; => c는 6
/*
    비교 연산자 (Comparison Operators)
        == : 값이 같음
        === : 값과 타입이 모두 같음
        != : 값이 다름
        !== : 값과 타입이 모두 다름
        > : 크다
        < : 작다
        >= : 크거나 같다
        <= : 작거나 같다
*/
console.log("console.log(5 == '5');")
console.log(5 == '5'); // true
console.log("console.log(5 === '5');")
console.log(5 === '5'); // false
console.log("console.log(5 != '5');")
console.log(5 != '5'); // false
console.log("console.log(5 !== '5');")
console.log(5 !== '5'); // true
console.log("console.log(5 > 3);")
console.log(5 > 3); // true
console.log("console.log(5 < 3);")
console.log(5 < 3); // false
/* 
    논리 연산자 (Logical Operators)
        && : 논리 AND
        || : 논리 OR
        ! : 논리 NOT
*/
let isTrue = true;
let isFalse = false;
console.log("isTrue && isFalse")
console.log(isTrue && isFalse); // false
console.log("isTrue || isFalse")
console.log(isTrue || isFalse); // true
console.log("!isTrue")
console.log(!isTrue); // false
/*
    기타 연산자 (Other Operators)
        삼항 연산자 (Ternary Operator): 조건 ? 참일 때 값 : 거짓일 때 값
        타입 연산자 (Type Operators): typeof, instanceof
*/
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log('canVote')
console.log(canVote); // "Yes"
console.log('typeof 123')
console.log(typeof 123); // "number"
console.log('typeof "Hello"')
console.log(typeof "Hello"); // "string"
console.log('person instanceof Object')
console.log(person instanceof Object); // true


