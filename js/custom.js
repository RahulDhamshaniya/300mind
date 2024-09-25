$(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
         $('.header').addClass('fixed');
     } else {
         $('.header').removeClass('fixed');
     }
 });


$(document).ready(function(){ 
    /*menu*/ 
    
    $(".menu-icon #check").click(function () {
        if ($(".header,html,body").hasClass("is-active")) {
            $(".header,html,body").removeClass("is-active");
        } else {
            $(".header, html,body").addClass("is-active");
        }
    });

    /*tabs*/
     $(".link").click(function(){  
       $(".tab").removeClass('tab-active');
       $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
       $(".link").removeClass('link-active');
       $(this).parent().find(".link").addClass('link-active');
      });
 });