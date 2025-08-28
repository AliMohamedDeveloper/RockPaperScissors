function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3);

    if (ran == 0) {
        return "Rock";
    }

    else if (ran == 1) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}


console.log(getComputerChoice());
