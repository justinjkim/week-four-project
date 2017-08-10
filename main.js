let operation = 0;

let output = document.getElementById("output");
output.innerHTML = operation;

let buttons = document.querySelectorAll(".button");
let operators = ['+', '-', '/', '*'];

for (i in buttons) {
	buttons[i].onclick = function(e) {
		let target = e.target.innerHTML;
		number = parseInt(target);
		output.innerHTML = number;
		
		console.log(number);
		operation += number;
		console.log(operation);

		if (target === "AC") {
			output.innerHTML = "0";
			operation = 0;
		}
		else if (target === "=") {
			output.innerHTML = eval(output.innerHTML);

		}

		else {
			operation += number;
		}
	} // end of onclick function


} // end of for loop

