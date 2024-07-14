'use strict';

let secretNumber;
let score = 20;
let highscore = 0;
let winner = false;

generateSecretNumber();

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const backgroundColor = function (color) {
  document.querySelector(`body`).style.backgroundColor = color;
};

function changeScore() {
  document.querySelector(`.score`).textContent = score;
}

function generateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (score && !winner && guess < 21) {
    if (!guess || guess < 0) {
      displayMessage(`⛔ No number!`);
    } else if (guess === secretNumber) {
      displayMessage(`🎉 Correct number!`);
      backgroundColor(`green`);
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      winner = true;
    } else {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      changeScore();
    }
  } else if (score < 1 && !winner) {
    displayMessage(`💥 You lost the game!`);
    document.querySelector(`.score`).textContent = 0;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  if (winner) {
    highscore =
      score > Number(document.querySelector(`.highscore`).textContent)
        ? score
        : highscore;
    winner = false;
  }
  score = 20;
  generateSecretNumber();
  changeScore();
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = '?';
  backgroundColor(`#222`);
  document.querySelector(`.guess`).value = '';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector(`.highscore`).textContent = highscore;
});
