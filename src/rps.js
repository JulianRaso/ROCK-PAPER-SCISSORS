const status = document.getElementById("roundStatus");
const winUser = document.getElementById('user');
const winPc = document.getElementById('pc');
var userPoints = 0;
var pcPoints = 0;


function computerPlay(){
    options = ["Rock","Paper","Scissors"];
    return(options[Math.floor(Math.random()*3)]);
}


function playRound(playerSelection,computerSelection){


    if (playerSelection == computerSelection){
        return ("Tie Game")
    }
    else if(playerSelection == "Rock"){
        if(computerSelection == "Paper"){
            return("You Lose! " + computerSelection + " beats " + playerSelection);
        }
        else if (computerSelection == "Scissors"){
            return("You Win! " + playerSelection + " beats " + computerSelection );
        }
    }
    else if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            return("You Win! " + computerSelection + " beats " + playerSelection);
        }
        else if(computerSelection == "Scissors"){
            return("You Lose! " + playerSelection + " beats " + computerSelection );
        }
    }
    else if(playerSelection == "Scissors"){
        if(computerSelection == "Paper"){
            return("You Win! " + computerSelection + " beats " + playerSelection);
        }
        else if (computerSelection == "Rock") {
            return("You Lose! " + playerSelection + " beats " + computerSelection );
        }
    }
}

function play(selection){
    if(userPoints == 3 || pcPoints == 3 ){
        userPoints = 0;
        pcPoints = 0;
    }
    return status.innerHTML = playRound(selection,computerPlay());
}

function game(btn){
    var playStatus = play(btn.id);

    console.log(playStatus.includes('Lose'));
    
    if(playStatus.includes('Win') == true){
        userPoints = userPoints + 1;
        winUser.innerHTML = ("You = " + userPoints)
        winPc.innerHTML = ("Computer = " + pcPoints )  
    }
    else if (playStatus.includes('Lose') == true){
        pcPoints = pcPoints + 1;
        winUser.innerHTML = ("You = " + userPoints)
        winPc.innerHTML = ("Computer = " + pcPoints )  
    }
    else {}

}
