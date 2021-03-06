'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV πΊ', user: 'jonas' },
  { value: -45, description: 'Groceries π₯', user: 'jonas' },
  { value: 3500, description: 'Monthly salary π©βπ»', user: 'jonas' },
  { value: 300, description: 'Freelancing π©βπ»', user: 'jonas' },
  { value: -1100, description: 'New iPhone π±', user: 'jonas' },
  { value: -20, description: 'Candy π­', user: 'matilda' },
  { value: -125, description: 'Toys π', user: 'matilda' },
  { value: -1800, description: 'New Laptop π»', user: 'jonas' },
]);

// budget[0].value = 10000;

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;
//console.log(spendingLimits);
// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

////// doest mutate and objec its called a Pure Function ///////////////////////
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza π');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'MoviesπΏ',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

//console.log(newBudget1);
//console.log(newBudget2);

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });

//   // for (const entry of budget)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
//console.log(finalBudget);

////////// IMPURE function /////////////////
const logBigExpenses = function (state, bigLimit) {
  let bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

console.log(budget);
logBigExpenses(finalBudget, 500);
