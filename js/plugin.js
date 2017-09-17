//loading
		$(window).on('load',function(){
				$(".loading .sk-cube-grid").fadeOut(2000,
				 function()
				   {							  

					$(this).parent().remove();
				});
			
	});

$(document).ready(function () {
	"use strict";
	
	/*navbar*/
	$('.nav li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	/*carousel*/

	$('#carouselSlide').carousel({
		interval: 6000
	});
	//change color
	var colorLi = $(".color-option ul li");
	colorLi
		.eq(0).css("backgroundColor","#cf5919").end()
		.eq(1).css("backgroundColor","#168aa5").end()
		.eq(2).css("backgroundColor","#c33734").end()
		.eq(3).css("backgroundColor","rgba(191, 9, 135, 0.67)").end()
		.eq(4).css("backgroundColor","#777").end()
	
	colorLi.click(function(){
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
		
	});
	/*gear*/
	$(".gear-check").click(function () {
		$(".color-option").slideToggle();
	});
	
	/*scroll*/
   var scrollIcon = $("#scroll-top"); 
	$(window).on('scroll',function(){
		if($(this).scrollTop() >= 700){
			scrollIcon.show();
		}
		else{
			scrollIcon.hide();
		}
		

	});
	scrollIcon.click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});
});

	
    
//scroll
$(window).one('scroll',function(){
	/*auto typing*/
				$(".auto").typed({
					strings: ["Technical Experience"],
					typeSpeed: 120
				});

			});
