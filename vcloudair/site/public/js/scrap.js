 setInterval(function() {
	        $('body section .caption:nth-child(1)').addClass("caption-slide");
	        $('body section .caption:nth-child(2)').addClass("caption-slide");
	        $('body section .caption:nth-child(3)').addClass("caption-slide");

	    }, 2000); //caption slider 


 var	screen_pos_works=741;

	    		 $(window).scroll(function(event) {
				        	 var intervalId = setInterval(function() {

				            var el = $(".animblock");
				            if (el.length > 0 && $(window).scrollTop() >= screen_pos_works) {
				                $(".animblock:nth-child(" + incworks + ")").removeClass('notViewed').addClass('viewed');
				                incworks++;
				                screen_Pos_works=screen_pos_works+100;
				            } else{
				            	$(".animblock:nth-child(" + incworks + ")").removeClass('viewed').addClass('notViewed');
				            				incworks--;
				                			screen_pos_works=screen_pos_works-100;
				                			clearInterval(intervalId);
				            }
				        }, 200);
 				});


var screen_pos_about=337;

	    		 $(window).scroll(function(event) {
	    		 		var intervalId = setInterval(function() {
	    		 			var el = $(".animblock-about");
	    		 			if (el.length > 0 && $(window).scrollTop() >= screen_pos_about ) {
	                				$(".animblock-about:nth-child(" + incabout + ")").removeClass('notViewed').addClass('viewed');
	                				incabout++;
	                				screen_pos_about=screen_pos_about+150;
		            			} else{ 
		            				$(".animblock-about:nth-child(" + incabout + ")").removeClass('viewed').addClass('notViewed');
		            				incabout--;
		                				screen_pos_about=screen_pos_about-150;
									clearInterval(intervalId);
		            			}
	                
	        		}, 200);
	    		 });
	    		 
$(".animation").waypoint(function() {

}, {
    offset: '90%'
});