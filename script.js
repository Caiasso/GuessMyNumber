'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let winner = false;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector(`.guess`).value);

    if(score > 1 && !winner && guess < 21)
    {
        if(!guess)
        {
            document.querySelector(`.message`).textContent = `⛔ No number!`;
        }
        else if(guess === secretNumber)
        {
            document.querySelector(`.message`).textContent = `🎉 Correct number!`;
            document.querySelector(`body`).style.backgroundColor = `green`;
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            winner = true;
        }
        else if(guess > secretNumber)
        {
            document.querySelector(`.message`).textContent = `📈 Too high!`;
            score --;
            document.querySelector(`.score`).textContent = score;
        }
        else
        {
            document.querySelector(`.message`).textContent = `📉 Too low!`;
            score --;
            document.querySelector(`.score`).textContent = score;
        }
    }

    else if(score < 1 && !winner){
        document.querySelector(`.message`).textContent = `💥 You lost the game!`;
        document.querySelector(`.score`).textContent = 0;
    }

})

document.querySelector(`.again`).addEventListener(`click`, function(){
    winner = false;
    highscore = score > Number(document.querySelector(`.highscore`).textContent) ? score : highscore;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.number`).textContent = '?';
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.guess`).value = '';
    document.querySelector('.number').style.width = '15rem';


    document.querySelector(`.highscore`).textContent = highscore;
    
})