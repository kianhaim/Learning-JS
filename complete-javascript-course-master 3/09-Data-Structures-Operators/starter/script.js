'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const convert = `${type.startsWith('_Delayed') ? '*' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(convert);
}

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhancement object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}, `
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// //Object Keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire OBJECT
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}

Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon.open);

// With Optional Chaining.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day}, we open at ${open}`);
}
// Methods with optional chaining
console.log(restaurant.order?.(1, 0) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(1, 0) ?? 'Method does not exist.');

// Arrays with optional Chaining
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

//Arrays without optional chaining

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

// Nullish: null and undefined ( NOT 0 or '')
// Correcting the OR operator with a value of 0;
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

const correctGuests = restaurant.numGuest ?? 10;
console.log(correctGuests);

/*
// Use Any Data type, return any Data Type, short-circuiting evaluation.
// With "OR"
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// With AND - Needs to be all truety
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');


// 1. Destructuring
// Rest Pattern
// Spread, Because it is on the Right side of the Equal(=)
const arr = [1, 2, ...[3, 4]];

// Rest, Because its on the left side of the Equal(=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 5, 4, 6, 7);
add(5, 5, 7, 2, 4, 1, 4);

const x = [2, 4, 6, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'perporoni', 'spinach');
restaurant.orderPizza('mushrooms');
// The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

Adding variables on a arrray using spread operator
We can only use it in places that are separate variables with commas.
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// //Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// // Iterables: Arrays, string, maps, sets, NOT OBJECTS
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// console.log(...str);

// Real World Example
const ingredients = [
  prompt(`Let's make pasta, Ingredient 1?`),
  prompt(`Let's make pasta, Ingredient 1?`),
  prompt(`Let's make pasta, Ingredient 1?`),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);
////////////////////////

//Objects
const newRestaurant = { foundIn: 1980, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Wont work
//console.log(`${...str} Schmedtman`);

/// Destructuring Objects
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//Default Value
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Object change name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default value on Objects

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Wrap on a paranthesis

({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);



//////////////////////

///////////////Destucturing ARRAYS


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// With out destucturing / switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//With Destucturing

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, l]] = nested;
console.log(i, j, l);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
*/

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewand', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk, fieldPlayers);
console.log(gk2, fieldPlayers2);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Tiago', 'Coutinho', 'Periscic'];
console.log(players1Final);
//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// or
//const { odds: { team1, x: draw, team2},} = game;

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} number of goals`);
};

printGoals('Kimmich', 'Muller', 'Lewandowski', 'Davies');
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to Win!');
team1 > team2 && console.log('Team 2 is more likely to Win!');

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

//1.
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1} : ${player}`);
}

//2.
const odds = Object.values(game.odds);

console.log(odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log(average);

//3.
console.log(Object.entries(game.odds));
for (const [team, odds] of Object.entries(game.odds)) {
  const oddStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${oddStr}: ${odds}`);
}

///////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//CHeck for the property
console.log(rest.has('categories'));
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Java Script'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question);

// Convert Object to Map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//FOR LOOP on MAPS
//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//Looking for correct answer
const answer = Number(prompt(`Your answer`));
console.log(question.get(question.get('Correct') === answer));

//With if Statement
if (
  answer === question.get('Correct')
    ? console.log(`${question.get(true)}`)
    : console.log(`${question.get(false)}`)
);

Convert map to Array

console.log([...question]);

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
const events = [...new Set(gameEvents.values())];

console.log(events);
gameEvents.delete(64);

console.log(gameEvents);

//BONUS
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  console.log(
    key <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`
  );
}
// WORKING WITH STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/
// Working With Strings - Part 2

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  //const str = String(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let words = text.split('\n');

  for (const [i, j] of words.entries()) {
    const [first, second] = j.toLowerCase().trim().split('_');

    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outPut.padEnd(20)} ${'*'.repeat(i + 1)}`);
  }
});
