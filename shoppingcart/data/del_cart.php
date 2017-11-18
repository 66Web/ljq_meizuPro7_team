<?php
require("init.php");
@$cid=$_REQUEST["cid"]or die('{"code":-1,"msg":"编号是必须的"}');
$sql = "DELETE FROM meizu_cart WHERE cid=$cid";
$result = mysqli_query($conn,$sql);
if($result){
 echo ('{"code":1,"msg":"删除成功"}');
}
?>