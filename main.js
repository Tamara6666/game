


$(document).ready(init);
var theTotal = 0;
function init(){
  $('#addStars').on('click', addStars);
  $('.number').on('click', computeTotal);
  $('#reset').on('click', reset);
  
  
 
};



// var numVal = [];
//var nums = [1,2,3,4,5,6,7,8,9]
function randNum(){
	var num = Math.floor(Math.random() * 9) +1 ;
	return num;

};

function reset() {
  $('.total').text('');
  $('.number').button({disabled: false});
}
/*
	$('#but1').on();
	$('#but2').on();
	$('#but3').on();
	$('#but4').on();
	$('#but5').on();
	$('#but6').on();
	$('#but7').on();
	$('#but8').on();
	$('#but9').on();
	
*/

function addStars() {
	var starCount = randNum();
  for(var i = 0; i < starCount; i++){
  	var $stars = $('<td>').append($('<tr>')).appendTo('#star-container');
  	$stars.addClass('.star');
    
  }
  
  };

function computeTotal() {
	theTotal = Number(theTotal) + Number($(this).val());
	console.log($(this));
	$('.total').text("Total:" + (theTotal / 2) );
	//return theTotal;
}
/*
function checkWin() {
	var answer = randNum();
	//var total = computeTotal();
	if (answer == total) {
		$('#lives').text("YOU WIN!!!!! CONGRATULATIONS!!!!!")
		$("body").animate({
			backgroundColor: "#0C0D86"
      }, 2000);
    $("body").animate({
      backgroundColor: "transparent"
      }, 2000);
	}
}

/*
$('#but1').click(function(){
	$('#but1').addClass('.numbersselected');
  $('#but1').off();
});
$('#but2').click(function(){
	$('#but2').addClass('.numbersselected');
  $('.numbers').off();
});
$('#but3').click(function(){
	$('#but3').addClass('.numbersselected');
  $('#but3').off();
});
$('#but4').click(function(){
	$('#but4').addClass('.numbersselected');
  $('#but4').off();
});
$('#but5').click(function(){
	$('#but5').addClass('.numbersselected');
  $('#but5').off();
});
$('#but6').click(function(){
	$('#but6').addClass('.numbersselected');
  $('#but6').off();
});
$('#but7').click(function(){
	$('#but7').addClass('.numbersselected');
  $('#but7').off();
});
$('#but8').click(function(){
	$('#but8').addClass('.numbersselected');
  $('#but8').off();
});
$('#but9').click(function(){
	$('#but9').addClass('.numbersselected');
  $('#but9').off();
});



    
	/*
	console.log('buttons clicked computeTotal');
	  var arr =[];
	  var theTotal = 0;
    theTotal = $('.number').val();
    var total = parseInt($(this).val());
    // var cumTotal = eval((` (${theTotal} + ${total}) -1 `));

  	console.log(theTotal)
   	//$('.total').text(cumTotal);
   	arr.push(theTotal);
    var sum = arr.reduce(addInts, 0);

      function addInts(x, y) {
        return x + y;
      }
    $('.total').text(arraySum);

}; 
   	//console.log(cumTotal);
   	console.log(arraySum);
   //	totalArr.push(cumTotal);       
*/



       
