// STICKY NAV
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('.navbar').addClass('sticky');
    } else {
        $('navbar').removeClass('sticky');
    }
});

// OWL-CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// OWL-CONTROL
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.prevBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.nextBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})