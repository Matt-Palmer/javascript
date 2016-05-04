var height = document.getElementById('triangle-height');
var base = document.getElementById('triangle-base');

document.getElementById('submit-btn').onclick = calculateArea(height.value, base.value);

function calculateArea(height, base){
	var area = (base * height) / 2;

	document.getElementById('triangle-area').innerHTML = area;

	console.log(area);
};

