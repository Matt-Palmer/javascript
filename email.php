<?php 
$first_name = $_POST['first-name'];
$visitor_email = $_POST['email'];

$to = "matt_palmer_20@hotmail.co.uk";
mail($to, $first_name)
?>