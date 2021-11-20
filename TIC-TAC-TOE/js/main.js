// PLAYER NAMES
// let player1 = prompt("Player1: Enter your name");
// let player2 = prompt("Player2: Enter your name");

function togglePlayerChance(player) {
	if (player.turn === true) player.turn = false;
	else player.turn === true;
}

function changeMarker() {
	if (this.textContent !== "X" || this.textContent !== "O") {
		this.textContent = "X";
		this.disabled = true;
		// console.log(marker)
	} else {
		this.textContent = "O";
		this.disabled = true;
	}
}

class Player {
	constructor(name) {
		this.name = name;
		this.turn = false;
	}
}

let allButtons = document.querySelectorAll(".col-3");
for (let i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("click", changeMarker);
}

function changeText(event, p1) {
	if (p1.true) {
		event.target.textContent = "X";
		event.target.disabled = true;
		togglePlayerChance(p1);
	} else {
		event.target.textContent = "O";
		event.target.disabled = true;
	}
}

function ticTacToe() {
	let b1 = document.getElementById("one");
	let b2 = document.getElementById("two");
	let b3 = document.getElementById("three");
	let b4 = document.getElementById("four");
	let b5 = document.getElementById("five");
	let b6 = document.getElementById("six");
	let b7 = document.getElementById("seven");
	let b8 = document.getElementById("eight");
	let b9 = document.getElementById("nine");

	// CHECKING IF PLAYER 1 WON;
}
