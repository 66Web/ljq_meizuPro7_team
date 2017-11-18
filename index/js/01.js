
$('.pic-2>img').on('click',function(e){

   var a= $(e.target).attr('class').slice(1,2);
   $(`.pic-1>img:nth-child(${a})`)
    .css('z-index','12')
    .siblings().css('z-index','11');

    $(e.target).css('opacity','2')
     .siblings().css('opacity','0.5');


});



$(".left-1").on('click',function(e){

        console.log(1);
        $(e.target).css('opacity','1');


    }
);



     window.onload=function(){

      var b2=$(".login-2");

         b2.addClass("active");

   };

  $("#l1").on('mouseenter',function(e){

       $(e.target).css('background','#fff');
       $(e.target).children().css('color','#00C3F5');
  });

$("#l1").on('mouseleave',function(e){
    $(e.target).css('background','transparent');
    $(e.target).children().css('color','#fff');
});
$("#l2").on('mouseenter',function(e){
    $(e.target).css('background','#fff');
    $(e.target).children().css('color','#00C3F5');
});
$("#l2").on('mouseleave',function(e){
    $(e.target).css('background','transparent');
    $(e.target).children().css('color','#fff');
});
$( ()=>{
    $(window).scroll(()=>{
            var scrollTop=document.body.scrollTop;
            var offsettop1=$(".five").offset().top;
     if(innerHeight/2+scrollTop>=offsettop1){
          $("#five-1").css({float:"left",width:"26%",left:"10%",top:"10%",transform:"rotate(0deg)"});
     }
    });
});



var num=0;
$('#button').on('click',function(e){

    if(num==0){
         $(e.target).children().eq(0).css({transform:"rotate(45deg) translate(3px,2px)"});
        $(e.target).children().eq(1).css('display','none');
        $(e.target).children().eq(2).css({transform:"rotate(-45deg) translate(2px,-2px)"});
        num=1;
    }else if(num==1){

        $(e.target).children().eq(0).css({transform:"rotate(0deg) "});
        $(e.target).children().eq(1).css('display','block');
        $(e.target).children().eq(2).css({transform:"rotate(0deg)"});
         num=0;
    }

});
/***************************************/
$("#top").click(function(){
    if(scroll=="off")
        return;$("html,body").animate({scrollTop: 0}, 1000);
});







