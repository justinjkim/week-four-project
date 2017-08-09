let operation = 0;

let output = document.getElementById("output");
output.innerHTML = operation;

let buttons = document.querySelectorAll(".button");


for (i in buttons) {
	buttons[i].onclick = function(e) {
		let input = e.target.innerText;
		output.innerHTML = input;
	}

	console.log(buttons[i].innerHTML);
}