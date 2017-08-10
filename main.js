let operation = 0;

let output = document.getElementById("output");
output.innerHTML = operation;

let buttons = document.querySelectorAll(".button");
let operators = ['+', '-', '/', '*'];

for (i in buttons) {
	buttons[i].onclick = function(e) {
		let target = e.target.value;
		console.log(target);


		

		if (target.value === "AC") {
			output.innerHTML = "0";
			operation = 0;
		}
		else if (target === "=") {
			output.innerHTML = eval(output.innerHTML);

		}

		else {
			operation += target;
			let total = eval(operation);
			console.log(total);
			return total;
		}
	} // end of onclick function


} // end of for loop


