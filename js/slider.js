$(document).ready(function () {
    $('.slider-collection').slick({
        arrows: false,
        dots: false,
        infinite: false, 
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: false,
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
                    slidesToShow: 2,
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

    checkButtons();

    setCurrentClass();

    $('.slider-collection').on('afterChange', function (event, slick, currentSlide) {
        setCurrentClass();
        checkButtons(); 
    });

    function setCurrentClass() {
        $('.slider-collection .slick-slide').removeClass('current');

        $('.slider-collection .slick-active').eq(1).addClass('current');
    }

    $(".prev-slide").click(function () {
        $(".slider-collection").slick("slickPrev");
    });

    $(".next-slide").click(function () {
        $(".slider-collection").slick("slickNext");
    });

    function checkButtons() {
        var $prevButton = $(".prev-slide");
        var $nextButton = $(".next-slide");
        var slick = $('.slider-collection').slick('getSlick');
        
        if (slick.currentSlide === 0) {
            $prevButton.addClass('disabled');
        } else {
            $prevButton.removeClass('disabled');
        }

        if (slick.currentSlide === slick.slideCount - slick.options.slidesToShow) {
            $nextButton.addClass('disabled');
        } else {
            $nextButton.removeClass('disabled');
        }
    }
});
