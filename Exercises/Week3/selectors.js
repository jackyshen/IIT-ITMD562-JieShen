var main =function()
{
	var font_colors = ['red','orange','yellow','green','cyan','blue','purple'];
  $("p").hide();
	for (i = 0; i < 7; i++) 
	{
	var num = $(this).find('p:nth-child('+(i+1)+')');
		num.css('color', font_colors[i]);
		num.delay(i*300).fadeIn(1000);
	}
};
$(document).ready(main);

