let myButton = document.getElementById("generateRandomColor");
myButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
	let myColorCodes = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
	];

	let myRandColor = `#`;
	for (let i = 0; i < 6; i++) {
		let temp = myColorCodes[Math.floor(Math.random() * 16)];
		myRandColor += temp;
	}
	myButton.textContent = myRandColor;
	document.querySelector("body").style.backgroundColor = myRandColor;
}
