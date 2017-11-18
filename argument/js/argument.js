(function(){
    var $abtn1=$("#f1>div:nth-child(2)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:first-child span");
    //console.log($abtn1);
    $abtn1.click(function(e){
        var $abtn2=$("#f1>div:nth-child(2)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:last-child span");
        $abtn2.parent().removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f1>div:nth-child(2)>div.row>div.col-xs-12:nth-child(2) img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
(function(){
    var $abtn2=$("#f1>div:nth-child(2)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:last-child span");
    //console.log($abtn1);
    $abtn2.click(function(e){
        var $abtn1=$("#f1>div:nth-child(2)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:first-child span");
        $abtn1.parent().removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f1>div:nth-child(2)>div.row>div.col-xs-12:nth-child(2) img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
(function(){
    var $abtn1=$("#f1>div:nth-child(3)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:first-child span");
    //console.log($abtn1);
    $abtn1.click(function(e){
        var $abtn2=$("#f1>div:nth-child(3)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:last-child span");
        $abtn2.parent().removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f1>div:nth-child(3)>div.row>div.col-xs-12:nth-child(2) img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
(function(){
    var $abtn2=$("#f1>div:nth-child(3)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:last-child span");
    $abtn2.click(function(e){
        var $abtn1=$("#f1>div:nth-child(3)>div.row>div.col-xs-12:nth-child(5) .col-xs-6:first-child span");
        $abtn1.parent().removeClass("active");
        e.preventDefault();
        $tar=$(e.target);
        $tar.parent().addClass("active");
        $tar.parent().siblings().removeClass("active");
        var img=$("#f1>div:nth-child(3)>div.row>div.col-xs-12:nth-child(2) img");
        var i=img.attr("src").lastIndexOf(".");
        var src=img.attr("src");
        var nSrc=src.slice(0,i-1)+$tar.parent().attr("href")+src.slice(i);
        img.attr("src",nSrc);
    });
})();
/*µã»÷·µ»Ø¶¥²¿*/
$("#top").click(function(){
    if(scroll=="off")
        return;$("html,body").animate({scrollTop: 0}, 1000);
});