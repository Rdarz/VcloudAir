// var indx = 0;
var incabout = 1; //about panel scroll up
var incworks = 1; //works panel scroll up
var incslider = 1; //slider no
var rotate = 0;
var translateX = 0;
var translateY = 0;
var vtranslateY = 0;
var globrotate = 0;






$("header").slideDown(1000);
$("#menu").slideDown(1000);


var s = skrollr.init({
    smoothScrolling: true,
    smoothScrollingDuration: 1800
});


function twinklingOff() {
    $(".animation .col-md-6 .twinkling1,.twinkling2,.twinkling3").removeClass("display-block").addClass("display-none");
}

function twinklingOn() {
    $(".animation .col-md-6 .twinkling1,.twinkling2,.twinkling3").removeClass("display-none").addClass("display-block");
}


var intervalId = setInterval(function() {
    $(".caption").removeClass('viewed');
    var el = $(".caption");
    if (incslider == 4) {
        incslider = 1;
    }

    $(".caption:nth-child(" + incslider + ")").fadeIn(1000).removeClass('notViewed').addClass('viewed').fadeOut(4000);
    incslider++;


}, 5000);


var screen_pos_about = 337;

$(window).scroll(function(event) {
    var intervalId = setInterval(function() {
        var el = $(".animblock-about");
        if (el.length > 0 && $(window).scrollTop() >= screen_pos_about) {
            $(".animblock-about:nth-child(" + incabout + ")").removeClass('notViewed').addClass('viewed');
            incabout++;
            screen_pos_about = screen_pos_about + 150;
        } else {
            $(".animblock-about:nth-child(" + incabout + ")").removeClass('viewed').addClass('notViewed');
            incabout--;
            screen_pos_about = screen_pos_about - 150;
            clearInterval(intervalId);
        }

    }, 200);
});


var screen_pos_works = 342;

$(window).scroll(function(event) {
    var intervalId = setInterval(function() {

        var el = $(".animblock");
        if (el.length > 0 && $(window).scrollTop() >= screen_pos_works) {
        	$(".works").find('.title').animate({"margin-top":"0"}, 1000);
            $(".animblock:nth-child(" + incworks + ")").removeClass('notViewed').addClass('viewed');
            incworks++;
            screen_pos_works = screen_pos_works + 110;
        } else {
        
            $(".animblock:nth-child(" + incworks + ")").removeClass('viewed').addClass('notViewed');
            incworks--;
            screen_pos_works = screen_pos_works - 110;
            clearInterval(intervalId);
        }
    }, 400);
});


var screen_pos_slider = 718;

	$(window).scroll(function(event) {
		
		if ($(window).scrollTop() >= screen_pos_slider) {
			
	    $(".left").animate({
	        "left": "-10%"
	    }, 1500);
	    $(".left-overlay").animate({
	        "width": "76%"
	    }, 1500);
	    $(".right").animate({
	        "left": "30.7%"
	    }, 1600);
	}else{
		
	

	}

});





$(window).scroll(function(event) {
    if ($(window).scrollTop() >= 1764 && $(window).scrollTop() <= 3958) {
        twinklingOn();
      
    } else {
        twinklingOff();
    }


    if($(window).scrollTop() >= 1100 && $(window).scrollTop() <= 1500){
    	  $(".animation").find('.title').animate({"margin-top":"0"}, 1000);
    }else{

    	
    }
});


    var lastScrollTop = 0;

  var counter=0;
    $(window).scroll(function(event) {

        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            if (rotate <= -50 && translateX <= 30 && translateY <= -100 && vtranslateY <= -25) {
                rotate = rotate - 10;
                translateX = translateX + 6;
                translateY = translateY - 20;
                vtranslateY = vtranslateY - 5;
                globrotate = globrotate + 180;
            } else {
                rotate = -50;
                translateX = 30;
                translateY = -100;
                vtranslateY = -25;
                globrotate = 0;
            }

            if ($(window).scrollTop() >= 2166) {
            	console.log("down");
            	
                $('.animation .col-md-6 .azure').css({
                    "transform": "rotate(" + rotate + "deg) translateX(" + translateX + "%) translateY(" + translateY + "%)",
                    "transition-duration": "3s"
                });

                $('.animation .col-md-6 .vcloud').css({
                    "transform": "translateY(" + translateY + "%)",
                    "transition-duration": "1.5s"
                });
               
            }

            if ($(window).scrollTop() >=2600) {
            	if(counter==0){
                $('.globe').fadeIn(1000).css({
                    "transform": "rotate(" + globrotate + "deg)",
                    "transition-duration": "0.8s"
                });
                $('.aws').fadeIn(1000);
                $('.performer1 img').css("display","block");                
                $('.performer1').addClass("rotate360-img1");
                $('.performer2 img').css("display","block");               
                $('.performer2').addClass("rotate360-img2");
               $('.performer3 img').css("display","block");
                $('.performer3').addClass("rotate360-img3");
               $('.performer4 img').css("display","block");
                $('.performer4').addClass("rotate360-img4");
                $('#circle1').circleProgress({
        value: 0.90,
        startAngle:10,
        size: 270,
        thickness:5,
        fill: {
            gradient: ["#88cadf"]
        },animation:{duration:1700}
    });
    $('#circle2').circleProgress({
        value: 0.92,
        startAngle:10,
        size: 340,
        thickness:5,
        fill: {
            gradient: ["#88cadf"]
        },animation:{duration:1900}
    });
    $('#circle3').circleProgress({
        value: 0.93	,
        startAngle:10,
        size: 400,
        thickness:5,
        fill: {
            gradient: ["#88cadf"]
        },
        animation:{duration:2100}
    });
     $('#circle4').circleProgress({
        value: 0.85,
        startAngle:10,
        size: 200,
        thickness:5,
        fill: {
            gradient: ["#5CA635"]
        },animation:{duration:1700}
    });
             counter++;
            }}

        } else {




            // upscroll code
            if (rotate >= -50 && translateX >= 30 && translateY >= -100 && vtranslateY >= -25) {
                rotate = rotate + 10;
                translateX = translateX - 6;
                translateY = translateY + 20;
                vtranslateY = vtranslateY + 5;
                globrotate = globrotate - 72;

            } else {
                rotate = 0;
                translateX = 0;
                translateY = 0;
                vtranslateY = 0;
                globrotate = 0;
            }

            $('.animation .col-md-6 .azure').css({
                "transform": "rotate(" + rotate + "deg) translateX(" + translateX + "%) translateY(" + translateY + "%)",
                "transition-duration": "3s"
            });
            $('.animation .col-md-6 .vcloud').css({
                "transform": "translateY(" + translateY + "%)",
                "transition-duration": "0.8s"
            });
        }

        lastScrollTop = st;
    }); //window scroll end



var temp=0;
var screen_pos_freetrial = 3185;

	$(window).scroll(function(event) {
		
		console.log($(window).scrollTop());
		if ($(window).scrollTop() >= screen_pos_freetrial) {
		
	    $(".free-trial-left-overlay").animate({
	        "left": "-16%"
	    }, 3000);
	    	if(temp==0){
	    $(".free-trial .content").fadeIn(6000);
	    console.log("temp"+temp);
	    temp++;
	}
	    $(".free-trial-right-overlay").animate({
	        "right": "-2%"
	    }, 3500);
	}else{
		
	

	}

});

	