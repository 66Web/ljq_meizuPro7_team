<?php
  require("init.php");
  @$cid = $_REQUEST["cid"]or die('{"code":-1,"msg":"编号是必须的"}');
  $sql = "UPDATE meizu_cart SET count=count+1 WHERE cid=$cid";
  $result = mysqli_query($conn,$sql);
  echo '{"code":1,"msg":"更新成功"}';
?>