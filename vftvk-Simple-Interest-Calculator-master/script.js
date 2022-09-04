function compute() {
	//To add the focus method to the Amount input field once ok is clicked on the alert
	const principals = document.getElementById('principal');

	//Create references to the input elements to validate
	let principal = document.getElementById('principal').value;

	const rate = document.getElementById('rate').value;

	const years = document.getElementById('years').value;

	const interest = principal * years * rate / 100;

	let year = new Date().getFullYear() + parseInt(years);

	// Check if the input is greater than 0
	const condition1 = principal > 0;
	if (condition1) {
		document.getElementById('result').innerText =
			'If you deposit ' +
			principal +
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

// Modifies the range percentage value
function updateRate() {
	let rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rateval;
}
