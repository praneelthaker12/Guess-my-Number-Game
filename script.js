'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
const displayMessage=function(message){
      document.querySelector('.message').textContent = message

}
document.querySelector('.guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

//////////////////////////Again button functionality/////////////////////////
 document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
 let no= secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = no;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/////////////////////////////check Button Functionality////////////////////////     

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
   displayMessage('NO NUMBER!');
  }



  ///When Player wins///
  else if (guess === secretNumber) {
    displayMessage('Correct Number')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      displayMessage('🎉 Wow! You Made the Highest Score!') 
    }

else if (guess!==secretNumber){
        if (score>1) {
            displayMessage(guess>secretNumber?'TOO HIGH':'TOO LOW')
            score--
            document.querySelector('.score').textContent=score;
        } else {
            displayMessage('YOU LOST THE GAME😭')
            document.querySelector('.score').textContent=0;
        }

    }



    //when Guess is high///
  }
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST THE GAME😭');
      document.querySelector('.score').textContent;
      document.querySelector('body').style.backgroundColor = '#ff0000ff';
    }
  }
  ////When Guess Is Low////
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST THE GAME😭');
      document.querySelector('.score').textContent;
      document.querySelector('body').style.backgroundColor = '#ff0000ff';
    }
  }

  
  })
