  let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
/*   if(score === null)
 if(!score){
   score = {
       wins: 0,
       losses: 0,
       ties: 0
  };
 }*/

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if(!isAutoPlaying){
intervalId = setInterval(() => {
  const playereMove = pickComputerMove();
playGame(playereMove);
},1000);
isAutoPlaying = true;
}
else{
  clearInterval(intervalId);
  isAutoPlaying = false;
}
}
 
document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');})
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');})
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');})

document.body.addEventListener('keydown', (event) => {
if(event.key === 'r'||event.key === 'R'){
  playGame('rock');
}
else if(event.key === 'p'||event.key === 'P'){
  playGame('paper');
}
else if(event.key === 's'||event.key === 'S'){
  playGame('scissors');
}
else{
  alert("Invalid Key! Please enter only R or P or S");
}
})

function playGame(playereMove) {
  let computerMove = pickComputerMove();
  let result = "";
  if (playereMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You Lose";
    } else {
      result = "You Win";
    }
  } else if (playereMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else {
      result = "You Lose";
    }
  } else {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else {
      result = "Tie";
    }
  }
  if (result === "You Win") {
    score.wins++;
  } else if (result === "You Lose") {
    score.losses++;
  } else {
    score.ties++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${playereMove}-emoji.png" class="move-icon"> - <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins} , loses: ${score.losses} , ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
