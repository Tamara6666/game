


$(document).ready(init);
var theTotal = 0;
function init(){
  $('#addStars').on('click', addStars);
  $('.number').on('click', computeTotal);
  $('#reset').on('click', reset);
  
  
 
};



// var numVal = [];
function randNum(){
	var num = Math.floor(Math.random() * 9) +1 ;
	return num;

};

function reset() {
  $('.total').text('');
  $('.number').button({disabled: false});
}


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



       
