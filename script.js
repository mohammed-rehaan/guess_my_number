'use strict';

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log('Yahan Kya Dekhra Ghode ππ΄ππ ');

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);





    if (!guess) {
        document.querySelector('.message').textContent = 'β No Number';
    }

    else if (guess === number) {


        document.querySelector('.message').textContent = 'πCorrect Number';

        document.querySelector('.number').textContent = number;

        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;


        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';


        let clear = document.getElementById('gues').value = ' ';
        
    }

    else if (guess !== number) {
        if (score > 0) {
            document.querySelector('.message').textContent = guess < number ? ' π Too Low' : ' π Too High';

            document.querySelector('.score').textContent = --score;
        }

        else {

            document.querySelector('.message').textContent = 'πLives Exhausted . You Lose π’';
        }

        let clear = document.getElementById('gues').value = ' ';



    }
    // else if (guess < number) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = ' π Too Low';

    //         document.querySelector('.score').textContent = --score;
    //     }

    //     else {

    //         document.querySelector('.message').textContent = 'πLives Exhausted . You Lose π’';
    //     }

    // }
    // else if (guess > number) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = ' π Too High';

    //         document.querySelector('.score').textContent = --score;
    //     }

    //     else {

    //         document.querySelector('.message').textContent = 'πLives Exhausted . You Lose π’';
    //     }
    // }



});

document.querySelector('.again').addEventListener('click', function () {


    number = Math.floor(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.guess').value = ' ';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...';
})