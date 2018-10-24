<?php

echo "hello World";
echo "<hr>";
echo "<pre>";
print_r($_POST);
print_r($_FILES);
echo "</pre>";
echo "<hr>";

if ($_POST["register"]) {
  echo "l'utilisateur veut s'enregister! <br>";
  echo $_POST["name"]." ".$_POST["lastname"];
}
