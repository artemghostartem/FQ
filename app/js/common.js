$(function() {
$(document).ready(() => {
  $("#lightgallery").lightGallery({
    pager: true
  });
});
$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
	$('.slider_main').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:true,
	    items:1,
	    responsive : {
	    	0: {
	    		items:1,
	    	},
	    	480 : {
	    		items: 1,
	    	},
	    },
	});





	// $('.slider_review').owlCarousel({
	    
	// });


	var owltwo = $('.slider_review');
	owltwo.owlCarousel({
		loop:true,
	    margin:0,
	    nav:false,
	    dots:true,
	    items:  3,
	    responsive : {
	    	0: {
	    		items:1,
	    	},
	    	480: {
	    		items: 3,
	    	}
	    }
	});
	// Go to the next item
	$('.review .next_arrow').click(function() {
	    owltwo.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.review .prev_arrow').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owltwo.trigger('prev.owl.carousel', [300]);
	})


	// header style on scroll
	window.onscroll = function () {
		var screenTop = $(document).scrollTop();
		console.log(screenTop);
		if (screenTop > 0 ) {
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
	}

	//menu toggle
	$('.menu_icon, .menu-header-close, .menu-element a').on('click', function() {
		$('.menu').toggleClass('active');	
	})

	//pagescroll2id
	$('.menu-element a').mPageScroll2id({
		offset:50,
	})
});
