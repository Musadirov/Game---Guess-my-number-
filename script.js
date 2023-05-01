'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display message after clicking on 'Check' button
const messageDisplayed = function (message) {
  document.querySelector('.message').textContent = message;
};

//Display secret number in input field
const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Insert number when click on "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    messageDisplayed('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    messageDisplayed('Correct Number!');
    displaySecretNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageDisplayed(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageDisplayed('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageDisplayed('Start guessing....!');
  displaySecretNumber('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
