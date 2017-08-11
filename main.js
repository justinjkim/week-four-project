let display = document.getElementById("display");
display.innerHTML = "0";
let evaluation = [];

let input = document.querySelectorAll(".input");
for (let i = 0; i < input.length; i++) {

	input[i].addEventListener("click", function() {
		
		if (display.innerHTML === "0") {
			display.innerHTML = "";
			evaluation += input[i].value;
			display.innerHTML += input[i].value;
			console.log(input[i].value);
		}
		else {
			evaluation += input[i].value;
			display.innerHTML += input[i].value;
			console.log(input[i].value);
		}

		
	})
}

console.log(evaluation);


let equals = document.querySelector(".equals");
equals.addEventListener("click", function() {
	let answer = eval(evaluation);
	display.innerHTML = answer;
	console.log(answer);
	if (evaluation[evaluation.length - 1] === "0") {
		console.log("you cannot divide by zero!");
	}
});



let AC = document.querySelector(".clear");
AC.addEventListener("click", function() {
	evaluation = [];
	display.innerHTML = "0";
})


// function logit() {
// 	let target = this.value;
// 	console.log(target);
// 	output.innerHTML += target;
	

// 	let total = output.innerHTML;
// 	console.log(total);

// 	if (target === "=") {
// 		eval(target);
// 	}

// }

