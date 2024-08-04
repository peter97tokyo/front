// 1. let과 const
// let은 블록 스코프 변수 선언
let variableLet = "이것은 let 변수입니다";
variableLet = "업데이트된 let 변수";

// const는 상수 선언, 값을 변경할 수 없음
const variableConst = "이것은 const 변수입니다";
// variableConst = "const 변수 업데이트 시도"; // 오류 발생: Assignment to constant variable

// 2. 화살표 함수
// 화살표 함수는 간결한 함수 선언
const add = (a, b) => a + b;
const resultAdd = add(5, 3); // 8

// 3. 템플릿 리터럴
// 템플릿 리터럴을 사용하면 문자열 내에 변수와 표현식을 삽입 가능
const name = "John";
const greeting = `안녕하세요, ${name}!`; // 안녕하세요, John!

// 4. 디스트럭처링 할당
// 배열 디스트럭처링
const array = [1, 2, 3];
const [first, second, third] = array;
console.log(first, second, third); // 1 2 3

// 객체 디스트럭처링
const person = {
    firstName: "Jane",
    lastName: "Doe"
};
const { firstName, lastName } = person;
console.log(firstName, lastName); // Jane Doe

// 5. 스프레드 연산자
// 배열 스프레드
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// 객체 스프레드
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 6. 디폴트 매개변수
// 함수 매개변수의 기본값을 설정
const multiply = (a, b = 2) => a * b;
console.log(multiply(5)); // 10 (b의 기본값 2 사용)
console.log(multiply(5, 3)); // 15 (b에 3을 전달)

// 7. 나머지 매개변수
// 나머지 매개변수를 사용하여 가변 인자 함수를 작성
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4)); // 10

// 8. 클래스
// 클래스 문법을 사용하여 객체 지향 프로그래밍 지원
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `안녕하세요, 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`;
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.greet()); // 안녕하세요, 제 이름은 Alice이고, 나이는 30살입니다.

// 9. 모듈 (이 파일이 모듈로 사용된다고 가정)
// 모듈에서 함수나 변수를 내보내고 가져올 수 있음
// import { someFunction } from './anotherFile.js';
// export const anotherFunction = () => { /* ... */ };

// 10. 프로미스
// 비동기 작업을 다루기 위한 프로미스 사용
const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("작업 성공");
    }, 1000);
});

asyncOperation.then(result => console.log(result)); // 작업 성공

// 11. async/await
// 비동기 함수를 작성하기 위한 async/await 사용
const fetchData = async () => {
    const data = await asyncOperation;
    console.log(data); // 작업 성공
};

fetchData();
