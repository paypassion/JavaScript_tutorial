// whole-script strict mode syntax
// JavaScript is very flexible 
// flexible === dangeruous
// 1. Use strict
// added in ES 5
// use this for Vanilla JavaScript.
'use strict';
console.log(age);
// 2. Variable
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

// 3. Contants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safty
//  - reduce human mistakes

// 4. Variable types

// primitive, single item
// object, box container
// function, first-class fuction