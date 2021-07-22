'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

// Functions

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance,
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// Calculate/ Display  Balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} USD`;
};
//calcDisplayBalance(account1.movements);

// Calculate Income

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}$`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}$`;
};
//calcDisplaySummary(account1.movements);

//const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
//console.log(accounts);

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`Login`);
    // Display UI and Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input fields

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // function that display Movements, balance and summary
    updateUI(currentAccount);
  } else console.log(`Incorrect Username or Pin`);
});
// Transfer Money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, currentAccount, receiverAcc);

  //Clears the input
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  } else {
    console.log('Loan Denied(must be equivalent to 10%');
  }
  // CLear input
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //console.log(index);

    // DELETE ACCOUNT
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log(`Wrong Username or Password`);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////

//const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// LECTURES

const arr5 = [1, 3, 4, 5, 6, 7];
arr5.unshift('start');
arr5.push('end');
console.log(arr5);

const arr6 = [1, 3, 4, 5, 6, 7];
const newArray = ['start', ...arr6, 'end'];
console.log(newArray);

const arr7 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty Arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
console.log(x);
x.fill(1);
console.log(x);

arr7.fill(23, 2, 6);
console.log(arr7);

// Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Best Use case of Array.from is to convert a DOM in to a array
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  //console.log(movementsUI2);
});

//console.log(movements);
////////////////////////////

// Array Method Practice
// Exercise 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0);
// .reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum);

// Exercise 2.
// First Solution
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
//Second Solution with Reduce
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposit1000);

// Prefixed ++ Operator
let a = 10;
console.log(++a);
console.log(a);

//Exercise 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      //
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);
// Exercise 4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exception = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/////////////////////////
///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)


*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (dogs) {
  dogs.recommended = Math.trunc(dogs.weight ** 0.75 * 28);
});

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const sarahsDog = dogs.find(dogs => dogs.owners.includes('Sarah'));
console.log(sarahsDog);
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recommended ? 'much' : 'little'
  }`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommended)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommended)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s eat too little!`);
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some(dogs => dogs.curFood === dogs.recommended));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const dogsEatingOkay = dog =>
  dog.curFood > dog.recommended * 0.9 && dog.curFood < dog.recommended * 1.1;

console.log(dogs.some(dogsEatingOkay));

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log(dogs.filter(dogsEatingOkay));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const dogsSorted2 = dogs.slice().sort((a, b) => a.recommended - b.recommended);
console.log(dogsSorted2);
// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];

// GOOD LUCK 😀

//EQUALITY
console.log(movements.includes(-130));

//SOME -  returns true if some of the elements returns hits the condition(true)

console.log(movements.some(mov => mov > 4000));

const anyDeposite = movements.some(mov => mov > 1500);
console.log(anyDeposite);

// Every Method - only returns true if all the elements in the array returns true(condition)
console.log(movements.every(mov => mov > 0));
console.log(account4.movements);
console.log(account4.movements.every(mov => mov > 0));

// Sperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Flat Method

const arr1 = [[1, 2, 3], 4, 5, [6, 7, 8]];
console.log(arr1.flat());

const arrDeep = [[1, [2, 3]], 4, 5, [6, [7, 8]]];
console.log(arrDeep.flat(2));

// FLAT MAP METHOD - only goes 1 level of flattening the arrays

const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

// without flatMap method
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// SORTING ARRAY
// Sort method - sorts array elements in alphabetical order(strings)
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
//Sort Mutated the array
console.log(owners);

//Numbers
console.log(movements);

// returns < 0 - A, B (Keeps order)
// return > 0 - B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);

// FOR EACH ON MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// SETS

const currenciesUnique = new Set(['USD', 'GDP', 'USD', 'EUR', 'GDP', 'USD']);
//console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}}`);
// });

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - SHALLOW COPY

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

//SPLICE - MUTATES
arr.splice(-1);
//console.log(arr);
arr.splice(1, 2);

//console.log(arr);

// REVERSE - MUTATES ARRAYS

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//CONCAT - Doesnt Mutate the array
const letters = arr.concat(arr2);
// console.log(letters);

// console.log([...arr, ...arr2]);

// // Join

// console.log(letters.join(' - '));

// FOR EACH METHOD

//-- FOR OF LOOP over a array

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${Math.abs(movement)} to your account`);
//   } else {
//     console.log(`You Withdraw ${Math.abs(movement)} to your account`);
//   }
// }

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    //   console.log(
    //     `Movement ${i + 1}: You deposited ${Math.abs(movement)} to your account`
    //   );
  } else {
    //   console.log(
    //     `Movement ${i + 1}: You Withdraw ${Math.abs(movement)} to your account`
    //   );
  }
}

// WITH FOR EACH
//console.log('-------------');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${Math.abs(movement)} to your account`);
//   } else {
//     console.log(`You Withdraw ${Math.abs(movement)} to your account`);
//   }
// });

// (VALUE, INDEX and ARRAY)
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(
//       `Movement ${index + 1}: You deposited ${Math.abs(
//         movement
//       )} to your account`
//     );
//   } else {
//     console.log(
//       `Movement ${index + 1}: You Withdraw ${Math.abs(
//         movement
//       )} to your account`
//     );
//   }
// });

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// First Solution

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJuliaCorrected = dogsJulia.slice(1, 3);

// console.log(dogsJuliaCorrected);

// const dogsSorted = [...dogsJuliaCorrected, ...dogsKate];
// console.log(dogsSorted);

// const checkDogs = function () {
//   dogsSorted.forEach(function (age, i) {
//     if (age > 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
//     } else {
//       console.log(
//         `Dog number ${i + 1} is still a puppy, and is ${age} years old. `
//       );
//     }
//   });
// };
// checkDogs();
/*
// Second Solution
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, 3);
  //const dogs = [...dogsJuliaCorrected, ...dogsKate];

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy, and is ${age} years old. `
      );
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-----------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/// MAP METHOD!!!!



const euroToUsd = 1.1;
// NORMAL CALL BACK FUNCTION
// const movementsUSD = movements2.map(function (mov) {
//   return mov * euroToUsd;
// });
// ARROW CALL BACK FUNCTION
const movementsUSD = movements2.map(mov => mov * euroToUsd);

console.log(movements2);
console.log(movementsUSD);

// FOR OF method
const movementsUSDfor = [];

for (const mov of movements2) movementsUSDfor.push(mov * euroToUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
//{
// if (mov > 0) {
//   return `Movement ${i + 1}: You deposited ${mov}`;
// } else {
//   return `Movement ${i + 1}: You Withdraw ${Math.abs(mov)}`;
// }
// }
console.log(movementsDescriptions);

// FILTER CALLBACK FUNCTION

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// WITH FOR OF LOOP

const depositsFor = [];

for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// REDUCE CALLBACK FUNCTION

// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i) {
//   console.log(`Integration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// ARROW FUNCTION format
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//FOR OF LOOP

let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

// MAximum Value

const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const ages = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(age => age >= 18);
//   const averageHumanAge =
//     humanAge.reduce((acc, age) => acc + age, 0) / humanAge.length;

//   // const averageHumanAge =
//   //humanAge.reduce((acc, age, i, arr) => age + cur / arr.length, 0)
//   console.log(`The average human age of the dogs is ${averageHumanAge}`);
//   console.log(humanAge);
// };

const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const averageHumanAge =
//humanAge.reduce((acc, age, i, arr) => age + cur / arr.length, 0)
// console.log(`The average human age of the dogs is ${averageHumanAge}`);
// console.log(humanAge);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

// Find Method - returns first match or firs element that matches.

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

//console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
//console.log(account);

// FOR LOOP

for (const acc of accounts) if (acc.owner === `Jessica Davis`) console.log(acc);

// Filter Method

const acco = accounts.filter(acc => acc.owner === `Jessica Davis`);
//console.log(acco);
*/
