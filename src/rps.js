
function computerPlay(){
    options = ["Rock","Paper","Scissors"];
    return(options[Math.floor(Math.random()*3)]);
}

function play(playerSelection,computerSelection){

    if(playerSelection == "Rock"){
        if(computerSelection == "Paper"){
            console.log("You Lose!" + computerSelection + "beats" + playerSelection);
        }
        else {
            console.log("You Win!" + playerSelection + "beats" + computerSelection );
        }
    }
    else if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            console.log("You Win!" + computerSelection + "beats" + playerSelection);
        }
        else {
            console.log("You Lose!" + playerSelection + "beats" + computerSelection );
        }
    }
    else if(playerSelection == "Scissors"){
        if(computerSelection == "Paper"){
            console.log("You Win!" + computerSelection + "beats" + playerSelection);
        }
        else {
            console.log("You Lose!" + playerSelection + "beats" + computerSelection );
        }
    }
}