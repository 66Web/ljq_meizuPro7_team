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
    btn.onclick = function(){
        if(!/^(\+86|0086)?\s*1[34578]\d{9}$/.test(txtName.value)) {
            msg.innerHTML = "手机号格式不正确"
        }else if(!/^\w{6,14}$/.test(txtPwd.value)){
            msg.innerHTML ="密码设置为6-14位有效字符"
        }else{
            var xhr = new XMLHttpRequest();
            var u = uname.value;
            var p = upwd.value;
            xhr.open("GET",
                `register.php?uname=${u}&upwd=${p}`,true);
            xhr.send(null);
            msg.innerHTML="注册成功";
            $("#msg").css({
                color:"green"
            });
        }
    }
})();
