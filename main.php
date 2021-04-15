<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
    <link rel="stylesheet" href="css/style1.css">

    


    
</head>
<body>
 <section class="marvel-background">
        <header>
			<span class="text-center">BATTLE</span>
        </header>
       
		<a href="index.php"><span class="exit-button  text-center"><i class="far fa-arrow-alt-circle-left"></i><br>E<br>X<br>I<br>T</span></a>  
      </section>
            <section class="battle-container ">
 
    <div class="card_field" >
            <div class="cards">
                <div class="card"><img id='img2_1' class="imageCard"></img></div>
                <div class="card"><img id='img2_2' class="imageCard"></img></div>
                <div class="card"><img id='img2_3' class="imageCard"></img></div>
                <div class="card"><img id='img2_4' class="imageCard"></img></div>
                <div class="card"><img id='img2_5' class="imageCard"></img></div>
                <div class="User_card1">
                    <div class="hp_box">
                        <img class="hp_icon" src="images/heart.png">
                        <span class="hp_text">20</span>
                        <img class="mana_icon" src="images/stones.png">
                        <span class="mana_text">6</span>
                    </div>
                    <img class="usr_sub" src="images/bot.jpeg">
                </div>
            </div>
            <div class="battle">
                <div class="enemy_field"></div>
                <span class="battleStart">Start Battle</span>
                <div class="player_field"></div>
            </div>
            <div class="cards">
                <div class="card" id='1'><img src="" id='img1' class="imageCard"></img></div>
                <div class="card" id='2'><img src="" id='img2' class="imageCard"></img></div>
                <div class="card" id='3'><img src="" id='img3' class="imageCard"></img></div>
                <div class="card" id='4'><img src="" id='img4' class="imageCard"></img></div>
                <div class="card" id='5'><img src="" id='img5' class="imageCard"></img></div>
                <div class="User_card2">
                    <div class="hp_box">
                        <img class="hp_icon" src="images/heart.png">
                        <span class="hp_text">20</span>
                        <img class="mana_icon" src="images/stones.png">
                        <span class="mana_text">6</span>
                    </div>
                    <img class="usr_sub" src="images/User.png">
                </div>
            </div>
        </div>
        
  
    <script src="js/index.js"></script>
  
</section>
<?php

?>
</body>
</html>
