$(function(){
    
    $('#w01').click(function(){
        $('.w01').fadeIn();
        $('.s02').css('diplay','none').fadeOut();
        
    });
    $('#w02').click(function(){
        $('.w01').css('diplay','none').fadeOut();
        $('.s02').fadeIn();
       
    });
   

    
});

// text-center
// div 감싸는 것 /차이점 position /overflow hidden
// https://github.com/commaeng09/web

// function tab01(){
//     $('.w01').css('diplay','block').fadeIn();
//     $('.s02').css('diplay','none').fadeOut();            
// };
// function tab02(){
//     $('.w01').css('diplay','none').fadeIn();
//     $('.s02').css('diplay','block').fadeOut();            
// };


//윈도우 가로 값에 반응하는 이벤트

// $(window).resize(function (){
//    // width값을 가져오기
//    var width_size = window.outerWidth;
   
//    // 767 이하인지 if문으로 확인
//    if (width_size <= 767) {
//       $(function(){
//          $(".sp_1").click(function(){
//             $(".pop_bg_1").fadeIn('slow','swing'); 
//             $(".pop_wrap_1").fadeIn('slow','swing'); 
      
//          });
//          $(".x_1").click(function(){
//             $(".pop_bg_1").fadeOut('slow','swing');  
//             $(".pop_wrap_1").fadeOut('slow','swing');  
//          });
//          $(".pop_bg_1").click(function(){
//             $(".pop_bg_1").fadeOut('slow','swing');  
//             $(".pop_wrap_1").fadeOut('slow','swing');  
//          });
//       });
//    }else{
//       $(function(){
//          $(".sp_1").click(function(){
            
//             $(".pop_wrap_1").fadeIn('slow','swing'); 
      
//          });
//          $(".x_1").click(function(){
            
//             $(".pop_wrap_1").fadeOut('slow','swing');  
//          });
//          $(".pop_bg_1").click(function(){
           
//             $(".pop_wrap_1").fadeOut('slow','swing');  
//          });
//       });
//    }
//  });