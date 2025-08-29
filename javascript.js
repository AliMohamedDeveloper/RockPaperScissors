function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3);

    if (ran == 0) {
        return "rock";
    }

    else if (ran == 1) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let Choice = prompt("Enter 'Rock' , 'Paper' or 'Scissors'");

    return Choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        let humanChoiceLC = humanChoice.toLowerCase();

        if (humanChoiceLC == 'rock' && computerChoice == 'paper') {
            computerScore += 1;
        }

        else if (humanChoiceLC == 'rock' && computerChoice == 'scissors') {
            humanScore += 1;
        }

        else if (humanChoiceLC == 'paper' && computerChoice == 'rock') {
            humanScore += 1;
        }

        else if (humanChoiceLC == 'paper' && computerChoice == 'scissors') {
            computerScore += 1;
        }

        else if (humanChoiceLC == 'scissors' && computerChoice == 'rock') {
            computerScore += 1;
        }

        else if (humanChoiceLC == 'scissors' && computerChoice == 'paper') {
            humanScore += 1;
        }
        else {
            console.log("Draw");
        }
    }

    for (let i = 0; i < 5; i++) {

        let GCC = (getComputerChoice());
        let GHC = (getHumanChoice());

        playRound(GHC, GCC);

    }

    console.log("Final Score - Human: " + humanScore + " Computer: " + computerScore);

}

playGame();