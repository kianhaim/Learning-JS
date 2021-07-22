'use strict';
/*
// function calcAge(birthyear) {
//   const age = 2037 - birthyear;

//   function printAge() {
//     const outPut = `${firstName}, you are ${age}, born in ${birthyear}`;
//     console.log(outPut);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;
//       const str = `Oh and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     // console.log(str) cant be accessed because its a const or Let.
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// console.log(calcAge(1991));

// Hoisting

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));


//Function Declaration works
function addDecl(a,  b) {
  return a + b;
};
//undefine
const addExpr = function(a,b) {
  return a + b;
};
//not a function
var addArrow = (a, b) => a + b;



//Example
console.log(undefined);

if (!numProducts) deleteShoppingCart();
// Hoisting var made the numProducts false value.
var numProducts = 10;

function  deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log( x === window.x);
console.log( y === window.y);
console.log( z === window.z);



// this Keyword Examples

// Window or the Global Window
console.log(this);


// Undefined (when not in a object or method)
const calcAge = function (birthyear) {
  console.log( 2037 - birthyear);
  console.log(this);
} 

calcAge(1993);


//Lexical this Keyword or the window (global scope)
const calcAgeArrow = birthyear => {
  console.log( 2037 - birthyear);
  console.log(this);
} 
calcAgeArrow(1990);

//this keyword on a Method

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;


// Arrow Function with this keyword (arrows dont get this keywords it points in to the global or parent scope)

// firstName declared by var is made as global firstName variable.
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
*/
//Primitives vs Objects

//Primitive Types
let lastName = 'Williams';
let oldName = lastName;
lastName = 'Davis';
console.log(lastName, oldName);

//Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marraige: ', jessica);
console.log('After marraige: ', marriedJessica);

//Copying Objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marraige: ', jessica2);
console.log('After marraige: ', jessicaCopy);
