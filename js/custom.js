
$(document).ready(function(){
	/* ====Wow Js ===== */
	new WOW().init();
	/* ====Counter Js ===== */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	/* ====Owl carousel 001  ===== */
	$("#slider-owl-carousel").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		animateOut: 'fadeIn',
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		nav:false,
	});
	/* ====Owl carousel 002  ===== */
	$("#testimonials-owl-carousel").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		smartSpeed:550,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		dots:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
	});
	var selector = $('.owl-carousel');

		$('.next-button').click(function() {
		selector.trigger('next.owl.carousel');
		});

		$('.prev-button').click(function() {
		selector.trigger('prev.owl.carousel');
		});
	/* === sticky header === */
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("main-nav");

	function myFunction() {
	if (window.scrollY > 300) {
		header.classList.add("fixed");
		header.classList.add("py-5");
		header.classList.add("duration-500");
		header.classList.remove("py-10");
	} else {
		header.classList.remove("fixed");
		header.classList.remove("py-5");
		header.classList.remove("duration-500");
		header.classList.add("py-10");
	}
	}
	/* === UPPER BUTTON SCROLL START === */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x >700){
			$('#upper').fadeIn(1000);
			
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},1000);
	});
});