var computerChoice = ["rock","paper","scissors"];

var result = document.getElementById("message");

var movesLeft = 2;

function playerRock(){
	var randNum = Math.floor(Math.random()*3);
	var computer = computerChoice[randNum];
	if(movesLeft>0){
		if(computer == "paper"){
			result.textContent = "Computer Won";
			movesLeft=movesLeft-1;
		}
		else if(computer == "scissors"){
			result.textContent = "Player Won";
			movesLeft=movesLeft-1;

		}
		else if(computer == "rock"){
			result.textContent = "It's a TIE!";
			movesLeft=movesLeft-1;
		}
		else{
			result.textContent = "---ERROR---";
		}
	}
	else{
		document.getElementById("btn").style.visibility="hidden";
		document.getElementById("refresh").style.display="visible";
		document.getElementById("movesleft").innerHTML = "GAME OVER";
		document.getElementById("refresh").innerHTML = "Please Refresh Page";
	}
}
function playerPaper(){
	var randNum = Math.floor(Math.random()*3);
	var computer = computerChoice[randNum];
	if(movesLeft>0){
		if(computer == "scissors"){
			result.textContent = "Computer Won";
			movesLeft=movesLeft-1;
		}
		else if(computer == "rock"){
			result.textContent = "Player Won";
			movesLeft=movesLeft-1;
		}
		else if(computer == "paper"){
			result.textContent = "It's a TIE!";
			movesLeft=movesLeft-1;
		}
		else{
			result.textContent = "---ERROR---";
		}
	}
	else{
		document.getElementById("btn").style.visibility="hidden";
		document.getElementById("refresh").style.display="visible";
		document.getElementById("movesleft").innerHTML = "GAME OVER";
		document.getElementById("refresh").innerHTML = "Please Refresh Page";
	}
}
function playerScissors(){
	var randNum = Math.floor(Math.random()*3);
	var computer = computerChoice[randNum];
	if(movesLeft>0){
		if(computer == "rock"){
			result.textContent = "Computer Won";
			movesLeft=movesLeft-1;
		}
		else if(computer == "paper"){
			result.textContent = "Player Won";
			movesLeft=movesLeft-1;
		}
		else if(computer == "scissors"){
			result.textContent = "It's a TIE!";
			movesLeft=movesLeft-1;
		}
		else{
			result.textContent = "---ERROR---";
		}
	}
	else{
		document.getElementById("btn").style.visibility="hidden";
		document.getElementById("refresh").style.display="visible";
		document.getElementById("movesleft").innerHTML = "GAME OVER";
		document.getElementById("refresh").innerHTML = "Please Refresh Page";
	}
}
function song(){
	for(i=99;i>=0;i=i-1){
		if(i>0){
			document.getElementById("lyrics").innerHTML+="</br>"+i+" bottles of beer on the wall, "+i+" bottles of beer.</br>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall</br></br>";
		}
		else{
			document.getElementById("lyrics").innerHTML+="</br>"+i+" bottles of beer on the wall, "+i+" bottles of beer.</br>No more to take down, that's the end of the round, time to climb down off of the wall";
		}
	}
}