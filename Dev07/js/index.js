function resetSign01() {
	welcome = '';
	sign = '';
	calcSign();
	setSign();
}

function resetSign02(event) {
	var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
	
	for (var i=0; i<signData.length; i++) {
		setTextContentById(signData[i], '');
		
	}
	event.preventDefault(); 
}

var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
var welcome;
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;

function calcSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Hello'; 
	name = 'Conner';
	message = 'Review your order:';
	sign = 'For What';
	welcome = greeting +'! '+ name + ', ' + message;
	calcSign(); 
}

function setTextContentById(getId, setMsg) {
  var el = document.getElementById(getId);
  el.textContent = setMsg;
}

function setSign() {
	setTextContentById('greeting', welcome);
	setTextContentById('userSign', sign);
	setTextContentById('tiles', tiles);
	setTextContentById('subTotal', '$' + subTotal);
	setTextContentById('shipping', '$' + shipping);
	setTextContentById('grandTotal', '$' + grandTotal);
} 

initiateVars(); 
setSign(); 

var el = document.getElementById('resetButton');
el.addEventListener('click', resetSign02, false);
