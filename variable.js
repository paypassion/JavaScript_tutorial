// whole-script strict mode syntax
// JavaScript is very flexible 
// flexible === dangeruous
// 1. Use strict
// added in ES 5
// use this for Vanilla JavaScript.
'use strict';
console.log(age);

// 2. Variable rw(read/write)
// let (added in ES6)
let globalName = 'global name';

{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log('global name');
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
age = 4;
var age;
}
console.log(age);

// 3. Contant, r(read only)
// use const whenever possible.
// only use lef if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive type, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safty
//  - reduce human mistakes

// 4. Variable types

// primitive, single item: number, string, boolean, null, undefined, symbol -> 값 자체가 메모리에 저장된다.
// object, box container -> object를 가르키는 reference가 메모리에 저장된다. ref는 바꿀 수 없지만, ref가 가르키는 다른 변수는 변경이 가능하다.
// function, first-class fuction

const count = -17; // integer (정수)
const size = -17.1; // decimal number 
console.log(`value: ${count}, type: ${typeof count}`); // Use `(backtick) not '(single quote) when you use literal template 
console.log(`value: ${size}, type: ${typeof size}`);

// 숫자는 어떤 값을 넣어도 알아서 number로 타입을 분류한다.

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const aNa = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(aNa);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string 
const char = 'c'; 
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hellobob = `hi ${brendan}`; //template literals (string)
console.log(`value: ${hellobob}, type: ${typeof hellobob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
console.log(symbol1 === symbol1); // true
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age= 21;

// 5. Dynamic typing:  dynamically typed language (JavaScript의 하이라이트!) 

let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // vaule: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // vaule: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string / -> 5를 string으로 인식함.
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number / -> 나누기 연산자와 스트링의 내용을 보고 숫자로 인식함.
console.log(text.charAt(0)); // TypeError 