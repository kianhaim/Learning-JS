'use strict';

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1997);
const matt = new Person('Matt', 2017);
console.log(jonas);
console.log(matilda);
console.log(matt);
