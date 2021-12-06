
const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        computerSelection = "rock"
    }

    else if (randomNumber >= 66){
        computerSelection = "paper"
    }

    else computerSelection = "scissors"
    console.log(computerSelection)

//create variables named rock, paper, and scissors for both user and computer
// ask user to input either Rock, Paper, or Scissors
 const userSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors' to play").toLowerCase();
    console.log(userSelection)

    function compare(computerSelection, userSelection){

        //tie
        if (computerSelection === userSelection){
            alert ("Tie! Go again");
        }
        //winning
        else if (computerSelection === "rock" && userSelection === "paper"){
            alert("You Won!");
        }
        else if (computerSelection === "paper"  && userSelection === "scissors"){
            alert ("You Won!");
        }
        else if (computerSelection === "scissors" && userSelection === "rock"){
            alert ("You Won!");
        }
        //losing
        else if (computerSelection === "rock" && userSelection === "scissors"){
            alert ("You lost!");
        }
        else if (computerSelection === "paper" && userSelection === "rock"){
            alert ("You Lost!");
        }
        else alert ("Are you sure know how to play?");
    }
    console.log("The computer chose " + computerSelection)
    console.log("You chose " + userSelection)
    compare(userSelection , computerSelection)
