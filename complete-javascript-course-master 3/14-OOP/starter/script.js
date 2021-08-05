'use strict';

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this (create a function on a contucture function)
  // this.calcAge = function () {
  //  console.log()
  //}
};

// New {} is created
// Function is call, this = {}
//{} link to prototype
// function automatically return {}
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1997);
const matt = new Person('Matt', 2017);
console.log(jonas);
console.log(matilda);
console.log(matt);

// True
console.log(jonas instanceof Person);
