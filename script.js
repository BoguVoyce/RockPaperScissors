let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock").addEventListener("click", () => {play("rock");});
const paper = document.querySelector("#paper").addEventListener("click", () => {play("paper");});
const scissors = document.querySelector("#scissors").addEventListener("click", () => {play("scissors");});
const info = document.querySelector("#info");
const scoreboard = document.querySelector("#scoreboard");

function computerPlay(){
    let arr = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}
function play(playerSelection){
    let computerSelection = computerPlay();
    
    if(playerSelection === computerSelection){
        info.textContent = `Computer chose ${computerSelection}, it's a TIE!`;
    }else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        info.textContent = `Computer chose ${computerSelection}, you WIN!`;
        playerScore = playerScore + 1;
    }else if(
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ){
        info.textContent = `Computer chose ${computerSelection} you LOSE!`;
        computerScore = computerScore + 1;
    }
    scoreboard.textContent = `Score: You ${playerScore} - Computer ${computerScore}`
}
// function winner(playerScore, computerScore){
//     if (playerScore == computerScore){
//         alert(`It's a TIE! ${playerScore}-${computerScore}`);
//     }else if(playerScore > computerScore){
//         alert(`You WIN! ${playerScore}-${computerScore}`);
//     }else if(playerScore < computerScore){
//         alert(`You LOSE! ${playerScore}-${computerScore}`);
//     }
// }
// function gameIncr(){
//     var gameNr = 0;
//     let i = 0;
//     while (i < 5){
//         play();
//         i++;
//         gameNr = gameNr+1;
//         console.log(`Game nr.${gameNr}`);
//     }
// winner(playerScore, computerScore);
// playerScore = 0;
// computerScore = 0;
// }