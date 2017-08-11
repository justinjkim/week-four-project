let display = document.getElementById("display");
display.innerHTML = "";

let buttons = document.querySelectorAll(".button");

function logit() {
	let target = this.value;
	console.log(target);
	output.innerHTML += target;
	

	let total = output.innerHTML;
	console.log(total);

	if (target === "=") {
		eval(target);
	}

}

for (i in buttons) {
	buttons[i].addEventListener("click", logit 
		
		// if (target.value === "AC") {
		// 	output.innerHTML = "0";
		// 	operation = 0;
		// }
		// else if (target === "=") {
		// 	output.innerHTML = eval(output.innerHTML);

		// }

		// else {
		// 	operation += target;
		// 	let total = eval(operation);
		// 	console.log(total);
		// 	return total;
		// }
		 // end of onclick function
	); // end of event listener
} // end of for loop


 