<?php
if(!isset($_SESSION)) {
    session_start();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
<div class = "bg-img">
   <form action="password.php" method="POST">
   <div class="container" id="formm"> 

     <div class="row">
     <div class="col-sm-3">
       <h1>Reset Password</h1>
       <hr class="mb-3">
     
       <input class="form-control" placeholder="Login" type="text" name="LOGIN" required>

 
       <input class="form-control" type="email" placeholder="email" name="email" required>
       <div class="form-control">
       <p>If you want to return to the login page <a href="index.php">CLICK HERE</a></p>
       </div>
       <hr class="mb-3">

       <input class="btn btn-primary" type="submit" name="submit" value="Send Password">

        </div>
       </div>
     </div>

  
   </form>
</div>
    
</div>

<?php
      include('./model/Users.php');
      if(isset($_POST['submit'])){
              $user = new Users();
              $LOGIN = $_POST['LOGIN'];
              $email = $_POST['email'];
              $_SESSION["LOGIN"] = $LOGIN;
              $_SESSION["email"] = $email ;
              $find = $user->find($_SESSION["LOGIN"]);
              if($find){
                  if($user->email == $_SESSION["email"]){
                      $headers = 'From: orwastaif@outlook.com' . "\r\n" .
                          'Reply-To: orwastaif@outlook.com' . "\r\n" .
                          'X-Mailer: PHP/' . phpversion();
                      mail($user->email, 'Password remainder', "Your password is: ".$user->password, $headers);
                      echo "<p id=alert><b>Password sent to your email!</b></p>";
                  }else{
                      echo "<p id=alert><b>Wrong email!</b></p>";
                  }
              }else{
                  echo "<p id=alert><b>Wrong Login!</b></p>";
              }
              unset($_POST);
      }
?>

</body>
</html>