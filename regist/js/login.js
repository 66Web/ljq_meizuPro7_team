(()=>{
    $(".tab-title1>a:nth-child(3)").on("click",()=>{
        $("#login1").css("zIndex","0");
        $("#login2").css("zIndex","1");
        $("#login2>div:nth-child(7)").css("display","block")
    });
    $(".tab-title2>a:nth-child(1)").on("click",()=>{
        $("#login1").css("zIndex","1");
        $("#login2").css("zIndex","0");
        $("#login2>div:nth-child(7)").css("display","none")
    });
})();
(()=>{
    var txtName=
        document.getElementById("uname");
    var txtPwd=
        document.getElementById("upwd");
    txtName.onfocus=function(){
        this.placeholder="请输入手机账号";
        this.style.border="1px solid #000fff"
    };
    txtPwd.onfocus=function(){
        this.placeholder="请输入你的密码";
        this.style.border="1px solid #000fff"
    };
    txtName.onblur=function(){
        vali(/^(\+86|0086)?\s*1[34578]\d{9}$/,this);
    };
    txtPwd.onblur=function(){
        vali(/^\w{6,14}$/,this);
    };
    function vali(reg,txt){
        if(reg.test(txt.value)){
            txt.placeholder="";
            msg.innerHTML="";
        }else{
            txt.value="";
            msg.innerHTML="请输入正确格式";
            $("#msg").css({
                color:"red"
            });
            txt.style.border="2px solid red"
        }
    }
})();
(()=>{
    var loginName = "";
    var loginUid = "";
    //1:获取登录按钮绑定点击事件
    $("#btn").click(function(e){
     //2:获取用户名和密码
     var u=$("[name='uname']").val();
     var p=$("[password='upwd']").val();
     $.ajax({
       type:"POST",
       url:"login.php",
       data:{uname:u,upwd:p},
       success:function(data){
         if(data.code>0){
         //e.target.nextElementSibling.setAttribute("href")
          loginName = u;
          loginUid = data.uid;
          document.cookie = 'uname='+u;
          document.cookie = 'uid='+loginUid;
             location.href="../shopping_mall/shopping_mall.html";
         }else{
          $("p.alert").html(data.msg);
         }
       },
       error:function(){
         alert("网络连接错误，请检查");
       }
     });
     //4:返回返回数据并且判断
     //5:隐藏/显示错误
    });

})();

