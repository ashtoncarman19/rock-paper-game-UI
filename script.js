for (i=0;i<=3;i++)
{
    game();
}
function game(){
const randomNumber = Math.floor(Math.random() * 100);{
    if (randomNumber <= 33) {
        computerSelection = "rock"
    }

    else if (randomNumber >= 66){
        computerSelection = "paper"
    }

    else computerSelection = "scissors"
}
    console.log(computerSelection);

//create variables named rock, paper, and scissors for both user and computer
// ask user to input either Rock, Paper, or Scissors

 const userSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors' to play").toLowerCase()
    console.log(userSelection)

function compare(computerSelection, userSelection){
//scoreboard
    let userScore = 0;
    computerScore= 0;
    console.log( userScore , computerScore )
    
     //tie
        if (computerSelection === userSelection){
            alert ("Tie! Go again");
        }
     //winning
        else if (computerSelection === "rock" && userSelection === "paper"){
            alert("The computer chose " + computerSelection + " You Won!");
            userScore++;
        }
        else if (computerSelection === "paper"  && userSelection === "scissors"){
            alert ("The computer chose " + computerSelection + " You Won!");
            userScore++;
        }
        else if (computerSelection === "scissors" && userSelection === "rock"){
            alert ("The computer chose " + computerSelection + " You Won!");
            userScore++;
        }
    //losing
        else if (computerSelection === "rock" && userSelection === "scissors"){
            alert ("The computer chose " + computerSelection + " You lost!");
            computerScore++;      
        }
        else if (computerSelection === "paper" && userSelection === "rock"){
            alert ("The computer chose " + computerSelection + " You Lost!");
            computerScore++;
        }
        else if (computerSelection === "scissors"  && userSelection === "paper"){
            alert ("The computer chose " + computerSelection + " You Lost!");
            computerScore++;
        }
        else 
        alert("you have to type one of the 3 things");

        console.log(userScore, computerScore)
    }
    console.log("The computer chose " + computerSelection)
    console.log("You chose " + userSelection)
    compare(computerSelection, userSelection)
    
}
//assign each win or loss a value of 1
game()