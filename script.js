function computerPlay(computerSelection){
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        computerSelection = "Rock"
    }

    else if (randomNumber >= 66){
        computerSelection = "paper"
    }

    else computerSelection = "Scissors"
    console.log(computerSelection)
}
   computerPlay()
//create variables named rock, paper, and scissors for both user and computer
// ask user to input either Rock, Paper, or Scissors