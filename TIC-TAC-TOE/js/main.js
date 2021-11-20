//Making Modal Title Appear first

document.getElementById("closeButton").addEventListener("click", () => {
	//All buttons
	let allButtons = document.querySelectorAll(".col-3");

	// PLAYER NAMES
	let player1 = prompt("Player One: Enter your name");
	let player2 = prompt("Player Two: Enter your name");

	if (!(player2 && player1)) {
		document.getElementById("playerInit").textContent =
			"Sorry, but you have to enter both the players name";
		for (let i = 0; i < allButtons.length; i++) {
			allButtons[i].disabled = true;
		}
	}
	//Making Player One Starts the game
	let startingPlayer = 1;

	// GLOBAL VAR FOR DRAW CHECK
	let drawCount = 0;

	//Invoking event listeners for all buttons
	for (let i = 0; i < allButtons.length; i++) {
		allButtons[i].addEventListener("click", changeMarker);
	}
	function changeMarker() {
		if (startingPlayer === 1 && this.textContent === "#") {
			document.getElementById(
				"playerInit"
			).textContent = `Player ${player1} turn`;
			this.textContent = "X";
			this.style.color = "blue";
			this.disabled = true;
		} else if (startingPlayer === 2 && this.textContent === "#") {
			document.getElementById(
				"playerInit"
			).textContent = `Player ${player2} turn`;
			this.textContent = "O";
			this.style.color = "orange";
			this.disabled = true;
		}
		drawCount++;
		if (startingPlayer === 1) startingPlayer = 2;
		else startingPlayer = 1;
		checkWin();
	}
	function checkWin() {
		let b1 = document.getElementById("one").textContent;
		let b2 = document.getElementById("two").textContent;
		let b3 = document.getElementById("three").textContent;
		let b4 = document.getElementById("four").textContent;
		let b5 = document.getElementById("five").textContent;
		let b6 = document.getElementById("six").textContent;
		let b7 = document.getElementById("seven").textContent;
		let b8 = document.getElementById("eight").textContent;
		let b9 = document.getElementById("nine").textContent;
		//PLAYER ONE CHECK WIN
		if (
			(b1 === "X" && b2 === "X" && b3 === "X") ||
			(b4 === "X" && b5 === "X" && b6 === "X") ||
			(b7 === "X" && b8 === "X" && b9 === "X") ||
			(b1 === "X" && b4 === "X" && b7 === "X") ||
			(b2 === "X" && b5 === "X" && b8 === "X") ||
			(b3 === "X" && b6 === "X" && b9 === "X") ||
			(b1 === "X" && b5 === "X" && b9 === "X") ||
			(b3 === "X" && b5 === "X" && b7 === "X")
		) {
			document.getElementById(
				"playerInit"
			).textContent = `Player ${player1} Won`;
			for (let i = 0; i < allButtons.length; i++) {
				allButtons[i].disabled = true;
			}
			return;
		}
		if (
			(b1 === "O" && b2 === "O" && b3 === "O") ||
			(b4 === "O" && b5 === "O" && b6 === "O") ||
			(b7 === "O" && b8 === "O" && b9 === "O") ||
			(b1 === "O" && b4 === "O" && b7 === "O") ||
			(b2 === "O" && b5 === "O" && b8 === "O") ||
			(b3 === "O" && b6 === "O" && b9 === "O") ||
			(b1 === "O" && b5 === "O" && b9 === "O") ||
			(b3 === "O" && b5 === "O" && b7 === "O")
		) {
			document.getElementById(
				"playerInit"
			).textContent = `Player ${player2} Won`;
			for (let i = 0; i < allButtons.length; i++) {
				allButtons[i].disabled = true;
			}
			return;
		} else {
			if (drawCount === 9) {
				console.log(`Draw`);
				document.getElementById("playerInit").textContent = "GAME DRAW";
				for (let i = 0; i < allButtons.length; i++) {
					allButtons[i].disabled = true;
				}
			}
		}
	}
});
