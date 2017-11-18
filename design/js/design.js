/**
 * Created by uid on 2017/8/9.
 */

var f2H1=document.querySelector("#f2 h1");
var f3H1=document.querySelector("#f3 h1");
var f5H1=document.querySelector("#f5 h1");
var f1P=document.querySelector("#f1 p");
var f2P=document.querySelectorAll("#f2 p");
var f5P=document.querySelector("#f5 p");
var f2Img=document.querySelectorAll("#f2 img");
var f3Cls1=document.querySelector("#f3 .cls1");
var f3Cls2=document.querySelector("#f3 .cls2");
//根据滚动的高度  效果的出现
window.onscroll=function(){
    var scroll=document.body.scrollTop;
    //console.log(scroll);
    if(scroll>0&&scroll<100){
        f1P.style.opacity=1;
    }
    if(scroll>80&&scroll<600){
        f2H1.style.opacity=1;
        for(var i=0;i<f2P.length;i++){
            f2P[i].style.opacity=1;
        }
        for(var j=1;j<f2Img.length;j++){
            f2Img[j].style.opacity=1;
        }

    }
    if(scroll>600&&scroll<1000){
        f3H1.style.opacity=1;
        f3Cls1.style.opacity=1;
        f3Cls2.style.opacity=1;
    }
    if(scroll>1200&&scroll<1500){
        //f5H1.style.opacity=1;
        f5P.style.opacity=1;
    }
};
//f3点击颜色出现的对应颜色的手机
(function(){
    var $abtn1=$("#f3 .cls1 ul>li:nth-child(3) a");
    $abtn1.click(function(e){
        var $abtn2=$("#f3 .cls1 ul>li:nth-child(5) a");
        $abtn2.removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f3 .cls1>div>img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
(function(){
    var $abtn2=$("#f3 .cls1 ul>li:nth-child(5) a");
    $abtn2.click(function(e){
        var $abtn1=$("#f3 .cls1 ul>li:nth-child(3) a");
        $abtn1.removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f3 .cls1>div>img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        console.log(nSrc);
        img.attr("src",nSrc);
    });
})();
(function(){
    var $abtn1=$("#f3 .cls2 ul>li:nth-child(3) a");
    $abtn1.click(function(e){
        var $abtn2=$("#f3 .cls2 ul>li:nth-child(5) a");
        $abtn2.removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f3 .cls2>div>img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
(function(){
    var $abtn2=$("#f3 .cls2 ul>li:nth-child(5) a");
    $abtn2.click(function(e){
        var $abtn1=$("#f3 .cls2 ul>li:nth-child(3) a");
        $abtn1.removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f3 .cls2>div>img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
//f5触发的模态框
(function(){
    var f5=document.getElementById("f5");
    var backDrop=document.getElementById("shadow");
    f5.onmouseenter=function(){
       backDrop.className="modalShadow";
    };
    f5.onmouseleave=function(){
        backDrop.className="";
    };
})();
/*点击返回顶部*/
$("#top").click(function(){
    if(scroll=="off")
        return;$("html,body").animate({scrollTop: 0}, 1000);
});
