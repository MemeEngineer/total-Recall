// ======= JavaScript Review Lab =========

//======== Variables & Datatypes =========

/*
How do we assign a value to a variable?
1. const variable = value or let variable = value
using an variable name and a = sign

How do we change the value of a variable?
2. reassign the value of the variable 
variable = newValue

How do we assign an existing variable to a new variable?
3. Pass the value to the new variable by reference
  
let A = 123;
let B = A;

Remind me, what are the declare, assign, and Define?
4. Declare tells what the datatype of the variables are going to be: string, Int, etc... has global scope, permanent and immutable.

const A;

Assign is giving the variable a value: 123, "hello", etc..
const A = 123;

Define is an expression object, no permanence and is mutable. It is referenced and can vanish from memory.

What is pseudocoding and why should you do it?
5. Pseudocoding is solving the problem in steps logically in terms you can break down before doing any code. If you can solve the problem with words/steps you already have 90% solved the problem before coding it helps people breakdown the problem into managable pieces. Coding is just putting the steps into action.

What percentage of time should be spent thinking about how you're going to solve a problem vs acutally typing in code to solve it?
6. spend more time solving the problem 90% and 10% coding because if you can solve it without coding then the rest will be easy to put the code to work.
*/

//======= Strings =========

// const firstVariable = "Hello World"
// firstVariable = 123
// const secondVariable = firstVariable
// secondVariable = "string"
// console.log(firstVariable)
//error because we cannot reassign a string
const yourName = "Johnny"
console.log(`Hello, my name is ${yourName}`)


//======== Booleans =========

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a <= b);
console.log(c >= d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');