/**
 * Created by uid on 2017/8/8.
 */
/*页面加载后执行*/
$(()=>{
    /*页面滚动事件*/
    $(window).scroll(()=>{
        var scrollTop=document.body.scrollTop;
        /*获得各部分距页面顶部的距离*/
        var offsetTop1=$("section").offset().top;
        var offsetTop2=$("#mw-2").offset().top;
        var offsetTop3=$("#mw-3").offset().top;
        var offsetTop4=$("#mw-4").offset().top;
        var offsetTop5=$("#mw-5").offset().top;
        var offsetTop6=$("#mw-6").offset().top;
        var offsetTop7=$("#mw-7").offset().top;
        var offsetTop8=$("#mw-8").offset().top;
        var offsetTop9=$("#mw-9").offset().top;
        var offsetTop10=$("#mw-10").offset().top;
        if(innerHeight/4+scrollTop>=offsetTop1){
            $("#mw-1 .mw-f1,#mw-1 .mw-f2,#mw-1 .mw-f3," +
            ".mw-f11,.mw-f12,.mw-f13,.mw-f14," +
            ".mw-f21,.mw-f22,.mw-f23,.mw-f24," +
            ".mw-f31,.mw-f32,.mw-f33,.mw-f34,.mw-f35,.mw-f36,.mw-f37,.mw-f38,.mw-f39").css({opacity:"1" });
            $("#mw-1 .mw-f3").css({transform:"scale(0)" });
            $("#mw-1 .mw-n1").css({width:"26%",left:"10%",top:"10%", transform:"rotate(0deg)" ,opacity:"1"});
            $("#mw-1 .mw-n0,#mw-1 .mw-n2,#mw-1 .mw-n3").css({opacity:"1" });
        }
        if(innerHeight/2+scrollTop>=offsetTop2){
            $("#mw-2 img").css({marginTop:"-3%",marginBottom:"-7%",opacity:"1"})
        }
        if(innerHeight/2+scrollTop>=offsetTop3){
            $("#mw-3 span,#mw-3 h3,#mw-3 p,#mw-3 a").css({opacity:"1",transform:"translate(0,0)"});
            $("#mw-3 img").css({"opacity":"1"});
        }
        if(innerHeight/2+scrollTop>=offsetTop4){
            $("#mw-4 span,#mw-4 h3,#mw-4 p,#mw-4 a").css({opacity:"1",transform:"translate(0,0)"});
        }
        if(innerHeight/2+scrollTop>=offsetTop5){
                $("#mw-5 span,#mw-5 h3,#mw-5 p,#mw-5 a").css({opacity:"1",transform:"translate(0,0)"});
        }
        if(innerHeight/2+scrollTop>=offsetTop6){
            $("#mw-6 span,#mw-6 h3,#mw-6 p,#mw-6 em,#mw-6 strong,#mw-6 i").css({opacity:"1",transform:"translate(0,0)"});
        }
        if(innerHeight/2+scrollTop>=offsetTop7){
            $("#mw-7 span,#mw-7 h3,#mw-7 p,#mw-7 a").css({opacity:"1",transform:"translate(0,0)"});
            $("#mw-7>.mw-ml").css({opacity:"0"});
            $("#mw-7>.mw-ml>div").css({width:"100%",transform:"translate(-35%,0)"});
            $("#mw-7 .s1_cover").addClass("s_cover");
        }
        if(innerHeight/2+scrollTop>=offsetTop8){
            $("#mw-8 span,#mw-8 h3,#mw-8 p,#mw-8 img").css({opacity:"1",transform:"translate(0,0)"});
        }
        if(innerHeight/2+scrollTop>=offsetTop9){
            $("#mw-9 .mw-p1,#mw-9 .mw-p2").css({width:"100%"});
            $("#mw-9 .mw-p3,#mw-9 h4").css({opacity:"1"});
            $("#mw-9 h4").addClass("animated bounceInDown");
        }
        if(innerHeight/2+scrollTop>=offsetTop10){
            $("#mw-10 span,#mw-10 h3,#mw-10 p,#mw-10 a").css({opacity:"1",transform:"translate(0,0)"});
        }
    });
});
/*bird*/
var a=138;
var b=308;
var task=function(){
    if(a<=2622) {
        a+=138;
    }
    else if(a>2622&&b<=2156){
        a=138;
        b+=308;
    }
    else {
        a=138;
        b=308;
    }
    $("#mw-bird").css({
        'background':`url(img/bird-animate_cd8495f.jpg)  ${a}px ${b}px`
    });
};
var timer=setInterval(task,80);
/*了解模态框*/
(function(){
    var mw11=document.getElementById("mw-11");
    var backDrop=document.getElementById("shadow");
    mw11.onmouseenter=function(){
        backDrop.className="modalShadow";
    };
    mw11.onmouseleave=function(){
        backDrop.className="";
    };
})();
/*点击返回顶部*/
$("#top").click(function(){
    if(scroll=="off")
        return;$("html,body").animate({scrollTop: 0}, 1000);
});