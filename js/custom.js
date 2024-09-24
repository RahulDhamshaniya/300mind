//tabs

$(document).ready(function(){ 
     $(".link").click(function(){  
       $(".tab").removeClass('tab-active');
       $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
       $(".link").removeClass('link-active');
       $(this).parent().find(".link").addClass('link-active');
      });
 });