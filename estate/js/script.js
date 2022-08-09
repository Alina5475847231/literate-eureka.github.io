$(document).ready(function() {
    $('.slider__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 800,

        responsive: [
            {
                breakpoint: 771,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset
        });
    }); 
});