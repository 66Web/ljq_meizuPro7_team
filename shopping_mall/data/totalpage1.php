<?php
require("init.php");
$sql ="SELECT count(*) as page FROM meizu_plist WHERE tid=1;";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_assoc($result);
echo json_encode($rows);
?>