<?php
  require("init.php");
  @$uid=$_REQUEST["uid"]or die('{"code":-1,"msg":"用户编号是必须的"}');
  @$pid=$_REQUEST["pid"]or die('{"code":-2,"msg":"产品编号是必须的"}');
  $sql="SELECT * FROM meizu_cart WHERE uid=$uid AND pid=$pid";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  $c = 1;
  if($row!==null){
    $sql = "UPDATE meizu_cart SET count=count+1 WHERE uid=$uid AND pid=$pid";
    $result = mysqli_query($conn,$sql);
    $c = $row["count"]+1;
  }else{
    $sql = "INSERT INTO meizu_cart VALUES(null,$uid,$pid,1)";
    $result = mysqli_query($conn,$sql);
  }
  echo '{"code":1,"msg":"购物数量'.$c.'"}';
?>