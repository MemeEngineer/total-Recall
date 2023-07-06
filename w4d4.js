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


//======== The Farm ========

const animal = "cow"

if(animal === "cow"){
    console.log("Mooooooooo")
}else{
    console.log("Hey! You're not a cow.")
}

//========== Driver's Ed =========

const age = 100

if( age > 16){
    console.log("Here are the keys!")
}else{
    console.log("Sorry, you're too young")
}

//=========== Loops ================
// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

//================= The Basics ==============

for( let i = 0; i <= 10; i++){
    console.log(i)
}

for( let i = 10; i <= 400; i++){
    console.log(i)
}

for( let i = 12; i <= 4000; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}

//========== Get Even ============

for(let i = 1; i < 100; i++){
    if(i % 2 === 0){
        console.log(`${i} <-- is an even number`)
    }else{
        console.log(i)
    }
}


//======= Give me Five ==========

for( let i = 0; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(`I found a ${i}. High five!, Three is a crowd`)
    }else if(i % 5 === 0){
        console.log(`I found a ${i}. High five!`)
    }else if( i % 3 === 0) { 
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

//======= Savings Account =======

let bank_account= 0;

// for( let i= 1; i <= 10; i++){
//     bank_account += i
// }
// console.log(bank_account)

for(let i= 1; i <= 100; i++){
    bank_account += i 
    if(i === 100){
        bank_account *= 2
    }
}
console.log(bank_account)

//======= Arrays & Control Flow =======

// A. Talk About it

/*
What are the things in an array called?
1. element

Do Arrays guarantee those things will be in order?
2. yes

What real-life thing could you model with an array?
3.A line, train, ticket system, basically anything like an object.
*/

// B. Easy Does it

let arr = ["Hello", "World", "!"]

// C. Accessing Elements

const randomThings = [1, 10 , "Hello", true]

// How do you access the 1st element in the array?
// 1 ) randomThings[0]


//Change the value of "hello" to "world"

 randomThings[2] = "world"

// check the value of the array
console.log(randomThings)

//===== Change values ===========

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//What would you write to access the 3rd element of the array?

ourClass[2]
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")

console.log(ourClass)

//====== Mix it up ===

const myArray = [5, 10 , 500, 20]

myArray.push("Aegon", "swag")
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.unshift("Bob Marley")
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.reverse()
console.log(myArray)

// It mutates the array as it calls directly on the array
// Mutate means change
//It returns the array order but opposite



// === Biggies Smalls ======
const int = 3;

if(int <= 100){
    console.log("Little Number")
}else{
    console.log("Big Number")
}


// Monkey in middle
let num = 11
if(num < 5){
    console.log("little number")
}else if( num > 10){
    console.log( "big number")
}else{
    console.log("Monkey")
}

// what's in your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`)
  kristynsCloset.splice(6,0,"raybans")
  kristynsCloset[5]= "stained knit hat"
  console.log(kristynsCloset)

  thomsCloset[0][0]
  thomsCloset[1][0]

  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, ${thomsCloset[2][1]}`)

  thomsCloset[1][2] = "Footie pajamas"

  console.log(thomsCloset)

  //======== Functions ==========

  