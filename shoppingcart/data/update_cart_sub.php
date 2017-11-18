<?php
  //1:设置响应格式,创建连接设置编码
  require("init.php");
  @$cid = $_REQUEST["cid"]or die('{"code":-1,"msg":"编号是必须的"}');
  //2:创建SQL并且发送SQL
  $sql = "UPDATE meizu_cart SET count=count-1";
  $sql .= " WHERE cid=$cid";
  $result = mysqli_query($conn,$sql);
  echo '{"code":1,"msg":"更新成功"}';
?>