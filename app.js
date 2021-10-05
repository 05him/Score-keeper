let playerOneScore = document.querySelector(".player-1-score");
let playerTwoScore = document.querySelector(".player-2-score");
let rounds = document.querySelector("#rounds");
let start = document.querySelector(".start");
let playerOneBtn = document.querySelector(".player-1-btn");
let playerTwoBtn = document.querySelector(".player-2-btn");
let reset = document.querySelector(".reset");
let restart = document.querySelector(".restart");
let output = document.querySelector(".output");

playerOneBtn.style.display = "none";
playerTwoBtn.style.display = "none";
reset.style.display = "none";
restart.style.display = "none";
output.style.color = "red";

function scoreIncrease(name) {
  name.innerText = Number(name.innerText) + 1;
}

function results(winner, looser) {
  winner.style.color = "green";
  looser.style.color = "red";
  output.textContent = "Winner is " + winner.getAttribute("data");
}

function restartHandler() {
  playerOneBtn.style.display = "none";
  playerTwoBtn.style.display = "none";
  playerOneScore.textContent = "0";
  playerTwoScore.textContent = "0";
  output.textContent = "";
  reset.style.display = "none";
  restart.style.display = "none";
  playerOneBtn.disabled = "";
  playerTwoBtn.disabled = "";
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";
  rounds.disabled = "";
  start.style.display = "inline";
  rounds.value = "";
}

function resetHandler() {
  playerOneScore.textContent = "0";
  playerTwoScore.textContent = "0";
  output.textContent = "";
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";
  playerOneBtn.disabled = "";
  playerTwoBtn.disabled = "";
}

function firstPlayerHandler() {
  scoreIncrease(playerOneScore);
  if (playerOneScore.innerText === rounds.value) {
    playerOneBtn.disabled = "true";
    playerTwoBtn.disabled = "true";
    results(playerOneScore, playerTwoScore);
  }
}

function secondPlayerHandler() {
  scoreIncrease(playerTwoScore);
  if (playerTwoScore.innerText === rounds.value) {
    playerOneBtn.disabled = "true";
    playerTwoBtn.disabled = "true";
    results(playerTwoScore, playerOneScore);
  }
}

function startHandler() {
  //remove all old event listeners when 2nd time start is clicked to play again
  restart.removeEventListener("click", restartHandler);
  reset.removeEventListener("click", resetHandler);
  playerOneBtn.removeEventListener("click", firstPlayerHandler);
  playerTwoBtn.removeEventListener("click", secondPlayerHandler);

  if (rounds.value === "") {
    output.innerText = "Pls select no of rounds first";
  } else if (rounds.value != "") {
    output.innerText = "";
    start.style.display = "none";
    playerOneBtn.style.display = "inline";
    playerTwoBtn.style.display = "inline";
    reset.style.display = "inline";
    restart.style.display = "inline";
    rounds.disabled = "true";
    restart.addEventListener("click", restartHandler);
    reset.addEventListener("click", resetHandler);

    playerOneBtn.addEventListener("click", firstPlayerHandler);
    playerTwoBtn.addEventListener("click", secondPlayerHandler);
  }
}

start.addEventListener("click", startHandler);
