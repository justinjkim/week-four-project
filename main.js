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
	}) // end of event listener
} // end of for loop



// separation function for "=" button
let equals = document.querySelector(".equals");
equals.addEventListener("click", function() {
	let answer = eval(evaluation);
	display.innerHTML = parseFloat(answer);
	console.log(answer);

});



// separation function for "AC" button
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

