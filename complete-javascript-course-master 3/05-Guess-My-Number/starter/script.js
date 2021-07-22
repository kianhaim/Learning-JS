'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//STATE DATA
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //NO INPUT
  if (!guess) {
    displayMessage('No Number');
    //PLAYER WINS
  } else if (guess === secretNumber) {
    // reveal number
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!');
    // Change background Color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change Number width
    document.querySelector('.number').style.width = '40rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessgae(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = '0';
    }
  }

  //TOO HIGH
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOST!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //TOO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too LOW!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOST!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  // Change background Color
  document.querySelector('body').style.backgroundColor = '#222';
  // Change Number width
  document.querySelector('.number').style.width = '15rem';
});
