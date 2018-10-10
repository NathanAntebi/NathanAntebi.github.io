$(document).ready(function(){

	/*======SUPERSLIDES JAVASCRIPT PLUGIN======*/

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	/*===========================================*/



	/*======TYPED.JS JAVASCRIPT PLUGIN======*/

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Web Developer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: true
	});

	/*===========================================*/





	/*======OWLCAROUSEL JAVASCRIPT PLUGIN======*/

	$('.owl-carousel').owlCarousel({
	    loop:false,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});
	/*===========================================*/



	/*======EASYPIECHART JAVASCRIPT PLUGIN======*/

	

	var skillsTopOffset = $(".skills-section").offset().top;

	$(window).scroll(function(){

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
			$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });
		}
	})
	/*===========================================*/


	$(".items").isotope({
		filter: "*",
		animationOptions:{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$(".filter a").click(function(){

		$(".filter .current").removeClass("current");
		$(this).addClass("current");

		var selector= $(this).attr("data-filter");

		$(".items").isotope({
		filter: selector,
		animationOptions:{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

		return false;
	});

	$("#navigation li a").click(function(e){
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({
			scrollTop: targetPosition - 50
		}, "slow");
	})

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation)

	function stickyNavigation(){

		var body = $("body");

		if($(window).scrollTop() >= navTop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}else{
			body.removeClass("fixedNav");
		}
	}
});
