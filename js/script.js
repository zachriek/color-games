function randomColor() {
	const randomColorArea = document.querySelector('.random-color-wrapper .color-area');
	const red = Math.round(Math.random() * 255);
	const green = Math.round(Math.random() * 255);
	const blue = Math.round(Math.random() * 255);

	randomColorArea.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function hoverColor() {
	const rPos = Math.round(Math.random() * 255);
	const gPos = Math.round(Math.random() * 255);
	const bPos = Math.round(Math.random() * 255);
	
	hoverColorArea.style.backgroundColor = `rgb(${rPos}, ${gPos}, ${bPos})`;
}

function toggleColor() {
	const r = redInput.value;
	const g = greenInput.value;
	const b = blueInput.value;
	const toggleColorArea = document.querySelector('.toggle-color-wrapper .color-area');

	toggleColorArea.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector('.button .btn');
button.addEventListener('click', randomColor);

const hoverColorArea = document.querySelector('.hover-color-wrapper .color-area');
hoverColorArea.addEventListener('mousemove', hoverColor);

const redInput = document.querySelector('.red-input input[name="red"]');
const greenInput = document.querySelector('.green-input input[name="green"]');
const blueInput = document.querySelector('.blue-input input[name="blue"]');
redInput.addEventListener('input', toggleColor);
blueInput.addEventListener('input', toggleColor);
greenInput.addEventListener('input', toggleColor);
