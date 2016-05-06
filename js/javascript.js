function calculateArea(height, base){

	console.log('btn clicked');

	var area = (base * height) / 2;

	document.getElementById('triangle-area').innerHTML = area;

};

function validateForm(){
	var heightVal = document.forms['calculate-area-form']['height'].value;
	var baseVal = document.forms['calculate-area-form']['base'].value;

	

	if(heightVal == null || heightVal == "" || baseVal == null || baseVal == "")
	{
		if(heightVal == null || heightVal == ""){
			document.getElementById('height-error-message').innerHTML = ' Please enter a height value'
		}else{
			document.getElementById('height-error-message').innerHTML = ''
		}

		if (baseVal == null || baseVal == ""){
			document.getElementById('base-error-message').innerHTML = ' Please enter a base value'
		}else{
			document.getElementById('base-error-message').innerHTML = ''
		}

	}else{
		var height = document.getElementById('triangle-height');
		var base = document.getElementById('triangle-base');

		document.getElementById('height-error-message').innerHTML = ''
		document.getElementById('base-error-message').innerHTML = ''

		calculateArea(height.value, base.value);
	}


		
}

document.getElementById('submit-btn').onclick = function(){

	validateForm();

}

function validatePersonalForm(){

	var firstName = document.forms['personal-info-form']['first-name'];
	var lastName = document.forms['personal-info-form']['last-name'];
	var email = document.forms['personal-info-form']['email'];
	var gender = document.forms['personal-info-form']['gender'];
	var genderContainer = document.getElementById('radio-container');

	var firstNameBool = false;
	var lastNameBool = false;
	var emailBool = false;
	var radioChecked = false;

	console.log(gender.length);

	console.log('first name bool = ' + firstNameBool)

	if(firstName.value == "" || firstName.value == null){
		firstName.className += ' validation-error';
		
		
	}else{
		firstNameBool = true;

		if(firstName.className == ' validation-error'){
			firstName.className -= ' validation-error';
		}
	}

	if(lastName.value == "" || lastName.value == null){
		lastName.className += ' validation-error';
		
	}else{
		lastNameBool = true;
	}

	if(email.value == "" || email.value == null){
		email.className += ' validation-error';
		
	}else{
		emailBool = true;
	}

	for(var i = 0; i < gender.length; i++){
		
		
		if(gender[i].checked == false){
			console.log('item not checked')
			
		}else{
			

			console.log('item checked')
			radioChecked = true;
		}
	}

	if(radioChecked == false){			 
		genderContainer.className += ' validation-error';
		
	}

	if(firstNameBool == false || lastNameBool == false || emailBool == false || radioChecked == false){
		return false;
	}else{
		return true;
	}

	
	
}

function displayTime(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var ampm = hour >= 12 ? 'pm' : 'am';
	hour = hour < 10 ? '0'+hour : hour;
	minute = minute < 10 ? '0'+minute : minute;
	second = second < 10 ? '0'+second : second;

	document.getElementById("local-time").innerHTML = hour + ":" + minute + ":" + second + " " + ampm;

}

var showTime = setInterval(displayTime, 1000);

function displayCopyrightYear(){
	var date = new Date();
	var year = date.getFullYear();

	document.getElementById("copyright-year").innerHTML = " " + year;
}

displayCopyrightYear();