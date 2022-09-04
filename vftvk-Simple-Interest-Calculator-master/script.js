function compute() {
	//To add the focus method to the Amount input field once 'OK' is clicked on the alert popup
	const principals = document.getElementById('principal');

	//Create references to the input elements to validate
	let principal = document.getElementById('principal').value;
	document.getElementById('principal').style.background.color = 'yellow';

	const rate = document.getElementById('rate').value;

	const years = document.getElementById('years').value;

	const interest = principal * years * rate / 100;

	let year = new Date().getFullYear() + parseInt(years);

	// Check if the input is greater than 0 else Alert the user to inut a positive number
	const condition1 = principal > 0;
	if (condition1) {
		document.getElementById('result').innerText =
			'If you deposit ' +
			interest +
			', ' +
			'\n at an interest rate of ' +
			rate +
			'%, ' +
			'\n You will receive an amount of ' +
			interest +
			', ' +
			'\n in the year ' +
			year;
	} else {
		alert('Enter a positive number');
		principals.focus();
	}
}

// Modifies the range input to display the value on the screen
function updateRate() {
	let rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rateval;
}
