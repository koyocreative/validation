class Validate {

	static isText( value ) {
		return typeof value === 'string' ? true : false;
	}

	static isEmail( value ) {
		const reg = /\S+@\S+\.\S+/;
		return reg.test(value) ? true : false;
	}

	static isLength( value, vLength ){
		return value.length >= vLength ? true : false;
	}

	static isRequired( value ) {
		return value === '' ? false : true;
	}

	static isSame( vOne, vTwo ) {
		return vOne === vTwo ? true : false;
	}
}

class Error {
	static addError( response, text ) {
		console.log(response);
		response.innerHTML = text;
	}

	static clear( response ) {
		response.innerHTML = '';
	}
}


/// usage 


const username = document.querySelector('.username');
const usernameResponse = document.querySelector('.username-response');

username.addEventListener('input', function() {
	Validate.isText( username.value ) ? true : Error.addError(usernameResponse, 'Username is not text');
	Validate.isLength( username.value, 6 ) ? Error.clear(usernameResponse) : Error.addError(usernameResponse, 'User name has to be longer than 6 characters.');
})



const password = document.querySelector('.password');
const passwordResponse = document.querySelector('.password-response');

const passConfirm = document.querySelector('.passwordconfirm');
const passConfirmResponse = document.querySelector('.passwordconfirm-response');

password.addEventListener('input', function() {
	Validate.isText( password.value ) ? true : Error.addError(passwordResponse, 'Password is not text')
	Validate.isLength( password.value, 6 ) ? Error.clear(passwordResponse) : Error.addError(passwordResponse, 'Password has to be longer that 6 cxharacters.')
})	

passConfirm.addEventListener('input', function() {
	Validate.isSame( password.value, passConfirm.value) ? Error.clear(passConfirmResponse) : Error.addError(passConfirmResponse, 'Passwords do not match');
})



const email = document.querySelector('.email');
const emailResponse = document.querySelector('.email-response');

const emailConfirm = document.querySelector('.emailconfirm');
const emailConfirmResponse = document.querySelector('.emailconfirm-response');

email.addEventListener('input', function() {
	Validate.isText( email.value ) ? true : Error.addError(emailResponse, 'Email is not text')
	Validate.isLength( email.value, 6 ) ? Error.clear(emailResponse) : Error.addError(emailResponse, 'Password has to be longer that 6 cxharacters.')
	Validate.isEmail( email.value ) ? Error.clear(emailResponse) : Error.addError(emailResponse, 'Please enter valid email');
})	

emailConfirm.addEventListener('input', function() {
	Validate.isSame( email.value, emailConfirm.value) ? Error.clear(emailConfirmResponse) : Error.addError(emailConfirmResponse, 'Emails do not match');
})