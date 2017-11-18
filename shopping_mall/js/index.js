//热销推荐
function pagef(pageno){
  $.ajax({
    type:"GET",
    url:"data/productlist1.php",
    data:{pageno:pageno},
    success:function(data){
      //拼字符串
      var html = "";
      $.each(data,function(idx,obj){
          //console.log(obj);
        html += `
            <li>
            <a href=""><img src="image/${obj.pic}" alt=""/></a>
            <h3>${obj.pname}</h3>
            <p>${obj.desciption}</p>
            <p>￥${obj.price}</p>
            <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
        `;
      });
      $("#plist ul.list1").html(html);

    },
    error:function(data){}
  });
  $.ajax({
    url:"data/totalpage1.php",
    success:function(data){
      var recound = data.page;
      var p = Math.ceil(recound/5);
      var html="";
        html += `
        <li><a href="1">&lt;</a></li>
        <li><a href="2">&gt;</a></li>
        `;

      $("ol.pager.first").html(html);
    },
    error:function(){}
  });
}
pagef(1);
$("ol.pager.first").on("click","a",function(e){
    e.preventDefault();
    pagef($(this).attr("href"));
});



//手机
function pages(pageno){
  $.ajax({
    type:"GET",
    url:"data/productlist2.php",
    data:{pageno:pageno},
    success:function(data){
      //拼字符串
      var html = "";
      $.each(data,function(idx,obj){
          //console.log(obj);
        html += `
            <li>
            <a href=""><img src="image/${obj.pic}" alt=""/></a>
            <h3>${obj.pname}</h3>
            <p>${obj.desciption}</p>
            <p>￥${obj.price}</p>
            <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
        `;
      });
      $("#plist ul.list2").html(html);

    },
    error:function(data){}
  });
  $.ajax({
    url:"data/totalpage2.php",
    success:function(data){
      var recound = data.page;
      var p = Math.ceil(recound/10);
      var html="";
      for(var i=2;i<=1+p;i++){
        html += `
        <li><a href="${i}">热销机型</a></li>
        `;
      }
      $("ol.pager.second").html(html);
    },
    error:function(){}
  });
}
pages(2);
$("ol.pager.second").on("click","a",function(e){
    e.preventDefault();
    pages($(this).attr("href"));

});


//数码配件
function paget(pageno){
  $.ajax({
    type:"GET",
    url:"data/productlist3.php",
    data:{pageno:pageno},
    success:function(data){
      //拼字符串
      var html = "";
      $.each(data,function(idx,obj){
          //console.log(obj);
        html += `
            <li>
            <a href=""><img src="image/${obj.pic}" alt=""/></a>
            <h3>${obj.pname}</h3>
            <p>${obj.desciption}</p>
            <p>￥${obj.price}</p>
            <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
        `;
      });
      $("#plist ul.list3").html(html);

    },
    error:function(data){}
  });
  $.ajax({
    url:"data/totalpage3.php",
    success:function(data){
      var recound = data.page;
      var p = Math.ceil(recound/10);
      var html="";
        html += `
        <li><a href="3">超值推荐</a></li>
        <li><a href="4">耳机/音箱</a></li>
        <li><a href="5">智能设备</a></li>
        <li><a href="6">键盘鼠标</a></li>
        `;

      $("ol.pager.third").html(html);
    },
    error:function(){}
  });
}
paget(3);
$("ol.pager.third").on("click","a",function(e){
    e.preventDefault();
    paget($(this).attr("href"));
});


//手机周边
function pagefo(pageno){
  $.ajax({
    type:"GET",
    url:"data/productlist4.php",
    data:{pageno:pageno},
    success:function(data){
      //拼字符串
      var html = "";
      $.each(data,function(idx,obj){
        html += `
            <li>
            <a href=""><img src="image/${obj.pic}" alt=""/></a>
            <h3>${obj.pname}</h3>
            <p>${obj.desciption}</p>
            <p>￥${obj.price}</p>
            <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
        `;
      });
      $("#plist ul.list4").html(html);

    },
    error:function(data){}
  });
  $.ajax({
    url:"data/totalpage4.php",
    success:function(data){
      var recound = data.page;
      var p = Math.ceil(recound/10);
      var html="";
        html += `
        <li><a href="7">超值推荐</a></li>
        <li><a href="8">数据线/电源适配器</a></li>
        <li><a href="9">保护套/后盖/贴膜</a></li>
        `;

      $("ol.pager.four").html(html);
    },
    error:function(){}
  });
}
pagefo(7);
$("ol.pager.four").on("click","a",function(e){
    e.preventDefault();
    pagefo($(this).attr("href"));
});
$("#plist").on("click","a.addcart",function(e){
    e.preventDefault();
    //var u = loginUid;
    //   console.log(u);
    var p = $(this).attr("href");
    $.ajax({
        url:"data/addcart.php",
        data:{uid:1,pid:p},

        success:function(data){
            alert(data.msg);
        },
        error:function(){
            alert("网络故障，请检查");
        }
    });

});









//错误集锦:
//1:网络出错
//  99% json 拼写错误
//  1%  404  url:"data/jd_login.php"


//2: index.js
//alert(0)
//function page(pageno){}
//page(2)
//缓存造成结果
//禁用缓存
//[*] Disable cache







