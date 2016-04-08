////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
	// Write an expression that operates on a variable  called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    if (playerMove === computerMove){
    	return "Tie!";
    }
    else if (playerMove == "rock"){
    	if (computerMove == "paper"){
    		winner = "computer";
    	}
    	else{
    		winner = "player";
    	}
    }
    else if (playerMove == "paper"){
    	if (computerMove == "scissors"){
    		winner = "computer";
    	}
    	else{
    		winner = "player";
    	}
    }
    else if (playerMove == "scissors"){
    	if (computerMove == "rock"){
    		winner = "computer";
    	}
    else{
    		winner = "player";
    	}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
	 while (playerWins<5 && computerWins<5){
	 	var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
    	var winner = getWinner(playerMove,computerMove);
	    if (winner === "player"){
	    	playerWins += 1;
	    	console.log("Good Job! Your " + playerMove + " won against " + computerMove + " and you now have " + playerWins + " point(s)!");
	    }
	    else if (winner === "computer"){
	    	computerWins += 1;
	    	console.log("Bummer! Your " + playerMove + " lost against " + computerMove + " and the computer now has " + computerWins + " point(s)!");
	    }
	    else
	    	console.log("It's a tie! You both chose " + playerMove + " and your points remain the same. \nYou: " + playerWins + "\ncomputer: " + computerWins);
	 }
	 if (playerWins === 5){
	 	console.log("You win with 5 points!");
	 }
	 else{
	 	console.log("Sorry, the computer wins with 5 points.");
	 }
	return [playerWins, computerWins];
}

playToFive();
    	
    	


