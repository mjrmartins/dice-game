'use strict';

let randNumber;
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
let diceRolls = 0;
let score1 = 0;
let score2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
const current1 = document.querySelector('.current1');
const current2 = document.querySelector('.current2');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

if (diceRolls == 0) {
  dice.style.visibility = 'hidden';
}

function clickRoll() {
  randNumber = Math.trunc(Math.random() * 6 + 1);
  diceRolls += 1;

  if (diceRolls >= 1) {
    dice.style.visibility = 'visible';
  }

  if (player1.classList.contains('player--active')) {
    switch (randNumber) {
      case 1:
        dice.src = 'dice-1.png';
        if (player1.classList.contains('player--active')) {
          player1.classList.remove('player--active');
          player2.classList.add('player--active');
        }
        break;
      case 2:
        dice.src = 'dice-2.png';
        break;
      case 3:
        dice.src = 'dice-3.png';
        break;
      case 4:
        dice.src = 'dice-4.png';
        break;
      case 5:
        dice.src = 'dice-5.png';
        break;
      default:
        dice.src = 'dice-6.png';
        break;
    }

    if (randNumber != 1) {
      score1 += randNumber;
    } else {
      score1 = 0;
    }
    scorePlayer1.textContent = score1;
  } else {
    switch (randNumber) {
      case 1:
        dice.src = 'dice-1.png';
        if (player2.classList.contains('player--active')) {
          player2.classList.remove('player--active');
          player1.classList.add('player--active');
        }
        break;
      case 2:
        dice.src = 'dice-2.png';
        break;
      case 3:
        dice.src = 'dice-3.png';
        break;
      case 4:
        dice.src = 'dice-4.png';
        break;
      case 5:
        dice.src = 'dice-5.png';
        break;
      default:
        dice.src = 'dice-6.png';
        break;
    }

    if (randNumber != 1) {
      score2 += randNumber;
    } else {
      score2 = 0;
    }
    scorePlayer2.textContent = score2;
  }

  console.log(randNumber, typeof randNumber); //número no console;
  console.log(diceRolls); //número de jogadas no console;
}

btnRoll.addEventListener('click', clickRoll);

function clickHold() {
  if (player1.classList.contains('player--active')) {
    totalScore1 += score1;
    currentScore1.textContent = totalScore1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    score1 = 0;
    scorePlayer1.textContent = score1;
    if (totalScore1 >= 100) {
      player1.classList.add('player--winner');
      current1.style.backgroundColor = 'rgb(199, 54, 95)';
      btnRoll.removeEventListener('click', clickRoll);
      btnHold.removeEventListener('click', clickHold);
    }
  } else {
    totalScore2 += score2;
    currentScore2.textContent = totalScore2;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    score2 = 0;
    scorePlayer2.textContent = score2;
    if (totalScore2 >= 100) {
      player2.classList.add('player--winner');
      current2.style.backgroundColor = 'rgb(199, 54, 95)';
      btnRoll.removeEventListener('click', clickRoll);
      btnHold.removeEventListener('click', clickHold);
    }
  }
}

btnHold.addEventListener('click', clickHold);

function clickNew() {
  score1 = 0;
  score2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  diceRolls = 0;
  currentScore1.textContent = totalScore1;
  currentScore2.textContent = totalScore2;
  scorePlayer1.textContent = score1;
  scorePlayer2.textContent = score2;
  current1.style.backgroundColor = 'rgb(46, 46, 46)';
  current2.style.backgroundColor = 'rgb(46, 46, 46)';

  if (
    player1.classList.contains('player--winner') ||
    player2.classList.contains('player--winner')
  ) {
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
  }
  btnRoll.addEventListener('click', clickRoll);
  btnHold.addEventListener('click', clickHold);

  if (diceRolls == 0) {
    dice.style.visibility = 'hidden';
  }
}

btnNew.addEventListener('click', clickNew);

/* MODAL */
const btnCloseModal = document.querySelector('.close-modal');
const btnRules = document.querySelector('.btn-rules');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

btnRules.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
