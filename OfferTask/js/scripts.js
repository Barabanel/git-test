$(document).ready(function(){
	
	var animationTime = 400;

	$('.close-button').on('click', function(e) {
		e.preventDefault();
		$(this).parent().siblings().slideUp(animationTime);
		$(this).siblings('.row-buttons').delay(animationTime).fadeIn(animationTime/2);
		$(this).fadeOut(animationTime);
	});

	$('.withdraw').on('click', function() {
		$(this).parent().fadeOut(animationTime);
		$(this).parents('.row-value-wrap').find('.withdraw-form-wrap').slideDown(animationTime);
		$(this).parent().siblings('.close-button').delay(animationTime).fadeIn(animationTime/2);
	});

	$('header .burger-menu').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('show-nav');
	})

});


