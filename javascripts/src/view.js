$(document).ready(function(){
// Get keyup set up - DONE
// Figure out how to find a specific key - DONE
// Figure out how to console.log on whe keyCode F is pressed. - DONE
// Make the next cell turn red when F is pressed. - DONE
// Make the previous cell turn white when F is pressed. - DONE
// DRY it up 

  player1 = new (Player);
  player2 = new (Player);

  $(document).keyup(function(e) {
    if (e.keyCode == 70){
      player1.advance()
      $('#player1_strip td').eq(player1.position).addClass("active");
      $('#player1_strip td').eq(player1.position-1).removeClass("active");
      
      if (player1.position == 10) {
        $("body").css("background-image", "url('http://bestclipartblog.com/clipart-pics/fireworks-clip-art-9.jpg')")
        alert ('Congratulations! Player 1 has won!');
      }
    }
    if (e.keyCode == 74){
      player2.advance()
      $('#player2_strip td').eq(player2.position).addClass("active");
      $('#player2_strip td').eq(player2.position-1).removeClass("active");

      if (player2.position == 10) {
        $("body").css("background-image", "url('http://bestclipartblog.com/clipart-pics/fireworks-clip-art-9.jpg')")
        alert ('Congratulations! Player 2 has won!')
      }
    }

  });

});