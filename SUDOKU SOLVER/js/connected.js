const generateRandomBoard = () => {
	let boards = [
		[
			[8, 0, 6, 0, 0, 0, 0, 5, 2],
			[0, 9, 0, 7, 4, 0, 0, 0, 0],
			[0, 7, 2, 6, 5, 8, 0, 3, 4],
			[0, 0, 0, 2, 0, 0, 0, 6, 3],
			[9, 0, 3, 1, 6, 0, 0, 0, 7],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 5, 0, 0, 6, 0, 0],
			[4, 1, 0, 0, 0, 0, 3, 2, 5],
			[5, 0, 7, 0, 0, 0, 0, 0, 8],
		],
		[
			[8, 0, 0, 2, 0, 0, 0, 4, 6],
			[0, 0, 7, 9, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 5, 0, 0],
			[0, 0, 0, 5, 0, 0, 0, 3, 2],
			[4, 0, 8, 0, 0, 0, 7, 0, 1],
			[3, 2, 0, 0, 0, 7, 0, 0, 0],
			[0, 0, 6, 0, 0, 0, 0, 0, 9],
			[0, 0, 0, 0, 0, 3, 2, 0, 0],
			[2, 8, 0, 0, 0, 6, 0, 0, 3],
		],
		[
			[7, 9, 0, 0, 0, 0, 0, 0, 3],
			[4, 0, 0, 0, 0, 0, 0, 6, 0],
			[8, 0, 1, 0, 0, 4, 0, 0, 2],
			[0, 0, 5, 0, 0, 0, 0, 0, 0],
			[3, 0, 0, 1, 0, 0, 0, 0, 0],
			[0, 4, 0, 0, 0, 6, 2, 0, 9],
			[2, 0, 0, 0, 3, 0, 5, 0, 6],
			[0, 3, 0, 6, 0, 5, 4, 2, 1],
			[0, 0, 0, 0, 0, 0, 3, 0, 0],
		],
		[
			[0, 2, 7, 0, 0, 0, 8, 0, 0],
			[0, 0, 1, 0, 0, 0, 7, 0, 0],
			[0, 0, 0, 4, 0, 0, 0, 0, 0],
			[3, 0, 0, 0, 0, 0, 0, 8, 0],
			[0, 5, 0, 0, 0, 0, 0, 0, 9],
			[0, 7, 0, 0, 2, 8, 0, 0, 0],
			[0, 9, 0, 0, 6, 7, 0, 0, 0],
			[5, 8, 0, 0, 0, 0, 0, 3, 0],
			[0, 0, 0, 0, 4, 0, 0, 5, 6],
		],
		[
			[0, 4, 0, 0, 0, 0, 1, 7, 9],
			[0, 0, 2, 0, 0, 8, 0, 5, 4],
			[0, 0, 6, 0, 0, 5, 0, 0, 8],
			[0, 8, 0, 0, 7, 0, 9, 1, 0],
			[0, 5, 0, 0, 9, 0, 0, 3, 0],
			[0, 1, 9, 0, 6, 0, 0, 4, 0],
			[3, 0, 0, 4, 0, 0, 7, 0, 0],
			[5, 7, 0, 1, 0, 0, 2, 0, 0],
			[9, 2, 8, 0, 0, 0, 0, 6, 0],
		],
		[
			[0, 0, 1, 3, 0, 0, 7, 0, 2],
			[0, 0, 6, 2, 0, 0, 0, 1, 0],
			[0, 2, 0, 0, 0, 0, 0, 0, 4],
			[2, 0, 0, 6, 0, 1, 3, 0, 9],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[4, 0, 3, 8, 0, 9, 0, 0, 7],
			[1, 0, 0, 0, 0, 0, 0, 8, 0],
			[0, 5, 0, 0, 0, 6, 4, 0, 0],
			[9, 0, 4, 0, 0, 8, 5, 0, 0],
		],
	];
	return boards[Math.floor(Math.random() * boards.length)];
};

const printBoard = () => {
	board = generateRandomBoard();
	const allInputs = document.querySelectorAll(".row > input");
	document.querySelector("#submit").addEventListener("click", () => {
		validateBoard(board, allInputs);
	});
	document.querySelector("#getSolution").addEventListener("click", () => {
		getSolution(board, allInputs);
	});
	let index = 0;
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === 0) {
				allInputs[index].value = "";
			} else {
				allInputs[index].value = board[i][j];
				allInputs[index].style.backgroundColor = "tomato";
				allInputs[index].style.color = "white";
				allInputs[index].disabled = true;
			}

			index++;
		}
	}
};

const validateBoard = (board, allInputs) => {
	let filledBoard = [];
	let i = 0;
	let j = 0;
	recursiveBoard(board, filledBoard, i, j);
	let index = 0;
	let isSolutionTrue = true;
	let flag = true;
	for (let i = 0; i < 9 && flag; i++) {
		for (let j = 0; j < 9; j++) {
			if (allInputs[index].value != filledBoard[0][i][j]) {
				isSolutionTrue = false;
				flag = false;
				break;
			}
			index++;
		}
	}
	console.log(isSolutionTrue);
};
const getSolution = (board, allInputs) => {
	let filledBoard = [];
	let i = 0;
	let j = 0;
	recursiveBoard(board, filledBoard, i, j);
	console.log(filledBoard[0]);
	let inputIndex = 0;
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (allInputs[inputIndex].value == "") {
				allInputs[inputIndex].value = filledBoard[0][i][j];
				allInputs[inputIndex].style.backgroundColor = "turquoise";
				allInputs[inputIndex].disabled = true;
			}
			inputIndex++;
		}
	}
	document.querySelector("#submit").disabled = true;
	document.querySelector("#getSolution").disabled = true;
	document.querySelector("h1").textContent = `Refresh the page to restart`;
};

const recursiveBoard = (board, filledBoard, i, j) => {
	if (i === board.length) {
		filledBoard.push(JSON.parse(JSON.stringify(board))); //provides original values;
		return;
	}
	let ti = 0;
	let tj = 0;
	if (j === board[0].length - 1) {
		ti = i + 1;
		tj = 0;
	} else {
		ti = i;
		tj = j + 1;
	}

	if (board[i][j] !== 0) {
		recursiveBoard(board, filledBoard, ti, tj);
	} else {
		for (let asu = 1; asu <= 9; asu++) {
			if (isValid(board, i, j, asu) === true) {
				board[i][j] = asu;
				recursiveBoard(board, filledBoard, ti, tj);
				board[i][j] = 0;
			}
		}
	}
};

const isValid = (board, x, y, val) => {
	//   column
	for (let i = 0; i < board.length; i++) {
		if (board[i][y] === val) return false;
	}

	//   row
	for (let i = 0; i < board[0].length; i++) {
		if (board[x][i] === val) return false;
	}

	//   mini matrix
	let minx = parseInt(x / 3) * 3;
	let minj = parseInt(y / 3) * 3;

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[minx + i][minj + j] === val) return false;
		}
	}
	return true;
};
printBoard();
