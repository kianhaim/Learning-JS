/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

//MY ANSWER

/*

const markMass = 79;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string..`);

console.log("String with \n multiple \n line");

console.log(`String with
multiple
lines`);

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
  );
}

// type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.loh(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coersion

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1; // 11 - 1
console.log(n); // 10


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀


// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//   console.log(
//     `Dolphines wins the competition with an average score of ${averageDolphins}!`
//   );
// } else if (averageKoalas > averageDolphins) {
//   console.log(
//     `Koalas wins the competition with an average score of ${averageKoalas}!`
//   );
// } else if (averageDolphins === averageKoalas) {
//   console.log(`The competition is a draw!`);
// }
//Bonus
const averageDolphins = (109 + 95 + 123) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(
    `Dolphines wins the competition with an average score of ${averageDolphins}!`
  );
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log(
    `Koalas wins the competition with an average score of ${averageKoalas}!`
  );
} else if (
  averageDolphins === averageKoalas &&
  averageKoalas >= 100 &&
  averageDolphins >= 100
) {
  console.log(`The competition is a draw!`);
} else {
  console.log(`No one wins the competition!`);
}


//SWITCH STATEMENT

const day = "saturday";

switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepar Theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write theory videos`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend!`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Prepar Theory videos`);
} else if (day === "wednesday" || day === "thurday") {
  console.log(`Write theory videos`);
} else if (day === "friday") {
  console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend!`);
} else {
  console.log(`Not a valid day!`);
}



// Conditional Ternary Operator

const age = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

//if statement
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// Coding Challenge #4


// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀
*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bills was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
