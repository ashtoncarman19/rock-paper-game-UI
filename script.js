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

     //tie
        if (computerSelection === userSelection){
            alert ("Tie! Go again");
        }
     //winning
        else if (computerSelection === "rock" && userSelection === "paper"){
            alert("The computer chose " + computerSelection + " You Won!");
        }
        else if (computerSelection === "paper"  && userSelection === "scissors"){
            alert ("The computer chose " + computerSelection + " You Won!"); 
        }
        else if (computerSelection === "scissors" && userSelection === "rock"){
            alert ("The computer chose " + computerSelection + " You Won!");
        }
    //losing
        else if (computerSelection === "rock" && userSelection === "scissors"){
            alert ("The computer chose " + computerSelection + " You lost!");
        }
        else if (computerSelection === "paper" && userSelection === "rock"){
            alert ("The computer chose " + computerSelection + " You Lost!");
        }
        else if (computerSelection === "scissors"  && userSelection === "paper"){
            alert ("The computer chose " + computerSelection + " You Lost!");
        }
        else 
        alert("you have to type one of the 3 things");
    }
    compare(computerSelection, userSelection)
    
}
document.getElementById("playButton").addEventListener("click", game);

/*function playButton(text){
    const container = document.querySelector('#container');

    const playButton = document.createElement('button');
    playButton.classList.add('playButton');
    playButton.textContent = "Click Me to Play!";

container.appendChild(playButton);
}
playButton()
*/

//document.getElementById(playbutton).onclick = game();
