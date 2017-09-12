
var main =function(){

	var font_colors = ['red','orange','yellow','green','cyan','blue','purple'];

	$('.relevant p').hide();

	for (i = 0; i < 7; i++) {
		var num = $(this).find('.relevant p:nth-child('+(i+1)+')');
		num.css('color', font_colors[i]);
		num.delay(i*400).fadeIn(1200);
	}
};

$(document).ready(main);

