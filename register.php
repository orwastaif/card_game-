<?php
require_once('./model/DatabaseConnection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registration</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        body{
            text-align: center;
        }
    </style>
    
</head>
<body class = "bg-img">


  <div class="center">
   <form action="#" method="POST">
   <div class="container"> 

     <div class="row">
     <div class="col-sm-3">
       <h1>Registration</h1>
       <p>Fill up the form with correct values.</p>
       <hr class="mb-3">
       <label for="login"><b>Login</b></label>
       <input class="form-control" type="text" name="login" required>

       <label for="password"><b>password</b></label>
       <input class="form-control" type="password" name="password" required>

       <label for="confirm"><b>confirm password</b></label>
       <input class="form-control" type="password" name="confirm" required>

       <label for="full"><b>Full Name</b></label>
       
       <input class="form-control" type="text" name="full" required>

       <label for="email"><b>E-Mail Address</b></label>
       <input class="form-control" type="text" name="email" required>
       <hr class="mb-3">

       <input class="btn btn-primary" type="submit" name="create" value="sign up">
        </div>
       </div>
     </div>



   <?php
    if(isset($_POST['create'])){
        $login    = $_POST['login'];
        $password = $_POST['password'];
        $confirm  = $_POST['confirm'];
        $full     = $_POST['full'];
        $email    = $_POST['email'];
        if($password != $confirm){
             echo 'password is different try again';
        }else{

       
        $db = new PDO("mysql:host=127.0.0.1;dbname=sword", 'ostaif', 'securepass');
        $sql = "INSERT INTO users (LOGIN, password, full_name, email) VALUES('$login', '$password', '$full', '$email')";
        $stmtinsert = $db->prepare($sql);
        try{
          $stmtinsert->execute();
          echo 'Successfully saved.' . "\x20\x20\x20";
          echo ('<a href="index.php">GO TO LOGIN PAGE</a>');

        }catch(PDOException $e){
          echo 'there were errors while saving the data.' . $e->getMessage();
        }
      }
    }
   ?>
</div>
   </form>
</div>
    
</body>
</html>