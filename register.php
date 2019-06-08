<?php

$con = mysqli_connect("localhost", "root", "", "social");
if(mysqli_connect_errno())  {
    echo"Failed to connect".mysqli_connect_errno();
}

//variables to prevent errors
$fname = "";  //fiisrtname
$lname ="";   //lastname
$em = "";     //email
$em2 = "";     //email2
$password = ""; //password
$password2 = ""; //password2
$date = "";     //sign up date
$error_array = "";    //error messages

if(isset($_POST['register_button'])) {

    //register form values


 //first name...
    $fname  = strip_tags($_POST['reg_fname']);    //strip tags function removes all html tags to prevent injections
    $fname = str_replace(' ','',$fname);    //str replace function removes first argument and replaces them with second argument. 
    $fname = ucfirst(strtolower($fname)); //lowers all letters in the string, and then capitalizes only the first letter

 //last name...
 $lname  = strip_tags($_POST['reg_lname']);    //strip tags function removes all html tags to prevent injections
 $lname = str_replace(' ','',$lname);    //str replace function removes first argument and replaces them with second argument. 
 $lname = ucfirst(strtolower($lname)); //lowers all letters in the string, and then capitalizes only the first letter


 //Email...
 $em  = strip_tags($_POST['reg_email']);    //strip tags function removes all html tags to prevent injections
 $em = str_replace(' ','',$em);    //str replace function removes first argument and replaces them with second argument. 
 $em = ucfirst(strtolower($em)); //lowers all letters in the string, and then capitalizes only the first letter


 //Email2...
 $em2  = strip_tags($_POST['reg_email2']);    //strip tags function removes all html tags to prevent injections
 $em2 = str_replace(' ','',$em2);    //str replace function removes first argument and replaces them with second argument. 
 $em2 = ucfirst(strtolower($em2)); //lowers all letters in the string, and then capitalizes only the first letter

  //password...
  $password  = strip_tags($_POST['reg_password']);    //strip tags function removes all html tags to prevent injections
  $password2  = strip_tags($_POST['reg_password2']);    //strip tags function removes all html tags to prevent injections

  $date = date("Y-m-d");  //sets signup date to proper date format
 


}




?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no"
    />
    <title>FaceJunk - Register</title>
    <meta name="description" content="" />
  </head>
  <body>
        <form action="register.php" method="POST">
            <input type="text" name="reg_fname" placeholder="First Name" required></form>
            <input type="text" name="reg_lname" placeholder="Last Name" required></form>
            <br>
            <input type="email" name="reg_email" placeholder="E-mail" required></form>
            <input type="email" name="reg_email2" placeholder="Confirm E-mail" required></form>
            <br>
            <input type="password" name="reg_password" placeholder="Password" required></form>
            <input type="password" name="reg_password2" placeholder="Confirm Password" required></form>
            <br>
            <input type="submit" name="register_button" value="Register">
        </form>


  </body>
</html>
