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
start.addEventListener("click", () => {
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
    restart.addEventListener("click", () => {
      playerOneBtn.style.display = "none";
      playerTwoBtn.style.display = "none";
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
    });
    reset.addEventListener("click", () => {
      playerOneScore.innerText = "0";
      playerTwoScore.innerText = "0";
      playerOneScore.style.color = "black";
      playerTwoScore.style.color = "black";
      playerOneBtn.disabled = "";
      playerTwoBtn.disabled = "";
    });

    playerOneBtn.addEventListener("click", () => {
      scoreIncrease(playerOneScore);
      if (playerOneScore.innerText === rounds.value) {
        playerOneBtn.disabled = "true";
        playerTwoBtn.disabled = "true";
        results(playerOneScore, playerTwoScore);
      }
    });
    playerTwoBtn.addEventListener("click", () => {
      scoreIncrease(playerTwoScore);
      if (playerTwoScore.innerText === rounds.value) {
        playerOneBtn.disabled = "true";
        playerTwoBtn.disabled = "true";
        results(playerTwoScore, playerOneScore);
      }
    });
  }
});
