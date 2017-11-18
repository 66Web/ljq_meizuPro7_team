 var $show1=$(".intro>h5");
 var $show2=$(".intro>h1");
 var $show3=$(".intro>p");
 $(window).scroll(()=>{
     console.log(document.body.scrollTop);
     var scrollTop=document.body.scrollTop;
     if(innerHeight/2+scrollTop>=$(".intro").offset().top){
         $(".intro>h5").css("opacity","1");
         $(".intro>h5").css("transform","translate(0,0)");
         $(".intro>h1").css("opacity","1");
         $(".intro>h1").css("transform","translate(0,0)");
         $(".intro>p").css("opacity","1");
         $(".intro>p").css("transform","translate(0,0)");
         $("div.intro div.dt").css("transform","rotateY(360deg)");
     }
     if(innerHeight/2+scrollTop>=$(".show_2").offset().top){
         $(".show_2 img:nth-child(2)").css("opacity","1");
         $(".show_2 img:nth-child(2)").css("transform","scale(1,0.9) translateZ(-200px)")
     }
     if(innerHeight/2+scrollTop>=$(".slow").offset().top){
         $("div.fff1 h5").css({"opacity":"1","transform":"translate(0,0)"});
         $("div.fff1 h1").css({"opacity":"1","transform":"translate(0,0)"});
         $("div.fff1 p").css({"opacity":"1","transform":"translate(0,0)"});
     }
     if(innerHeight/2+scrollTop>=$(".show_1-1").offset().top){
         $("div.show_1-1 p").css("opacity","1");
         $("div.show_1-1 p").css("transform","translate(0,0)");
         $("div.show_1-1 h5").css("opacity","1");
         $("div.show_1-1 h5").css("transform","translate(0,0)");
         $("div.show_1-1 h1").css("opacity","1");
         $("div.show_1-1 h1").css("transform","translate(0,0)")
     }
     if(innerHeight/2+scrollTop>=$(".img_1").offset().top){
         $("div.show_4 .img_1").css("top","-44%");
         $("div.show_4 img:nth-child(3)").css("top","-43%")
     }
     if(innerHeight/2+scrollTop>=$(".show_4").offset().top) {
         $("div.show_4 div.show_4-1 h5").css("opacity", "1");
         $("div.show_4 div.show_4-1 h5").css("transform", "translate(0,0)");
         $("div.show_4 div.show_4-1 h1").css("opacity", "1");
         $("div.show_4 div.show_4-1 h1").css("transform", "translate(0,0)");
         $("div.show_4 div.show_4-1 p").css("opacity", "1");
         $("div.show_4 div.show_4-1 p").css("transform", "translate(0,0)");
     }
 });
 /***����Ч��***/
(function(){
$(".show_2").on("mouseover",()=>{
    $("span").removeClass("active active1 active2 big big1 big2 big3 big4 big5 big6 big7 big8 big9 big10");
});

$(".show_2").on("mouseout",()=> {
   $("h5 span:nth-child(1)").addClass("active");
    $("h5 span:nth-child(2)").addClass("active1");
    $("h5 span:nth-child(3)").addClass("active2");
    $("h5 span:nth-child(4)").addClass("big");
    $("h1 span:nth-child(1)").addClass("big1");
    $("h1 span:nth-child(2)").addClass("big2");
    $("h1 span:nth-child(3)").addClass("big4");
    $("h1 span:nth-child(4)").addClass("big5");
    $("h1 span:nth-child(5)").addClass("big6");
    $("h1 span:nth-child(6)").addClass("big7");
    $("h1 span:nth-child(7)").addClass("big8");
    $("h1 span:nth-child(8)").addClass("big9");
    $("p span:nth-child(1)").addClass("big10");
    $("p span:nth-child(2)").addClass("active1");
    $("p span:nth-child(3)").addClass("active2");
    $("p span:nth-child(4)").addClass("active");
    $("p span:nth-child(5)").addClass("big7");
    $("p span:nth-child(6)").addClass("big5");
    $("p span:nth-child(7)").addClass("big1");
    $("p span:nth-child(8)").addClass("big4");
    $("p span:nth-child(9)").addClass("big8");
    $("p span:nth-child(10)").addClass("big9");
    $("p span:nth-child(11)").addClass("big3");
    $("p span:nth-child(12)").addClass("big6");
    $("p span:nth-child(13)").addClass("big10");
    $("p span:nth-child(14)").addClass("active2");
    $("p span:nth-child(15)").addClass("big5");
    $("p span:nth-child(16)").addClass("big");
    $("p span:nth-child(17)").addClass("big9");
    $("p span:nth-child(18)").addClass("big4");
    $("p span:nth-child(19)").addClass("big8");
    $("p span:nth-child(20)").addClass("big4");
    $("p span:nth-child(21)").addClass("big3");
    $("p span:nth-child(22)").addClass("big9");
    $("p span:nth-child(23)").addClass("big6");
    $("p span:nth-child(24)").addClass("big7");
    $("p span:nth-child(25)").addClass("big8");
    $("p span:nth-child(26)").addClass("active1");
    $("p span:nth-child(27)").addClass("active2");
    $("p span:nth-child(28)").addClass("active");
    $("p span:nth-child(29)").addClass("big10");
    $("p span:nth-child(30)").addClass("big5");
    $("p span:nth-child(31)").addClass("big8");
    $("p span:nth-child(32)").addClass("big6");
    $("p span:nth-child(33)").addClass("big10");
    $("p span:nth-child(34)").addClass("big9");
    $("p span:nth-child(35)").addClass("big2");
    $("p span:nth-child(36)").addClass("big5");
    $("p span:nth-child(37)").addClass("big4");
    $("p span:nth-child(38)").addClass("big2");
    $("p span:nth-child(39)").addClass("big3");
    $("p span:nth-child(40)").addClass("big7");
    $("p span:nth-child(41)").addClass("big6");
    $("p span:nth-child(42)").addClass("big8");
    $("p span:nth-child(43)").addClass("big10");
    $("p span:nth-child(44)").addClass("big9");
    $("p span:nth-child(45)").addClass("big2");
    $("p span:nth-child(46)").addClass("active");
    $("p span:nth-child(47)").addClass("active1");
    $("p span:nth-child(48)").addClass("active2");
    $("p span:nth-child(49)").addClass("big10");
    $("p span:nth-child(50)").addClass("big3");
    $("p span:nth-child(51)").addClass("big8");
    $("p span:nth-child(52)").addClass("big5");
    $("p span:nth-child(53)").addClass("big7");
    $("p span:nth-child(54)").addClass("big10");
    $("p span:nth-child(55)").addClass("active1");
    $("p span:nth-child(56)").addClass("big4");
    $("p span:nth-child(57)").addClass("big1");
    $("p span:nth-child(58)").addClass("big9");
    $("p span:nth-child(59)").addClass("active");
    $("p span:nth-child(60)").addClass("big2");
    $("p span:nth-child(61)").addClass("big5");
    $("p span:nth-child(62)").addClass("big10");
    $("p span:nth-child(63)").addClass("big5");
    $("p span:nth-child(64)").addClass("big3");
    $("p span:nth-child(65)").addClass("big2");
    $("p span:nth-child(66)").addClass("big1");
    $("p span:nth-child(67)").addClass("big6");
    $("p span:nth-child(68)").addClass("big8");
    $("p span:nth-child(69)").addClass("big9");
    $("p span:nth-child(70)").addClass("big");
    $("p span:nth-child(71)").addClass("big10");
    $("p span:nth-child(72)").addClass("big");
    $("p span:nth-child(73)").addClass("big8");
});
})();

 //document.querySelector(".slider ul").onmousemove=function(e){
 //    console.log(e.offsetX,this.offsetX);
 //    var a=this.firstElementChild;
 //    if(e.offsetX<parseInt(getComputedStyle(this).width)/2){
 //
 //        this.firstElementChild.style.left=parseInt(getComputedStyle(a).left)-1+'px';
 //    }else {
 //        this.firstElementChild.style.left=parseInt(getComputedStyle(a).left)+1+'px';
 //    }
 //};

 var $img=$(".slider_1 ul li:nth-child(1) img");
 var $img1=$(".slider_1 ul li:nth-child(2) img");
 var $img2=$(".slider_1 ul li:nth-child(3) img");
 var $img3=$(".slider_1 ul li:nth-child(4) img");
 var $img4=$(".slider_1 ul li:nth-child(5) img");

 $img.on("mouseover",()=>{
    $img.addClass("bigger")

 });
 $img.on("mouseout",()=>{
     $img.removeClass("bigger")

 });
 $img1.on("mouseover",()=>{
     $img1.addClass("bigger");
 });
 $img1.on("mouseout",()=>{
     $img1.removeClass("bigger")

 });

 $img2.on("mouseover",()=>{
     $img2.addClass("bigger")

 });
 $img2.on("mouseout",()=>{
     $img2.removeClass("bigger")

 });
 $img3.on("mouseover",()=>{
     $img2.addClass("bigger")

 });
 $img3.on("mouseout",()=>{
     $img3.removeClass("bigger")

 });
 $img4.on("mouseover",()=>{
     $img4.addClass("bigger")

 });
 $img4.on("mouseout",()=>{
     $img4.removeClass("bigger")

 });
 (function(){
     var camera=document.getElementById("camera");
     var backDrop=document.getElementById("shadow");
     camera.onmouseenter=function(){
         backDrop.className="modalShadow";
     };
     camera.onmouseleave=function(){
         backDrop.className="";
     };
 })();
 /*������ض���*/
 $("#top").click(function(){
     if(scroll=="off")
         return;$("html,body").animate({scrollTop: 0}, 1000);
 });

