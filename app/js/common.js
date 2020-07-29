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
	$('.slider_review').owlCarousel({
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
});
