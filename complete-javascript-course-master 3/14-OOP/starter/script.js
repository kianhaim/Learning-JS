'use strict';

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this (create a function on a constructure function)
  // this.calcAge = function () {
  //  console.log(2037 - this.birthYear)
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

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// Coding Challenge #1
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} has a speed of ${this.speed} km/h when accelerating`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `The ${this.make} has a speed of ${this.speed} km/h when braking`
  );
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();

///////////////////////////////////////////////
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype(top of prototype chain)

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 6, 6, 7, 8, 9, 9]; // New Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////

/////////////////Classes//////////////////////

//const PersonCl = class {}

// class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.birthYear = birthYear;
    this.fullName = fullName;
  }
  /// Instance Method
  // Method will be added to prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  /// Set a Property tha already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method

  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Scott', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
//   }

jessica.greet();
PersonCl.hey();
// Classes are NOT HOISTED
// CLASSES are first class Citizens
// Classes are executed in strict Mode

// Not a fullname
// const walter = new PersonCl('Walter', 1965);
//////////////////////////// Get and Set///////////////////////

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

///////////////Object.create////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    return console.log(this.firstName, this.birthYear);
  },
};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1990;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1993);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} has a speed of ${this.speed} km/h when accelerating`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} has a speed of ${this.speed} km/h when braking`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  /// Set a Property tha already exists
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
console.log(ford.speedUS);
