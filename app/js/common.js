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
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
        },
    });







    var owltwo = $('.slider_review');
    owltwo.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 3,
        responsive: {
            0: {
                items: 1,
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
    window.onscroll = function() {
        var screenTop = $(document).scrollTop();
        // console.log(screenTop);
        if (screenTop > 0) {
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
        offset: 0,
    })
    $('.next_arrow a').on('click', function() {
        event.preventDefault();
        // alert('asd')
    })

    //etap change
    $('.next_arrow_1').on('click', function() {
        $('.info-main').removeClass('active');
        $('.info-main_2').addClass('active');

    });
    $('.next_arrow_2').on('click', function() {
        $('.info-main').removeClass('active');
        $('.info-main_3').addClass('active');
    });
    $('.next_arrow_3').on('click', function() {
        $('.info-main').removeClass('active');
        $('.info-main_4').addClass('active');
    })
    $('.next_arrow_4').on('click', function() {
        $('.info-main').removeClass('active');
        $('.info-main_1').addClass('active');
    })



    var video = $('video');

    //video
    $('.video-button').on('click', function() {

        video.trigger('play');

        setTimeout(function() {
            $('.mfp-close').on('click', function() {
                video.trigger('pause');
            })
        }, 1000);


    })

});