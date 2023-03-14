var computerChoice = ["rock","paper","scissors"];
var randNum = Math.floor(Math.random()*3);
var computer = computerChoice[randNum];
var result = document.getElementById("message");
 

function playerRock(){
	if(computer == "paper"){
		result.textContent = "Computer Won";
	}
	else if(computer == "scissors"){
		result.textContent = "Player Won";
	}
	else if(computer == "rock"){
		result.textContent = "It's a TIE!";
	}
	else{
		result.textContent = "---ERROR---";
	}
}
function playerPaper(){
	if(computer == "scissors"){
		result.textContent = "Computer Won";
	}
	else if(computer == "rock"){
		result.textContent = "Player Won";
	}
	else if(computer == "paper"){
		result.textContent = "It's a TIE!";
	}
	else{
		result.textContent = "---ERROR---";
	}
}
function playerScissors(){
	if(computer == "rock"){
		result.textContent = "Computer Won";
	}
	else if(computer == "paper"){
		result.textContent = "Player Won";
	}
	else if(computer == "scissors"){
		result.textContent = "It's a TIE!";
	}
	else{
		result.textContent = "---ERROR---";
	}
}
