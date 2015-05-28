// add your code here
var indx=0;
$(document).ready(function($) {


// $(".logo").slideDown(1000);
$("header").slideDown(1000);

$("#menu").slideDown(1000);	

	function sample(){
        var current= $('.slide');
    	$(current[indx]).fadeOut(1000,function(){indx++;if(indx>=current.length)indx=0;$(current[indx]).fadeIn(5000,sample)});
    }









var incabout=1;
var incworks=1;

setInterval(function() {
  	$('body section .caption:nth-child(1)').css("animation","top-one 15s ease infinite");
	$('body section .caption:nth-child(2)').css("animation","top-one 15s ease infinite");
	$('body section .caption:nth-child(3)').css("animation","top-one 15s ease infinite");

},2000);

// function loop(){

// 	$('body section .caption:nth-child(1)').css("animation","top-one 5s ease 5s");
// 	$('body section .caption:nth-child(2)').css("animation","top-one 5s ease 10s");
// 	$('body section .caption:nth-child(3)').css("animation","top-one 5s ease 15s");
// loop();
// };
// loop();

$(".about").waypoint(function(){

	var intervalId=setInterval(function(){
	var el=$(".animblock-about");
	if(el.length > 0){
	 		$(".animblock-about:nth-child("+incabout+")").removeClass('notViewed').addClass('viewed');
		 incabout++;
		}
		else
			clearInterval(intervalId);
},200);


},{offset:'50%'});

$(".works").waypoint(function(){

	var intervalId=setInterval(function(){

	var el=$(".animblock");
	if(el.length > 0){	 
	 		$(".animblock:nth-child("+incworks+")").removeClass('notViewed').addClass('viewed');
		 incworks++;
		}
		else
			clearInterval(intervalId);
},200);


},{offset:'50%'});

$(".slider").waypoint(function(){

    		$(".left").animate({"left":"-10%"}, 3800);
			$(".left-overlay").animate({"width":"76%"},3800);
			$(".right").animate({"left":"30.7%"}, 3000);
twinkling();

},{offset:'20%'});







function twinkling(){
	$(".animation .col-md-6 .twinkling1,.twinkling2,.twinkling3").css("display","none");
}



$(".animation").waypoint(function(){
twinkling();




// setTimeout(function(){
// $('.animation .col-md-6 .vcloud').css({"transform":"translateY(-40%)","transition-duration":"0.8s"});
// },800);





},{offset:'50%'});

$(".animate").waypoint(function(){

$(".animation .col-md-6 .twinkling1,.twinkling2,.twinkling3").css("display","block");






var rotate=0;
var translateX=0;
var translateY=0;
var vtranslateY=0;
var globrotate=0;	
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 0) {
//         // apply effects and animations
       
//     }
// });


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       if(rotate<=-50 && translateX<=30 && translateY<=-100 && vtranslateY<=-25){
		        rotate=rotate-10;
		        translateX=translateX+6;
		        translateY=translateY-20;
		        vtranslateY=vtranslateY-5;
				globrotate=globrotate+180;
		}else{
			rotate=-50;
		        translateX=30;
		        translateY=-100;
		        vtranslateY=-25;
		        globrotate=0;
		}
if($(window).scrollTop()>=2700){
		$('.animation .col-md-6 .azure').css({"transform":"rotate("+rotate+"deg) translateX("+translateX+"%) translateY("+translateY+"%)","transition-duration":"3s"});
		
		$('.animation .col-md-6 .vcloud').css({"transform":"translateY("+translateY+"%)","transition-duration":"1.5s"});
}
if($(window).scrollTop()>=2700){
	$('.globe').fadeIn(1000).css({"transform":"rotate("+globrotate+"deg)","transition-duration":"0.8s" });
	$('.aws').fadeIn(1000);
	}

   } else {
      // upscroll code
      if(rotate>=-50 && translateX>=30 && translateY>=-100 && vtranslateY>=-25){
      rotate=rotate+10;
        translateX=translateX-6;
        translateY=translateY+20;
        vtranslateY=vtranslateY+5;
        globrotate=globrotate-72;
		
   }else{
			rotate=0;
		        translateX=0;
		        translateY=0;
		        vtranslateY=0;
		        globrotate=0;
		}

		$('.animation .col-md-6 .azure').css({"transform":"rotate("+rotate+"deg) translateX("+translateX+"%) translateY("+translateY+"%)","transition-duration":"3s"});
		$('.animation .col-md-6 .vcloud').css({"transform":"translateY("+translateY+"%)","transition-duration":"0.8s"});
   }
   lastScrollTop = st;
});












},{offset:'1%'});


});




// $('.caption:first-child').fadeIn(2500);
// //$('.caption:first-child').slideUp(1500);
// $('.caption:nth-child(2)').fadeIn(1500);

// $('.caption:nth-child(2)').fadeIn(3500);
