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



function twinklingOff() {
    $(".animation .col-md-6 .twinkling1,.twinkling2,.twinkling3").removeClass("display-block").addClass("display-none");
}

function twinklingOn() {
    $(".animation .col-md-6 .twinkling1,.twinkling2,.twinkling3").removeClass("display-non").addClass("display-block");
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


var screen_pos_works = 741;

$(window).scroll(function(event) {
    var intervalId = setInterval(function() {

        var el = $(".animblock");
        if (el.length > 0 && $(window).scrollTop() >= screen_pos_works) {
            $(".animblock:nth-child(" + incworks + ")").removeClass('notViewed').addClass('viewed');
            incworks++;
            screen_pos_works = screen_pos_works + 150;
        } else {
            $(".animblock:nth-child(" + incworks + ")").removeClass('viewed').addClass('notViewed');
            incworks--;
            screen_pos_works = screen_pos_works - 150;
            clearInterval(intervalId);
        }
    }, 200);
});


var screen_pos_slider = 1254;

	$(window).scroll(function(event) {
		if ($(window).scrollTop() >= screen_pos_slider) {
	    $(".left").animate({
	        "left": "-10%"
	    }, 3800);
	    $(".left-overlay").animate({
	        "width": "76%"
	    }, 3800);
	    $(".right").animate({
	        "left": "30.7%"
	    }, 3000);
	}else{
		
		$(".left").animate({
	        "left": "-60%"
	    }, 3800);
	    $(".left-overlay").animate({
	        "width": "85%"
	    }, 3800);
	    $(".right").animate({
	        "left": "101%"
	    }, 3000);
	

	}

});





$(".animation").waypoint(function() {

}, {
    offset: '90%'
});
$(window).scroll(function(event) {
    if ($(window).scrollTop() >= 2277 && $(window).scrollTop() <= 3474) {
        twinklingOn();
    } else {
        twinklingOff();
    }
});

$(".animate").waypoint(function() {
    var lastScrollTop = 0;


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

            if ($(window).scrollTop() >= 2700) {
                $('.animation .col-md-6 .azure').css({
                    "transform": "rotate(" + rotate + "deg) translateX(" + translateX + "%) translateY(" + translateY + "%)",
                    "transition-duration": "3s"
                });

                $('.animation .col-md-6 .vcloud').css({
                    "transform": "translateY(" + translateY + "%)",
                    "transition-duration": "1.5s"
                });
            }
            if ($(window).scrollTop() >= 2700) {
                $('.globe').fadeIn(1000).css({
                    "transform": "rotate(" + globrotate + "deg)",
                    "transition-duration": "0.8s"
                });
                $('.aws').fadeIn(1000);
            }

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

}, {
    offset: '1%'
});