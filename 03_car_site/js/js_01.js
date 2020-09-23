
$(function(){
   $('#wh').click(function(){
   $('#wh').css("border","3px solid #999"); 
    $('#bl').css("border","1px solid #999");
    $('#hg').css("border","1px solid #999");
    $('#ng').css("border","1px solid #999");
    $('#ob').css("border","1px solid #999");
    $('#mb').css("border","1px solid #999");
    $('#fr').css("border","1px solid #999");

    $('.wh').css("display","block").fadeIn();
    $('.bl').css("display","none").fadeOut();
    $('.hg').css("display","none").fadeOut();
    $('.ng').css("display","none").fadeOut();
    $('.ob').css("display","none").fadeOut();
    $('.mb').css("display","none").fadeOut();
    $('.fr').css("display","none").fadeOut();
   });
   
   $('#bl').click(function(){
      $('#bl').css("border","3px solid #999"); 
    $('#wh').css("border","1px solid #999");
    $('#hg').css("border","1px solid #999");
    $('#ng').css("border","1px solid #999");
    $('#ob').css("border","1px solid #999");
    $('#mb').css("border","1px solid #999");
    $('#fr').css("border","1px solid #999");

      $('.bl').css("display","block").fadeIn();
      $('.wh').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#hg').click(function(){
      $('#hg').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.hg').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#ng').click(function(){
      $('#ng').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.ng').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#ob').click(function(){
      $('#ob').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.ob').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#mb').click(function(){
      $('#mb').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");
      $('#fr').css("border","1px solid #999");

      $('.mb').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
      $('.fr').css("display","none").fadeOut();
     });

     $('#fr').click(function(){
      $('#fr').css("border","3px solid #999"); 
      $('#bl').css("border","1px solid #999");
      $('#hg').css("border","1px solid #999");
      $('#ng').css("border","1px solid #999");
      $('#ob').css("border","1px solid #999");
      $('#mb').css("border","1px solid #999");
      $('#wh').css("border","1px solid #999");

      $('.fr').css("display","block").fadeIn();
      $('.bl').css("display","none").fadeOut();
      $('.hg').css("display","none").fadeOut();
      $('.ng').css("display","none").fadeOut();
      $('.wh').css("display","none").fadeOut();
      $('.mb').css("display","none").fadeOut();
      $('.ob').css("display","none").fadeOut();
     });
  
});

// hover
$(function(){
   $('.inner_left_wrab').mouseenter(function(){
      $('.more_icon').fadeIn();
      $('.inner_left_img').css('transform','scale(1.2');
   });
   $('.inner_left_wrab').mouseleave(function(){
      $('.more_icon').fadeOut();
      $('.inner_left_img').css('transform','scale(1)');
   });
})
//tooltip
$(document).ready(function(){
   $('[data-tooltip]').tooltip();
 });
 //tab
 $(function(){
   $('#t-1').click(function(){
      $('#tbox-1').css("display","block").fadeIn();
      $('#tbox-2').css("display","none").fadeOut();
      $('#tbox-3').css("display","none").fadeOut();
      $('#tbox-4').css("display","none").fadeOut();
   });
   $('#t-2').click(function(){
      $('#tbox-1').css("display","none").fadeOut();
      $('#tbox-2').css("display","block").fadeIn();
      $('#tbox-3').css("display","none").fadeOut();
      $('#tbox-4').css("display","none").fadeOut();
   });
   $('#t-3').click(function(){
      $('#tbox-1').css("display","none").fadeOut();
      $('#tbox-2').css("display","none").fadeOut();
      $('#tbox-3').css("display","block").fadeIn();
      $('#tbox-4').css("display","none").fadeOut();
   });
   $('#t-4').click(function(){
      $('#tbox-1').css("display","none").fadeOut();
      $('#tbox-2').css("display","none").fadeOut();
      $('#tbox-3').css("display","none").fadeOut();
      $('#tbox-4').css("display","block").fadeIn();
   });
 });
 // tooltip
 $(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip({container: 'body'});   
   });
// modal
      //pop_up_1
$(function(){
            $(".sp_1").click(function(){
               $(".pop_bg_1").fadeIn('slow','swing'); 
               $(".pop_wrap_1").fadeIn('slow','swing'); 
         
            });
            $(".x_1").click(function(){
               $(".pop_bg_1").fadeOut('slow','swing');  
               $(".pop_wrap_1").fadeOut('slow','swing');  
            });
            $(".pop_bg_1").click(function(){
               $(".pop_bg_1").fadeOut('slow','swing');  
               $(".pop_wrap_1").fadeOut('slow','swing');  
            });
         });

      //pop_up_2
      $(function(){
         $(".sp_2").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_2").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_2").fadeOut('slow','swing');  
         });
         $(".pop_bg_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_2").fadeOut('slow','swing');  
         });
      });
      //pop_up_3
      $(function(){
         $(".sp_3").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_3").fadeIn('slow','swing');
                  //swiper_p1
      var swiper = new Swiper('.swiper_p1', {
         slidesPerView: 1,
         spaceBetween: 0,
         loop: true,
         pagination: {
           el: '.swiper-pagination', 
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
         
       }); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_3").fadeOut('slow','swing');  
         });
         $(".pop_bg_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_3").fadeOut('slow','swing');  
         });
      });
      //pop_up_4
      $(function(){
         $(".sp_4").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_4").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_4").fadeOut('slow','swing');  
         });
         $(".pop_bg_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_4").fadeOut('slow','swing');  
         });
      });
      //pop_up_5
      $(function(){
         $(".sp_5").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_5").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_5").fadeOut('slow','swing');  
         });
         $(".pop_bg_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_5").fadeOut('slow','swing');  
         });
      });
      //pop_up_6
      $(function(){
         $(".sp_6").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_6").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_6").fadeOut('slow','swing');  
         });
         $(".pop_bg_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_6").fadeOut('slow','swing');  
         });
      });
      //pop_up_7
      $(function(){
         $(".sp_7").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_7").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_7").fadeOut('slow','swing');  
         });
         $(".pop_bg_7").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_7").fadeOut('slow','swing');  
         });
      });
      //pop_up_8
      $(function(){
         $(".sp_8").click(function(){
            $(".pop_bg_1").fadeIn('slow','swing'); 
            $(".pop_wrap_8").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_8").fadeOut('slow','swing');  
         });
         $(".pop_bg_1").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_8").fadeOut('slow','swing');  
         });
      });
      //pop_up_9
      $(function(){
         $(".sp_9").click(function(){
            $(".pop_bg_3").fadeIn('slow','swing'); 
            $(".pop_wrap_9").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_3").fadeOut('slow','swing');  
            $(".pop_wrap_9").fadeOut('slow','swing');  
         });
         $(".pop_bg_3").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_9").fadeOut('slow','swing');  
         });
      });
      //pop_up_10
      $(function(){
         $(".sp_10").click(function(){
            $(".pop_bg_3").fadeIn('slow','swing'); 
            $(".pop_wrap_10").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_3").fadeOut('slow','swing');  
            $(".pop_wrap_10").fadeOut('slow','swing');  
         });
         $(".pop_bg_3").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_10").fadeOut('slow','swing');  
         });
      });
      //pop_up_11
      $(function(){
         $(".sp_11").click(function(){
            $(".pop_bg_3").fadeIn('slow','swing'); 
            $(".pop_wrap_11").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_3").fadeOut('slow','swing');  
            $(".pop_wrap_11").fadeOut('slow','swing');  
         });
         $(".pop_bg_3").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_11").fadeOut('slow','swing');  
         });
      });
      //pop_up_12
      $(function(){
         $(".sp_12").click(function(){
            $(".pop_bg_3").fadeIn('slow','swing'); 
            $(".pop_wrap_12").fadeIn('slow','swing'); 
      
         });
         $(".x_1").click(function(){
            $(".pop_bg_3").fadeOut('slow','swing');  
            $(".pop_wrap_12").fadeOut('slow','swing');  
         });
         $(".pop_bg_3").click(function(){
            $(".pop_bg_1").fadeOut('slow','swing');  
            $(".pop_wrap_12").fadeOut('slow','swing');  
         });
      });


//swiper

      //swiper1
var swiper = new Swiper('.swiper1', {
   slidesPerView: 1,
   spaceBetween: 0,
   loop: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
      //swiper2
      var swiper = new Swiper('.swiper2', {
         slidesPerView: 1,
         spaceBetween: 0,
         loop: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
         observer: true,
         observeParents: true,
       });
      //space_sl_1
      var swiper = new Swiper('.space_sl_1', {
         slidesPerView: 1,
         spaceBetween: 0,
         loop: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
         observer: true,
         observeParents: true,
       });