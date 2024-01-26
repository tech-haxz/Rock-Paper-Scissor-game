let userScore = 0;
let computerScore = 0;

let msgBox = document.querySelector("#msg");
let usrScoreBox = document.getElementById("user-score");
let compScoreBox = document.getElementById("computer-score");

const choices = document.querySelectorAll(".choice");

const randomNumber = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return randomNum;
};

const computerChoice = () => {
  let randomIdx = randomNumber();
  const randomChoice = ["rock", "paper", "scissors"];
  let compRandomChoice = randomChoice[randomIdx];
  return compRandomChoice;
};

const drawGame = () => {
  msgBox.textContent = "Match  Draw";
  msgBox.style.backgroundColor = "black";
};

const showWinner = (winner, usrchoice, compChoice) => {
  if (winner) {
    userScore++;
    msgBox.textContent = `Congratulations! you won your ${usrchoice} beats ${compChoice}`;
    msgBox.style.backgroundColor = "green";
    usrScoreBox.textContent = userScore;
  } else {
    computerScore++;
    msgBox.textContent = `You lose ! Computer ${compChoice} beats your ${usrchoice}`;
    msgBox.style.backgroundColor = "red";
    compScoreBox.textContent = computerScore;
  }
};

const Game = (usrchoice) => {
  let compChoice = computerChoice();
  let userwin = true;

  if (usrchoice === compChoice) {
    drawGame();
  } else {
    if (usrchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (usrchoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else if (usrchoice === "scissors") {
      userwin = compChoice === "rock" ? false : true;
    }

    showWinner(userwin, usrchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.id;
    Game(userchoice);
  });
});
