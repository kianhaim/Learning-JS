'use strict';
/*
//FUNCTIONS
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const orangeJuice = fruitProcessor(0, 3);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(4, 4);
console.log(appleOrangeJuice);

//FUNCTION DECLARATION - you can call it before defining it.
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// FUNCTION EXPRESSION - you can't call it before defining it.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age2);

// ARROW FUNCTION - you cant put 'this' keywords.

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1993); // no return when only one logic.
console.log(age3);

//ARROW FUNTION with 2 logic

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retirement in ${retirement} years.`; // return second logic which is retirement. or returns a template literals
};

console.log(yearUntilRetirement(1994, "Jonas"));
const age4 = yearUntilRetirement(1995, "Xonas");
console.log(age4);

// CALLING A FUNCTION INSIDE A FUNCTION

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juices with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(5, 5));

// Normal Function
const calcAge = function (birthYear) {
  return 2020 - birthYear;
};

const calcRetirement = function (age) {
  return 65 - age;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const yearsRetirement = calcRetirement(age);
  if (yearsRetirement > 0) {
    return `${firstName} retires in ${yearsRetirement} years.`;
  } else {
    return `${firstName} is already retired.`;
  }
};

console.log(yearUntilRetirement(1950, "Jonas"));

/*
Function Declaration - Function that can be used before its declared.
function calcAge(birthYear) {
    return 2037 - birthYear;
}

Function Expression - Essentially a function value stored in a variable.
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

Arrow Function - Great for a quick one line functions. Has no this keyword.

const calcAge = birthYear => 2037 - birthYear;



// CODING CHALLENGE

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreKoalas = calcAverage(65, 54, 200);
let scoreDolphines = calcAverage(44, 23, 71);

console.log(scoreKoalas, scoreDolphines);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Team Dolphins wins the competition with an average score of ${avgDolphins}`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Team Koala wins the competition with an average score of ${avgKoalas}`;
  } else {
    return `No team wins the competition.`;
  }
};
console.log(checkWinner(scoreKoalas, scoreDolphines));

scoreKoalas = calcAverage(70, 50, 200);
scoreDolphines = calcAverage(80, 40, 600);
console.log(scoreKoalas, scoreDolphines);
console.log(checkWinner(scoreKoalas, scoreDolphines));

// ARRAYS

const friends = ["Michael", "Steve", "Peter"];
console.log(friends);

const years = new Array(1990, 1984, 2004, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// You cant change the entire arrays content.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

// Coding Challenge #2


Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const bills = [125, 555, 44];
// // IF ELSE FUNCTION
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };
// Ternary Function
/* const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Arrow Function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

// OBJECTS

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
// Dot notation you cant put calculations
console.log(jonas.lastName);
// Brackets you can put statement/calculaton/compute
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);



console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and has best friends is called ${jonas.friends[0]}.`
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

jonas.calcAge();

console.log(jonas.summary());

//CHALLENGE
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
  );
}

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

const jonas = [
  "Jonas",
  "Schnedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  //Filling Types Array
  //types[i] = typeof jonas[i];

  //Add Array
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// CONTINUE and BREAK
console.log("----Only Strings----");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("----Break with Number----");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}


//LOOPING BACKWARDS

const jonas = [
  "Jonas",
  "Schnedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`${exercise} ---- Stating exercise----`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`${exercise} Lifting weight repetion ${rep}.`);
  }
}

//WHILE LOOP

let exercise = 1;
while (exercise < 4) {
  console.log(`${exercise} -WHILE LOOP---Start Exercise----`);
  exercise++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You'll the dice Number ${dice}`);
}

// Exercise
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  //Filling Types Array
  //types[i] = typeof jonas[i];

  //Add Array
  types.push(typeof jonas[i]);
}
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
console.log(totals.length);

// AVERAGE A ARRAY
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 5]));
console.log(calcAverage(totals));
console.log('asdasdad');

const calcAge = birthYear => 2037 - birthYear;
