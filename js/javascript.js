var height = document.getElementById('triangle-height');
var base = document.getElementById('triangle-base');



function btnClicked(){
	console.log('button pressed');
}

function calculateArea(height, base){

	height = height;
	base = base;
	console.log('btn clicked');

	var area = (base * height) / 2;

	document.getElementById('triangle-area').innerHTML = area;

	
};

document.getElementById('submit-btn').onclick = function(){

	calculateArea(height.value, base.value);
}

