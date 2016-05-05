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