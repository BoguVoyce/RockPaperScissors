let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    let arr = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}
function play(playerSelection, computerSelection){
    var playerSelection = prompt("Choose: Rock, Paper or Scissors!").toLowerCase();
    var computerSelection = computerPlay();
    
    if(playerSelection === computerSelection){
        alert(`Computer chose ${computerSelection}, it's a TIE!`);
    }else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        alert(`Computer chose ${computerSelection}, you WIN!`);
        playerScore = playerScore + 1;
        console.log(`Player score ${playerScore}`)
    }else if(
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ){
        alert(`Computer chose ${computerSelection} you LOSE!`);
        computerScore = computerScore + 1;
        console.log(`Computer score: ${computerScore}`);
    }
}
function winner(playerScore, computerScore){
    if (playerScore == computerScore){
        alert(`It's a TIE! ${playerScore}-${computerScore}`);
    }else if(playerScore > computerScore){
        alert(`You WIN! ${playerScore}-${computerScore}`);
    }else if(playerScore < computerScore){
        alert(`You LOSE! ${playerScore}-${computerScore}`);
    }
}
function game(){
    var gameNr = 0;
    let i = 0;
    while (i < 5){
        play();
        i++;
        gameNr = gameNr+1;
        console.log(`Game nr.${gameNr}`);
    }
winner(playerScore, computerScore);

playerScore = 0;
computerScore = 0;
}