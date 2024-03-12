// 1. String concatenation  문자열 연결
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('ellie\'s \n\tbook') 

// 2. Numeric operators 숫자 연산자
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나누고 나머지 값
console.log(2 ** 3); // exponentiation 제곱 

// 3. Increment and decrement operators 증감 연산자
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter} `)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter--;
console.log(`postDecrement: ${preDecrement}, counter: ${counter}`)

// 4. Assignment operators 복합 대입 연산자
let x = 3;
let y = 6;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);

// 5. Comparison operators 비교 연산자 
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators 논리 연산자: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// 6-1. || (or), finds the fisrt truthy vaule // 하나라도 true가 있으면 true
console.log(`or" ${value1 || value2 || check()}`); // true 
// 앞에서 부터 출력하기 때문에 만약 value1 = true라면 check 연산 없이 바로 true 출력.
// 무거울 수록 뒤에 배치한다. 고로 함수나 expression은 뒤에 두어서 빨리 출력 되도록 해야 한다. 

// 6-2. && (and), finds the first falsy value // 하나라도 false가 있으면 false
console.log(`and: ${value1 && value2 && check()}`); 
// 같은 이유로 무거울 수록 뒤에 배치한다.

// often used to compress long if-statement
// nullableObject && nullableObject.something // null일 때만 뒤에 something을 가져와라
//if (nullableObject !=null) {nullableObject.somthing}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time 
    console.log('😱');
  }
  return true;
} 

// 6-3. !(not)
console.log(!value1); // true // 반대 결과를 가져옴

// 7. Equality 동등 연산자
const stringFive = '5';
const numberFive = 5;

// === type strict equality
// loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false // !=: 같지 않다 

// strict equality, with no type conversion
console.log(stringFive === numberFive); // true
console.log(stringFive !== numberFive); // false

// object equality by reference 
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // 다른 ref가 저장되어있다.
console.log(ellie1 === ellie2); // 타입이 같든지 그렇지 않든지 다른 ref가 저장되어있다.
console.log(ellie1 === ellie3);

// equality - puzzler 
console.log(0 == false);  
console.log(0 === false); 
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// t
// f 0은 boolean이 아니다
// t
// f ''은 boolean이 아니다
// 특별한 규칙으로 둘은 같다.
// 둘은 서로 다른 데이터 타입니다.

// 8. Conditional operators: if // 조건문, if
// if, else if, else

const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are an amazing coder');  
} else {
  console.log('unknown')
}

// 9. Ternary operator: ? 
// condition ?  value1: value2;
// 값을 할당하거나 간단하게 출력할 때만 이용
console.log(name === 'ellie' ? 'yes' : 'no')  // true 면 yes, 아니면 no

// 10. Switch statement 
// use for multiple if checks // else if를 많이 반복해야하는 경우
// use for eunm-like value check 
// use for multiple type checks in TS  // TS에서 정해져있는 타입을 검사하는 경우
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all bitches!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// while ()의 내용이 false가 나오기 전까지 {}를 반복한다.

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 블럭을 먼저 실행하고 싶으면 do while을 쓰고, 조건문이 맞을 때만 블럭을 실행하고 싶으면 while을 써야 한다.

// 12. for loop, for(begin; condition; step)
// begin은 처음에 한번만 실행된다.
// block을 실행하기 전에 condition을 검사하고, 
// block을 실행이 되면 step을 실행한다.
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
   // inline variable declaration 변수를 for 안에서 정의하는 것이다.
  console.log(`inline variable for: ${i}`)
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}
// O가 n의 2승입니다에는 부적합하다. (질문!)

// break (loop를 끝냄), continue(지금 것 만 skip, 다음 step으로 넘어간다) 
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (i = 0; i <11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1.${i}`)
}

// 실제론 이렇게 쓰는 게 좋다

for (i = 0; i <11; i++) {
  if (i % 2 === 0) {
    console.log(`q1.${i}`);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (i = 0; i <11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2.${i}`)
}

// 구구단 만들기

//for (let i = 0; i < 10; i++) {
//  for (let j = 0; j < 10; j++) {
//   console.log(`i: ${i}, j:${j}`);
//  }


for (i = 1; i < 10; i++) {
for (j = 1; j < 10; j++) {
  console.log(`${i} * ${j} = ${i*j}`);
} 
}
