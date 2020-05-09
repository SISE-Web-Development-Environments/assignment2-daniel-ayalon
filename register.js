var newUser
$(document).ready(function() {

	sessionStorage.clear();
    localStorage.clear();
	createUsersList(); 
	

});
function addUserNew() {
    getRegistFields();
	if (form_validation()) {
        alert('The user added successfuly')
		addNewUser();
		gotoRegister();
	}
}
function addNewUser(){
    this.usersList.push(newUser.username);
    this.passwordList.push(newUser.pass);
    this.Firstnames.push(newUser.firstName);
    this.Lastnames.push(newUser.LastName);
	this.emailList.push(newUser.email);
    this.birthDateList.push(newUser.bday);
	updateStorage();
}
function getRegistFields() {
	this.newUser = {
		username: $('#userName').val(),
		pass: $('#Password').val(),
		email: $('#Email').val(),
        bday: $('#BirthDate').val(),        
        LastName: $('#LastName').val(),
        firstName: $('#FirstName').val(),
    };
}

function form_validation() {
	let isValid = true;
	let username = newUser.username;
	let pass = newUser.pass;
	let email = newUser.email;
    let bday = newUser.bday;
    let LastName = newUser.LastName;
    let firstName = newUser.firstName;

	$(".error").remove();

	if (username.length < 1) {
		$('#userName').after('<span class="error">required filed</span>');
		isValid = false;
    }
    if (bday.length < 1) {
		$('#BirthDate').after('<span class="error"> required field</span>');
		isValid = false;
	}

	else if (findUser(username)) {
		$('#userName').after('<span class="error">Username already exist.</span>');
		isValid = false;
	}
	if (pass.length < 6) {
		$('#Password').after('<span class="error">Password is too short</span>');
		isValid = false;
	} else if (!isContainLetter(pass)) {
		$('#Password').after('<span class="error">Password must contain a character</span>');
		isValid = false;
	} else if (!isContainNumber(pass)) {
		$('#Password').after('<span class="error">Password must contain a number</span>');
		isValid = false;
	}
    if (firstName.length < 1) {
		$('#FirstName').after('<span class="error">required filed</span>');
		isValid = false;
	} else if (isContainNumber(firstName)) {
		$('#FirstName').after('<span class="error">must contain letters only</span>');
		isValid = false;
	}
	if (LastName.length < 1) {
		$('#LastName').after('<span class="error">required filed</span>');
		isValid = false;
	} else if (isContainNumber(LastName)) {
		$('#LastName').after('<span class="error">must contain letters only</span>');
		isValid = false;
	}
	
		var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validEmail = regEx.test(email);
		if (!validEmail) {
			$('#Email').after('<span class="error">Enter a valid email</span>');
			isValid = false;
		}
	
	
	return isValid;
}

function isContainLetter(pass) {
	for (var i = 0; i < pass.length; i++) {
		let char = pass.charAt(i);
		if (char.toUpperCase() != char.toLowerCase())
			return true;
	}
	return false;
}

function isContainNumber(pass) {
	for (var i = 0; i < pass.length; i++) {
		let char = pass.charAt(i);
		if ((char >= '0' && char <= '9'))
			return true;
	}
	return false;
}









