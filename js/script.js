
(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			const windowpos = $(window).scrollTop();
			const siteHeader = $('.main-header');
			const scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		const mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Shedule Block
	if ($('.schedule-block').length) {
		$('.schedule-block.active').find('.lower-content').slideDown();

		$('.schedule-block .toggle-btn').on('click', function () {
			$(this).parents('.schedule-block').toggleClass('active');
			$(this).parents('.schedule-block').find('.lower-content').slideToggle(400);
			$(this).parents('.schedule-block').siblings().find('.lower-content').slideUp(400);
			$(this).parents('.schedule-block').siblings().removeClass('active');
		});
	}

	//Last Date
	if ($('.date-btn').length) {
		const lastDate = $('.date-btn').attr('data-last-date');
		$('.date-btn').on('click', function () {
			$(this).html(lastDate);
		});
	}



	//Search Popup
	if ($('#search-popup').length) {

		//Show Popup
		$('.search-box-btn').on('click', function () {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function (e) {
			if (e.keyCode == 27) {
				$('#search-popup').removeClass('popup-visible');
			}
		});
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function () {
			$('#search-popup').removeClass('popup-visible');
		});
	}



	// Banner Carousel / Owl Carousel 
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 5000,
			navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				},
			}
		});
	}

	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		});
	}

	// Gallery  Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				800: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//Clients Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			lazyLoad: true,
			smartSpeed: 700,
			autoplay: true,
			navText: ['<span class="la la-angle-left"></span>', '<span class="la la-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//Parallax Scene for Icons
	if ($('.parallax-scene-1').length) {
		const scene = $('.parallax-scene-1').get(0);
		const parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-2').length) {
		const scene = $('.parallax-scene-2').get(0);
		const parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-3').length) {
		const scene = $('.parallax-scene-3').get(0);
		const parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-4').length) {
		const scene = $('.parallax-scene-4').get(0);
		const parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-5').length) {
		const scene = $('.parallax-scene-5').get(0);
		const parallaxInstance = new Parallax(scene);
	}

	//Masonary
	function enableMasonry() {
		if ($('.masonry-items-container').length) {

			const winDow = $(window);
			// Needed letiables
			const $container = $('.masonry-items-container');

			$container.isotope({
				itemSelector: '.masonry-item',
				masonry: {
					columnWidth: 1
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});

			winDow.on('resize', function () {

				$container.isotope({
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
			});
		}
	}

	enableMasonry();

	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {

			const $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function () {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function () {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		}, { accY: 0 });
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			const target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			const outerBox = $(this).parents('.accordion-box');
			const target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Event Countdown Timer
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			const $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function (event) {
				const $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Дни</div> ' + '<div class="counter-column"><span class="count">%H</span>Часа</div>  ' + '<div class="counter-column"><span class="count">%M</span>Минути</div>  ' + '<div class="counter-column"><span class="count">%S</span>Секунди</div>'));
			});
		});
	}

	if ($('.cs-countdown').length) {
		$(function () {
			$('[data-countdown]').each(function () {
				const $this = $(this), finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function (event) {
					$this.html(event.strftime('%D days %H:%M:%S'));
				});
			});
		});

		$('.cs-countdown').countdown('').on('update.countdown', function (event) {
			const $this = $(this).html(event.strftime('<div><span>%m</span><h6>Months</h6></div> <div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>'));
		});
	}

	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}

	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			const target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}


	// Elements Animation
	if ($('.wow').length) {
		const wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: true,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}


	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
		enableMasonry();
	});


	/* ==========================================================================
	   Custom scripts baby
	   ========================================================================== */

	$('a').click(function () {
		const href = $(this).attr('href');
		const text = $(this).text();
		fbq('trackCustom', 'LinkClick', {
			link_text: text,
			link_href: href
		});
	});

	$(document).ready(function () {
		setTimeout(function () {
			fbq('trackCustom', 'Stay15', {
				page_title: $(document).attr('title'),
				page_url: window.location.pathname
			});
		}, 15000);

		setTimeout(function () {
			fbq('trackCustom', 'Stay25', {
				page_title: $(document).attr('title'),
				page_url: window.location.pathname
			});
		}, 25000);

		setTimeout(function () {
			fbq('trackCustom', 'Stay35', {
				page_title: $(document).attr('title'),
				page_url: window.location.pathname
			});
		}, 35000);
	});

	const toTitleCase = (phrase) => {
		return phrase
			.toLowerCase()
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	if($('.voting-section').length) {
		$(".embedded-voting-block").detach().appendTo('.voting-projects-embedded')
		$(".software-voting-block").detach().appendTo('.voting-projects-software')
		$(".networks-voting-block").detach().appendTo('.voting-projects-networks')
	}

	$('section').waypoint(function (direction) {
		fbq('trackCustom', 'ViewSection', {
			section_title: toTitleCase($(this.element).attr('id')),
			section_id: $(this.element).attr('id')
		});
		this.enabled = false
	}, {
		offset: '25%'
	})

	$('.overview-info-box').click(function() {
		window.location = $(this).find('h4').find('a').attr("href"); 
	});

	if (window.matchMedia("(max-width: 990px)").matches) {
		$('.projects-button-container').on( 'click', 'span', function() {
			$("body,html").animate({
				scrollTop: $("#projects-container").offset().top - 90
				
			}, 500);
		});
    }

	
	$('.projects-button-container').on( 'click', 'span', function() {
		const filterValue = $(this).attr('data-filter');
		$(".embedded").css("background-image", "url('/images/robotics.png')")
		$(".software").css("background-image", "url('/images/software.png')")
		$(".networks").css("background-image", "url('/images/networks.png')")
		$(this).find("div").css("background-image", "linear-gradient(rgb(57, 60, 152, 0.7), rgb(57, 60, 152, 0.7))," + $(this).find("div").css("background-image"))
		$(".news-block").hide();
		$(filterValue).show();

	});

	$(".embedded").click(function() {
        $(".client-block").hide()
        window.location.hash = "#embedded"
		$(".embedded-sponsors").show()
	})

	$(".software").click(function() {
        $(".client-block").hide()
        window.location.hash = "#software"
        $(".software-sponsors").show()
	})

	$(".networks").click(function() {
        $(".client-block").hide()
        window.location.hash = "#networks"
		$(".networks-sponsors").show()
    })

	// setTimeout(function(){ }, 3000);

    if(window.location.hash === "" || window.location.hash === "#embedded"){
        $(".embedded-block").click()
		$(".embedded-logo-fix").click()
    } else if(window.location.hash === "#software"){
        $(".software-block").click()
		$(".software-logo-fix").click()
    } else if(window.location.hash === "#networks"){
        $(".networks-block").click()
		$(".networks-logo-fix").click()
    }

	

	$('.voting-block').find('button').click(function() {
		const project = $(this).parent().parent()
		const className = project.attr("class").split(/\s+/)[0].replace("-voting","")
		const id = project.attr("data-id")
		if(!$('.selected-projects-container .voting-block').hasClass(className)){
			$('.voting-form').append(`<input type="hidden" name="projects" value="${id}"/>`)
			$('.selected-projects-text').text("Избрани проекти, за които искате да гласувате:")
			const name = $(project).find('.project-name').text()
			$('.selected-projects-container')
			   .append(`<div class="${className} text-black voting-block news-block pricing-s2 mt30" data-id="${id}">
							<div class="inner-box">
								<h4><a href="javascript:void(0)" class="project-name-dark">${name}</a></h4>
								<button class="remove-project">Премахни</button>
							</div>
						</div>`)
			if($('.selected-projects-container').children().length >= 3){
				$('.submit-vote-button').attr('type', 'submit')
				$('.submit-vote-button').attr('data-toggle', '')
			}
			$(this).css("background-color", "#16b626")
			$(this).text("Избран")
			$('.remove-project').unbind().click(function(){
				const project = $(this).parent().parent()
				const className = '.' + project.attr("class").split(/\s+/)[0].replace("-","-voting-")
				const id = project.attr("data-id")
				$(className).find('button').css("background-color", "#748fff")
				$(className).find('button').text("Избери")
				$('.voting-form').find(`input[value='${id}']`).remove();
				project.remove()
				if($('.selected-projects-container').children().length < 3){
					$('.submit-vote-button').attr('type', 'button')
					$('.submit-vote-button').attr('data-toggle', 'modal')
				}
				if($('.remove-project').length < 1){
					$('.selected-projects-text').text("")	
				}
			})
		}
	})

	if (window.matchMedia("(max-width: 725px)").matches) {
		$('.voting-projects-container').find('.voting-block').detach().insertAfter('.voting-projects-networks')
		$('.voting-projects-container').on( 'click', 'span', function() {
			$("body,html").animate({
				scrollTop: $(".voting-projects-networks").offset().top + 60
				
			}, 500);
		});
		$('.voting-projects-container').on( 'click', 'span', function() {
			const filterValue = $(this).attr('data-filter').replace("-project", "-voting-block");
			$(".embedded").css("background-image", "url('/images/robotics.png')")
			$(".software").css("background-image", "url('/images/software.png')")
			$(".networks").css("background-image", "url('/images/networks.png')")
			$(this).find("div").css("background-image", "linear-gradient(rgb(57, 60, 152, 0.7), rgb(57, 60, 152, 0.7))," + $(this).find("div").css("background-image"))
			$('.voting-projects-container').find('.voting-block').hide();
			$('.voting-projects-container').find(filterValue).show();
	
		});
	}

	//TO BE REMOVED!!!!
	// $('.treasure-hunt-form').click(function(event) {
	// 	event.preventDefault();
	// 	return false;
	// })

	$('iframe').contents().find('img').css({width: '100%', height: '100%', objectFit: 'contain'});
	
})(window.jQuery);