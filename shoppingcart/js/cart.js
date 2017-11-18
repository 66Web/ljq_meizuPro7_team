/**
 * Created by NB on 2017/8/15.
 */
$.ajax({
    url:"data/cart.php",
    data:{uid:1},
    success:function(data){
        var html = "";
        $.each(data,function(idx,obj){
           html += `
            <tr>
                <td>
                    <input type="checkbox"/>
                    <!--<input type="hidden" value="1" />-->
                    <div><img src="image/${obj.pic}" alt=""/></div>
                </td>
                <td><a href="">${obj.pname}</a></td>
                <td>${obj.price}</td>
                <td>
                    <button class="${obj.cid}">-</button>
                    <input type="text" value="${obj.count}"/>
                    <button class="${obj.cid}">+</button>
                </td>
                <td><span>${obj.price*obj.count}</span></td>
                <td>
                         <a href="${obj.cid}"
                         class="btn-del">删除</a>
                </td>
            </tr>
           `;

        });  //15:30--15:40
        $("#ycart tbody").html(html);
    }

});

$("#ycart tbody").on("click","a.btn-del",
    function(e){
        e.preventDefault();
        var cid = $(this).attr("href");
        var tr = $(this).parents("tr");
        var rs = window.confirm("是否删除");
        if(!rs){
            return;
        }
        $.ajax({
            url:"data/del_cart.php",
            data:{cid:cid},
            success:function(data){
                if(data.code>0){
                    tr.remove();
                }
            }
        });
    });

$("#ycart tbody").on("click",
    "button:contains('+')",function(e){
        var cid = $(this).attr("class");
        var that = this;

        $.ajax({
            url:"data/update_cart.php",
            data:{cid:cid},
            success:function(data){
                var input = $(that).prev();
                var v = parseInt(input.val())+1;
                input.val(v);
                var priceI = $(that).parent().prev().text();
                var td = $(that).parent().next();

                var rs = v*priceI;
                td.html(`<span>${rs}</span>`);
            },
            error:function(){
                alert("网络故障");
            }
        });

    });
$("#ycart tbody").on("click",
    "button:contains('-')",function(e){
        //1:获取购物车编号
        var cid = $(this).attr("class");
        //1.1 预留this
        var that = this;
        //1.2 修改数量
        var inputCount = $(that).next();
        var v = inputCount.val()-1;
        if(v<1){
            return;
        }
        inputCount.val(v);
        //2:发送ajax
        $.ajax({
            url:"data/update_cart_sub.php",
            data:{cid:cid},
            success:function(data){
                if(data.code>0){
                    //重新计算小计
                    //1:单价
                    var pri = $(that).parent().prev().text();
                    //2:数量
                    //3:小计
                    var total = $(that).parent().next();
                    var rs = pri*v;
                    total.html(`<span>${rs}</span>`);
                }
            }
        });

    });
$("tbody").on("click","input[type='checkbox']",function(e){
    $tar=$(e.target);
    $ipt=$("tbody input[type='checkbox']");
    //console.log($ipt);
    total();
})
function total(){
    //$ipt=$("tbody input[type='checkbox']:checked");
    $spans=$("tbody input[type='checkbox']:checked").parents("tr").children(":nth-child(5)").children("span");
    //console.log($spans);
    var tot=0;
    //for(var i=0;i<$ipt.length;i++){
    $spans.each(function(key,value){
    //var $span=$ipt.parents("tr").children(":nth-child(5)").children("span");
    //console.log(key+":"+$(value).html());
        tot=tot+Number($(value).html());
        console.log(tot);
    })
        //var $va=$ipt[i].parentElement.nextElementSibling.nextElementSibling.children;

    //}
    //console.log($("#ycart_footer span")[0].innerHTML);
    $("#ycart_footer span")[0].innerHTML=`${tot}`;
}
(function(){
    $("thead input[type='checkbox']").click(function(){
        var d=$(this).prop("checked");
        $ipts=$("tbody input[type='checkbox']");
        $ipts.prop("checked",d);
        total();
    });
    $("tbody").on("click","input[type='checkbox']",function(){
        var a=$("tbody input[type='checkbox']");
        for(var i=0;i<a.length;i++){
            if($(a[i]).prop("checked")==false){
                $("thead input[type='checkbox']").prop("checked",false);
                break;
            }else{
                $("thead input[type='checkbox']").prop("checked",true);
            }
        }
    })
})();


