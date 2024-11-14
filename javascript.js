// Updated ID names for better clarity
const resultDisplay = document.getElementById("game-result");
const winsDisplay = document.getElementById("player-wins");
const lossesDisplay = document.getElementById("pc-losses");
const tiesDisplay = document.getElementById("ties");  // Assuming there's an HTML element with id "ties" for ties count
const computerChoiceDisplay = document.getElementById("computer-choice-img");

let wins = 0;
let losses = 0;
let ties = 0;

function play(userChoice) {
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = `Computer last chose: ${computerChoice}`;
    const result = determineWinner(userChoice, computerChoice);

    resultDisplay.textContent = result;

    switch (result) {
        case "You win!":
            wins++;
            winsDisplay.textContent = `${wins}`;
            document.getElementById("pc-choice").style.backgroundColor = "#459b42";
            document.getElementById("pc-choice").style.boxShadow = "0px 0px 100px #459b42";
            break;
        case "You lose!":
            losses++;
            lossesDisplay.textContent = `${losses}`;
            document.getElementById("pc-choice").style.boxShadow = "0px 0px 100px #b42323";
            document.getElementById("pc-choice").style.backgroundColor = "#b42323";
            break;
        case "It's a tie!":
            ties++;
            document.getElementById("pc-choice").style.boxShadow = "0px 0px 100px #b8bb21";
            document.getElementById("pc-choice").style.backgroundColor = "#b8bb21";
            break;
    }
    if(losses > 30){
        alert(`You're LOX, PC:${losses}`);
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    if (randomIndex == 0) {
        document.getElementById("computer-choice-img").src = "1.png";
    } else if (randomIndex == 1) {
        document.getElementById("computer-choice-img").src = "2.png";
    } else if (randomIndex == 2) {
        document.getElementById("computer-choice-img").src = "3.png";
    }
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    const winningConditions = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };

    return userChoice === winningConditions[computerChoice] ? "You win!" : "You lose!";
}
