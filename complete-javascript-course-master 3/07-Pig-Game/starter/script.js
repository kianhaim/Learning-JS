'use strict';
// Selecting Elements for Player 1 and 2
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Stating Condition
let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Current Score
const init = function () {
  //starting Condition
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  //Starting Conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Rolling dice functionality

const switchPlayer = function () {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a Random Dice Roll.
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1, if true
    if (dice !== 1) {
      //Add dice to current score;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    //Switch player.
    else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current to the Active's Score.
    scores[activePlayer] += currentScore;

    // scores[1] = score[1] + currentScore.
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  //2. Check if player score is >== 100.
  if (scores[activePlayer] >= 100) {
    //Finish the Game
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    // remove active player highlight
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    //remove Dice Number
    diceEl.classList.add('hidden');
    //3. Switch Player.
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
