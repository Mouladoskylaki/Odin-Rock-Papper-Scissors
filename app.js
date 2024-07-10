const choices = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const results = document.querySelector(".results");
const playerScore = document.querySelector(".human-score");
const compScore = document.querySelector(".computer-score")

let humanChoice;
let computerChoice;

const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * choices.length);
    for (let i = 0; i <= choices.length; i++) {
        if (i === computerChoice) {
            computerChoice = choices[i];
        }
    }
    return computerChoice;
}

    rockBtn.addEventListener("click", () => {
        humanChoice = choices[0];
        console.log(humanChoice)
        playRound(humanChoice, computerChoice);
    })
    paperBtn.addEventListener("click", () => {
        humanChoice = choices[1];
        playRound(humanChoice, computerChoice);
        console.log(humanChoice);
    })
    scissorsBtn.addEventListener("click", () => {
        humanChoice = choices[2];
        playRound(humanChoice, computerChoice);
        console.log(humanChoice);
    })

    let computerScore = 0;
    let humanScore = 0;

    // while (computerScore < 3 && humanScore < 3) {
    //     const humanSelection = getHumanChoice(humanScore, computerScore);
    //     const computerSelection = getComputerChoice();

        const playRound = (humanChoice, computerChoice) => {
            computerChoice = getComputerChoice();
            if (humanChoice === computerChoice) {
                results.textContent = "It's a tie!";
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")
            ) {
                humanScore++;
                results.textContent = "You win this round!";
                playerScore.textContent = "Player score: " + humanScore;
            } else {
                computerScore++;
                results.textContent = "Computer wins this round!";
                compScore.textContent = "Computer score: " + computerScore;
            }
            if (humanScore === 5) {
                results.textContent = "You win the game!";
                humanScore = 0;
                computerScore = 0;
                playerScore.textContent = "Player score: " + humanScore;
                compScore.textContent = "Computer score: " + computerScore;

                
            } else if (computerScore === 5) {
                results.textContent = "Computer wins the game!";
                humanScore = 0;
                computerScore = 0;
                playerScore.textContent = "Player score: " + humanScore;
                compScore.textContent = "Computer score: " + computerScore;

                
            }
        }

        // playRound(humanSelection, computerSelection);

        // console.log(`Human Choice: ${humanSelection}`);
        // console.log(`Computer Choice: ${computerSelection}`);
        // console.log(`Human Score: ${humanScore}`);
        // console.log(`Computer Score: ${computerScore}`);
    // }

    // if (humanScore === 5) {
    //     console.log("You win the game!");
    // } else if (computerScore === 5) {
    //     console.log("Computer wins the game!");
    // }


// playGame();
// playRound()

