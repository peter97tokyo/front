/* 
1. 조건문 (Conditional Statements)
    조건문은 특정 조건에 따라 코드 블록을 실행하거나 실행하지 않도록 하는 데 사용됩니다.

if 문 (if statement)
*/
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
/* 
if...else 문 (if...else statement)
*/
let human = 16;

if (human >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
/* 
else if 문 (else if statement)
*/
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
/* switch 문 (switch statement) */
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

/* 2. 반복문 (Loops)
반복문은 특정 코드 블록을 여러 번 실행하는 데 사용됩니다.

for 문 (for loop)
*/
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
/* 
while 문 (while loop)
*/
let count = 0;

while (count < 5) {
  console.log("Count:", count);
  count++;
}
/* 
do...while 문 (do...while loop) 
do...while 문은 코드를 최소한 한 번 실행하고, 조건이 참인 동안 계속 실행합니다.
*/
let cnt = 0;

do {
  console.log("cnt:", cnt);
  cnt++;
} while (cnt < 5);
/* 
for...of 문 (for...of loop) 
for...of 문은 배열, 문자열 등 반복 가능한 객체의 요소를 순회합니다.
*/
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
/* 
for...in 문 (for...in loop) 
for...in 문은 객체의 열거 가능한 속성을 순회합니다.
*/
let person = {
  name: "Alice",
  age: 25
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}


