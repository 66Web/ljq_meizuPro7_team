//------------------------s1---------------------
//------------------------bg_star----------------
(()=>{
    "use strict";
    function t(t,i){
        if(arguments.length<2&&(i=t,t=0),t>i){
            var a=i;i=t;t=a
        }
        return Math.floor(Math.random()*(i-t+1))+t
    }
    function i(t,i){
        var a=Math.max(t,i),s=Math.round(Math.sqrt(a*a+a*a));return s/2
    }
    function a(){
        h.globalCompositeOperation="source-over",
            h.globalAlpha=.8,
            h.fillStyle="hsla("+o+", 3, 3, 3)",
            h.fillRect(0,0,e,r),
            h.globalCompositeOperation="lighter";
        for(var t=1,i=n.length;i>t;t++)
            n[t].draw();
        window.requestAnimationFrame(a)
    }
    var s=document.getElementById("can1"),
        h=s.getContext("2d"),
        e=s.width=window.innerWidth,
        r=s.height=0.6*e,
        o=21,
        n=[],
        d=0,
        l=1200,
        u=document.createElement("canvas"),
        p=u.getContext("2d");
    u.width=100,
        u.height=100;
    var c=u.width,f=p.createRadialGradient(c,c,4,c,c,c);
        f.addColorStop(.02,"#fff"),
        f.addColorStop(.01,"yellow"),
        f.addColorStop(.1,"transparent"),
        f.addColorStop(1,"transparent"),
        p.fillStyle=f,
        p.beginPath(),
        p.arc(c,c,c,0,2*Math.PI),
        p.fill();
    var g=function(){
        this.orbitRadius=t(i(e,r)),
            this.radius=t(60,this.orbitRadius)/20,
            this.orbitX=e/2,this.orbitY=r/2,
            this.timePassed=t(0,l),
            this.speed=t(this.orbitRadius)/60000,
            this.alpha=t(2,10)/10,d++,n[d]=this};
    g.prototype.draw=function(){
        var i=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,
            a=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,
            s=t(10);
        1===s&&this.alpha>0?this.alpha-=.05:
        2===s&&this.alpha<1&&(this.alpha+=.05),
            h.globalAlpha=this.alpha,
            h.drawImage(u,i-this.radius/2,
                a-this.radius/2,this.radius,this.radius),
            this.timePassed+=this.speed};
    for(var m=0;l>m;m++)new g;
    a()
})();
//------------------------- animation--------------------
(()=>{
    "use strict";
    $(window).scroll(()=>{
        var $sections=$(".section");
        var scrollTop=document.body.scrollTop;
        for(var i=1,len=$sections.length;i<len;i++){
            if(innerHeight/2+scrollTop>=$sections.eq(i).offset().top){
                $(`.text${i}>h4`).animate({marginTop:"-5%",opacity:1},800);
                $(`.text${i}>h2`).delay(800).animate({marginTop:"-5%",opacity:1},800);
                $(`.text${i}>h5`).delay(1600).animate({marginTop:"-5%",opacity:1},800);
            }
        }
        if(innerHeight/2+scrollTop>=$sections.eq(1).offset().top){
            $(".s1_cover").addClass("s_cover");
        }
        if(innerHeight/2+scrollTop>=$sections.eq(5).offset().top){
            $(".s5>div>div:nth-child(1)>img").addClass("s5_shadow");
            $(".s5>div>div:nth-child(2)").addClass("s5_phone");
        }
    })
})();
	var taste=document.getElementById("taste");
    var backDrop=document.getElementById("shadow");
    taste.onmouseenter=()=>{
        backDrop.className="modalShadow";
    };
    taste.onmouseleave=function(){
        backDrop.className="";
    };
/*µã»÷·µ»Ø¶¥²¿*/
    $("#top").click(function(){
        if(scroll=="off")
        return;$("html,body").animate({scrollTop: 0}, 1000);
    });