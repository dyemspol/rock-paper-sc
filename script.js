let playerDisplayC = document.getElementById("player");
let computerDisplayC = document.getElementById("Computer");
let results = document.getElementById("result");
let choices = ["rock", "scissor", "paper"];
let myscore = document.getElementById("myscore");
let computerScoreDisplay = document.getElementById("computerScore");
let playerScoreDisplay = document.getElementById("playerScore");
let computerScore = 0;
let playerScore = 0;

function playgame(playerChoice) {
    let computerC = choices[Math.floor(Math.random() * 3)];
    console.log(computerC);
    let result = "";
    if (computerC === playerChoice) {
        result = "TIE";
    } else if (
        (playerChoice === "rock" && computerC === "scissor") ||
        (playerChoice === "scissor" && computerC === "paper") ||
        (playerChoice === "paper" && computerC === "rock")
    ) {
        result = "You Win!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        result = "You lose";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
    playerDisplayC.textContent = `Player: ${playerChoice}`;
    computerDisplayC.textContent = `Computer: ${computerC}`;
    results.textContent = result;

    switch (result) {
        case "You Win!":
            results.style.color = "Green";
            break;
        case "You lose":
            results.style.color = "red";
            break;
        case "TIE":
            results.style.color = "black";
            break;
    }
}