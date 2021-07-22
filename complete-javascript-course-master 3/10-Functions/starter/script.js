'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 1.99 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 12);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Shmedtmann',
  passport: 2331551515,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 2331551515) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//IS the same as Doing..
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas.passport);

// First Class Function and Higher Order Function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher order Function

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by this function: ${fn.name}`);
};

transformer('Javascript is the best Programming language', upperFirstWord);
transformer('Javascript is the best Programming language', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('5');
};

//document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Function returning function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Arrow Function returning another function
const greeter = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Kian');

greet('Hello')('Jonas');
greeter('Hello')('Jonas');

// Manually Manipulating the this keyword on a function.
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does Not Work
//book(23, 'Sara Williams');

book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 34, 'Mary Copper');
console.log(swiss);

// Apply Method works the same as the Spread operator

const flightData = [594, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// or

book.call(swiss, ...flightData);

// Bind Method creates a new copy of the method(function)
// book.call(eurowings, 23, 'Sara Williams'); same
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven William');

// Pre Setting a Bind method;

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmendt');
bookEW23('Martha Cooper');

// With Event Listeners - need to define the this keyword

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  //console.log(this);
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

// WITH Noramal Function - 1
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
console.log(addTax2(0.23)(100));

// Arrow Function - 2
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// With BIND -

const addVAT2 = addTax2.bind(null, 0.23);
//console.log(addVAT2(100));
//console.log(addVAT2(23));

// With BIND - 2
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  resisterNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write Optional Number)`
      )
    );
    console.log(answer);

    // Checking the Answer typeOf, if its a relevant answer(0-3)
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },

  displayResult(type = 'array') {
    //  console.log(`${this.answers}`);
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.resisterNewAnswer.bind(poll));
//console.log(poll.answers);
//poll.resisterNewAnswer();
//displayResult();

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
//[(1, 5, 3, 9, 6, 1)];

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

///////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

console.dir(f);

h();
f();

console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 4);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
