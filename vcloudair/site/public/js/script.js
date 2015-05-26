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


},{offset:'50%'});



});

// $('.caption:first-child').fadeIn(2500);
// //$('.caption:first-child').slideUp(1500);
// $('.caption:nth-child(2)').fadeIn(1500);

// $('.caption:nth-child(2)').fadeIn(3500);
