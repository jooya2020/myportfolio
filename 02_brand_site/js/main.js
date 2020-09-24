
$(document).ready(function() {	

		var id = '#dialog';
	
		//Get the screen height and width
		
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':"100%",'height':"100%"});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",1);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
	
		//transition effect
		$(id).fadeIn(1000); 	
	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
        $('#vedio').hide();
        $(function deleteVideo()
        {
        document.getElementById('vedio').src='';
        })
	});		
	
});




