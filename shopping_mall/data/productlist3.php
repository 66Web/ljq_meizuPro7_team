<?php
require("init.php");
@$pageno=$_REQUEST["pageno"]or die('{"code":-1,"msg":"页数是必须的"}');
$offset=($pageno-1)*10;
$sql ="SELECT * FROM meizu_plist LIMIT $offset,10";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>