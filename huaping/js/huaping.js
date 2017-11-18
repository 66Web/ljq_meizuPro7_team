/*hp_scroll*/
$(window).scroll(function(){
    var $scroll=document.body.scrollTop;
    if($scroll>100&&$scroll<1500){
        $(".hp_photo img").css({opacity:"1"});
        $(".hp_photo .p1").css({animationPlayState:"running"});
        $(".hp_photo .p2").css({animationPlayState:"running"});
        $(".hp_photo .all_p3").css({animationPlayState:"running"});
    }
    if($scroll>900&&$scroll<2500){
        $(".hp_bz .hp_img .hp_shuimu_bg").css({animationPlayState:"running"});
        $(".hp_bz .hp_img .hp_phone").css({animationPlayState:"running"});
        $(".hp_bz .p1").css({animationPlayState:"running"});
        $(".hp_bz .p2").css({animationPlayState:"running"});
        $(".hp_bz .all_p3").css({animationPlayState:"running"});
    }
    if($scroll>2200&&$scroll<3300){
        $(".hp_tz .hp_tz_list li").css({animationPlayState:"running"});
        $(".hp_tz .p1").css({animationPlayState:"running"});
        $(".hp_tz .p2").css({animationPlayState:"running"});
        $(".hp_tz .all_p3").css({animationPlayState:"running"});
    }
    if($scroll>3300&&$scroll<4100){
        $(".hp_dt img").css({opacity:"1"});
        $(".hp_dt .p1").css({animationPlayState:"running"});
        $(".hp_dt .p2").css({animationPlayState:"running"});
        $(".hp_dt .all_p3").css({animationPlayState:"running"});
    }
    if($scroll>3800&&$scroll<4111){
        $(".hp_music img").css({opacity:"1"});
        $(".hp_music .p1").css({animationPlayState:"running"});
        $(".hp_music .p2").css({animationPlayState:"running"});
        $(".hp_music .all_p3").css({animationPlayState:"running"});
    }
});
/*点击返回顶部*/
$("#top").click(function(){
    if(scroll=="off")
        return;$("html,body").animate({scrollTop: 0}, 1000);
});
/*了解模态框*/
(function(){
    var huaping=document.getElementById("huaping");
    var backDrop=document.getElementById("shadow");
    huaping.onmouseenter=function(){
        backDrop.className="modalShadow";
    };
    huaping.onmouseleave=function(){
        backDrop.className="";
    };
})();
