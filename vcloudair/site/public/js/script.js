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
});

// $('.caption:first-child').fadeIn(2500);
// //$('.caption:first-child').slideUp(1500);
// $('.caption:nth-child(2)').fadeIn(1500);

// $('.caption:nth-child(2)').fadeIn(3500);
