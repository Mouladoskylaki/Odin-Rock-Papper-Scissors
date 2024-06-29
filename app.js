const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    for (let i = 0; i <= choices.length; i++) {
        if (i === computerChoice) {
            computerChoice = choices[i];
        }
    }
    return computerChoice;
}

const getHumanChoice = (humanScore, computerScore) => {
    let humanChoice = prompt(`Human Score: ${humanScore} - Computer Score: ${computerScore}\nChoose Rock, Paper, or Scissors`).toLowerCase();
    while (!choices.includes(humanChoice)) {
        humanChoice = prompt("Invalid selection! Choose between Rock, Paper, or Scissors").toLowerCase();
    }
    return humanChoice;
}

const playGame = () => {
    let computerScore = 0;
    let humanScore = 0;

    while (computerScore < 3 && humanScore < 3) {
        const humanSelection = getHumanChoice(humanScore, computerScore);
        const computerSelection = getComputerChoice();

        const playRound = (humanChoice, computerChoice) => {
            if (humanChoice === computerChoice) {
                console.log("It's a tie!");
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")
            ) {
                humanScore++;
                console.log("You win this round!");
            } else {
                computerScore++;
                console.log("Computer wins this round!");
            }
        }

        playRound(humanSelection, computerSelection);

        console.log(`Human Choice: ${humanSelection}`);
        console.log(`Computer Choice: ${computerSelection}`);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (humanScore === 5) {
        console.log("You win the game!");
    } else if (computerScore === 5) {
        console.log("Computer wins the game!");
    }
}

playGame();

