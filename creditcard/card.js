function isCardNumberValid(number) {
	return number === '1234123412341234';
}
function isExpirationDateValid(month, year) {
	const expirationDate = new Date(20 + parseInt(year), parseInt(month) - 1);
	const currentDate = new Date();
	return expirationDate > currentDate;
}

function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
	const cardNumber = document.querySelector('input[name="cardNumber"]').value;
	const cardMonth = document.querySelector('input[name="cardMonth"]').value;
	const cardYear = document.querySelector('input[name="cardYear"]').value;

	event.preventDefault();

	let errorMsg = '';

	displayError('')
	if (isNaN(cardNumber)) {
		errorMsg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(cardNumber)) {
		errorMsg += 'Card number is not a valid card number\n';
	}
	if (!isExpirationDateValid(cardMonth, cardYear)) {
		errorMsg += 'Expiration date is not valid or it is in the past\n';
	}
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	
	alert("Payment submitted successfully.")
	return true
}

document.querySelector('#card-container').addEventListener('submit', submitHandler);