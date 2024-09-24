$(document).ready(function () {
    // Initialize the slider
    $('.slider-collection').slick({
        arrows: false,
        dots: false,
        infinite: false, // Set infinite to false to detect first and last slides
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Check if the buttons should be disabled on init
    checkButtons();

    // Add class to the second child on initialization
    setCurrentClass();

    // Add class to the second child after each slide change
    $('.slider-collection').on('afterChange', function (event, slick, currentSlide) {
        setCurrentClass();
        checkButtons(); // Check buttons again after slide change
    });

    // Function to set the current class
    function setCurrentClass() {
        // Remove the class from all slides
        $('.slider-collection .slick-slide').removeClass('current');

        // Add the class only to the second visible (active) slide
        $('.slider-collection .slick-active').eq(1).addClass('current');
    }

    // Button controls for the slider
    $(".prev-slide").click(function () {
        $(".slider-collection").slick("slickPrev");
    });

    $(".next-slide").click(function () {
        $(".slider-collection").slick("slickNext");
    });

    // Function to check and disable buttons if at the first or last slide
    function checkButtons() {
        var $prevButton = $(".prev-slide");
        var $nextButton = $(".next-slide");
        var slick = $('.slider-collection').slick('getSlick');
        
        // Disable "prev" button if at the first slide
        if (slick.currentSlide === 0) {
            $prevButton.addClass('disabled');
        } else {
            $prevButton.removeClass('disabled');
        }

        // Disable "next" button if at the last slide
        if (slick.currentSlide === slick.slideCount - slick.options.slidesToShow) {
            $nextButton.addClass('disabled');
        } else {
            $nextButton.removeClass('disabled');
        }
    }
});
