// Target form itself
const form = document.querySelector('.form');

// Target borders when error occurs
const firstNameBorder = document.querySelector('.input-block__first-name');
const lastNameBorder = document.querySelector('.input-block__last-name');
const emailBorder = document.querySelector('.input-block__email');
const passwordBorder = document.querySelector('.input-block__password');

// Target error messages
const firstNameErrorMessage = document.querySelector('.first-name__error-text');
const lastNameErrorMessage = document.querySelector('.last-name__error-text');
const emailErrorMessage = document.querySelector('.email__error-text');
const passwordErrorMessage = document.querySelector('.password__error-text');

// Target error-icons
const firstNameErrorIcon = document.querySelector('.first-name__error-icon');
const lastNameErrorIcon = document.querySelector('.last-name__error-icon');
const emailErrorIcon = document.querySelector('.email__error-icon');
const passwordErrorIcon = document.querySelector('.password__error-icon');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	const firstName = form.firstname.value;
	const lastName = form.lastname.value;
	const email = form.email.value;
	const password = form.password.value;

	// validates email
	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	// if first name is empty, this changes the border, displays the error message, and error icon
	if (firstName.trim().length === 0) {
		firstNameBorder.style.border = '2px solid hsl(0, 100%, 74%)';
		firstNameErrorIcon.style.display = 'block';
		firstNameErrorMessage.style.display = 'block';
	} else {
		firstNameBorder.style.border = '1px solid hsl(246, 25%, 77%)';
		firstNameErrorIcon.style.display = 'none';
		firstNameErrorMessage.style.display = 'none';
	}
	// if last name is empty, this changes the border, displays the error message, and error icon
	if (lastName.trim().length === 0) {
		lastNameBorder.style.border = '2px solid hsl(0, 100%, 74%)';
		lastNameErrorIcon.style.display = 'block';
		lastNameErrorMessage.style.display = 'block';
	} else {
		lastNameBorder.style.border = '1px solid hsl(246, 25%, 77%)';
		lastNameErrorIcon.style.display = 'none';
		lastNameErrorMessage.style.display = 'none';
	}
	// if email is empty/not an email, this changes the border, displays the error message, and error icon
	if (!validateEmail(email)) {
		emailBorder.style.border = '2px solid hsl(0, 100%, 74%)';
		emailErrorIcon.style.display = 'block';
		emailErrorMessage.style.display = 'block';
	} else {
		emailBorder.style.border = '1px solid hsl(246, 25%, 77%)';
		emailErrorIcon.style.display = 'none';
		emailErrorMessage.style.display = 'none';
	}
	// if password is empty, this changes the border, displays the error message, and error icon
	if (password.trim().length === 0) {
		passwordBorder.style.border = '2px solid hsl(0, 100%, 74%)';
		passwordErrorIcon.style.display = 'block';
		passwordErrorMessage.style.display = 'block';
	} else {
		passwordBorder.style.border = '1px solid hsl(246, 25%, 77%)';
		passwordErrorIcon.style.display = 'none';
		passwordErrorMessage.style.display = 'none';
	}
});
