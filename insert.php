<?php

$comentario = $_POST["comentario"];
require("conection.php");
$sql = "INSERT INTO sabor (comentario) VALUES ('$comentario')";
mysqli_query($connetion, $sql);
echo 1;