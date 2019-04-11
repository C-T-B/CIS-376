$(function(){
  
  $('#userSignInput').on('keyup',function(e) {
   
   var signChar = $(this).val().length;
   $('#totalTiles').text(signChar);
   updatePrice(signChar);
  })
    
  $('#userFontInput').on('click',function(e) {
   
    var fontSelect = $(this).is(':checked');
    updatePrice($('#userSignInput').val().length,fontSelect)
  })
})

function updatePrice(signLength,fontUpgrade) {
  var costPerTile =5;
  
  if(fontUpgrade) {
    console.log('updating your tile cost.....');
    costPerTile=6; }
  else {costPerTile = 5;}
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  
  if(signLength != 0 ) {shipping = 7 }
  else{shipping = 0}
  
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;
}
//OLD CODE
//$(document).ready(function () {
//$('#content').hide().fadeIn(3000); 	
	
//	function resetSign01() {
//	welcome = '';
//	sign = '';
//	calcSign();
//	setSign();
//}

//function resetSign02(event) {
//	var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
	
//	for (var i=0; i<signData.length; i++) {
//		setTextContentById(signData[i], '');
		
//	}
//	event.preventDefault(); 
//}

//var greeting = '[not initialized]';
//var name = '[not initialized]';
//var message = '[not initialized]';
//var welcome;
//var sign = '[not initialized]';
//var tiles, subTotal, shipping, grandTotal;

//function calcSign() {
//  tiles = sign.length;
//  subTotal = tiles * 5;
//  shipping = 7;
//  grandTotal = subTotal + shipping;
//}

//function initiateVars() {
//  greeting = 'Hello'; 
//	name = 'Conner';
//	message = 'Review your order:';
//	sign = '';
//  welcome = greeting +'! '+ name + ', ' + message;
//	calcSign(); 
//}

//function setTextContentById(getId, setMsg) {
//  var el = document.getElementById(getId);
//  el.textContent = setMsg;
//}
//function Signage() {
//  document.getElementById("form").submit();
//}
//function setSign() {
//	setTextContentById('greeting', welcome);
//	setTextContentById('userSign', sign);
//	setTextContentById('tiles', tiles);
//	setTextContentById('subTotal', '$' + subTotal);
//	setTextContentById('shipping', '$' + shipping);
//	setTextContentById('grandTotal', '$' + grandTotal);
//} 

//initiateVars(); 
//setSign(); 

//var el = document.getElementById('resetButton');
//el.addEventListener('click', resetSign02, false);
//})
