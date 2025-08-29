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
        let humanScore = 0;
        let = 0;
        if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore += 1;
        }

        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore += 1;
        }

        else if (computerChoice == 'rock' && humanChoice == 'paper') {
            humanScore += 1;
        }

        else if (computerChoice == 'rock' && humanChoice == 'scissors') {
            computerScore += 1;
        }
        else {
            console.log("Draw");
        }

        console.log("human score " + humanScore);
        console.log("Computer score " + computerScore);
    }

    for (let i = 0; i < 5; i++) {

        let GCC = (getComputerChoice());
        let GHC = (getHumanChoice());


        // console.log("Human Choice is " + GHC);
        // console.log("Computer Score is " + GCC);

        playRound(GHC, GCC);

    }

}


playGame();



