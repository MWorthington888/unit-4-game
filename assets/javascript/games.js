// Gems Collector Game JS code

// GLOBAL VARIABLES ////////////////////////////////////////////////////////////////////////////////////////////////////////////

var cgrNumberforMatch = 0;  //Computer Generated Random Number for Match
var cgrNumberforRedRuby = 0; //Computer Generated Random Number for Red Ruby
var cgrNumberforBlueDiamond = 0; //Computer Generated Random Number Blue Diamond 
var cgrNumberforYellowTopaz = 0;  //Computer Generated Random Number for Yellow Topaz 
var cgrNumberforGreenEmerald = 0; //Computer Generated Random Number for Green Emerald
var userTotalPoints = 0; // User's points to match CGR Number
var wins = 0; // Var for total wins counter
var losses = 0; // Var for total losses counter


// FUNCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {


// initializeGame() Function     We'll get our random numbers here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function initializeGame() {

  cgrNumberforMatch = Math.floor((Math.random() * 101) + 19);
  cgrNumberforRedRuby = Math.floor((Math.random() * 12) + 1);
  cgrNumberforBlueDiamond = Math.floor((Math.random() * 12) + 1);
  cgrNumberforYellowTopaz = Math.floor((Math.random() * 12) + 1);
  cgrNumberforGreenEmerald = Math.floor((Math.random() * 12) + 1);

// Push computer generated number for Match to html page ---------------

$("#random-area").html(cgrNumberforMatch);  
}

 
// startGame() Function     It's how we we will start the game xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function startGame() {

  // console log to see our random numbers for testing --------------------------
  // console.log(cgrNumberforRedRuby + "RED");
  // console.log(cgrNumberforBlueDiamond + "BLUE");
  // console.log(cgrNumberforYellowTopaz +"YEL");
  // console.log(cgrNumberforGreenEmerald + "GRE");
  // console.log(cgrNumberforMatch);
  // console.log(userTotalPoints + " User Total points");


  // Click event that picks which gem value to be added to user total points  ---------------------
  // One function for each gem
 
    $("#redruby").on("click", function() {
      
       userTotalPoints += cgrNumberforRedRuby;
       $("#score-area").html(userTotalPoints);
      //  console.log(userTotalPoints + " User Total points");
      //  console.log(cgrNumberforRedRuby + "RED");

       checkStatus();
    });
    
    $("#bluediamond").on("click", function() {
      
      userTotalPoints += cgrNumberforBlueDiamond;
      $("#score-area").html(userTotalPoints);

      checkStatus();
    });

    $("#yellowtopaz").on("click", function() {
      
      userTotalPoints += cgrNumberforYellowTopaz;
       $("#score-area").html(userTotalPoints);

      checkStatus();
    });

    $("#greenemerald").on("click", function() {
      
     userTotalPoints += cgrNumberforGreenEmerald;
     $("#score-area").html(userTotalPoints);

     checkStatus();
    });
  } 

//checkStatus function will check to see if we have a WINNER or LOSER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function checkStatus()
{
  if (userTotalPoints === cgrNumberforMatch) {
    $("#score-area").html(userTotalPoints);
    $("#score-title").html("WINNER");
    wins++;
    $("#win-counter").html(wins);
    restartGame();

  }
   else if (userTotalPoints > cgrNumberforMatch) {
    $("#score-area").html(userTotalPoints);
    $("#score-title").html("NO SOUP FOR YOU");
    losses++;
    $("#loss-counter").html(losses);
    restartGame();
  }
}
 
  // restartGmae Funtion starts here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    function restartGame() {

      userTotalPoints= 0;
      cgrNumberforMatch = Math.floor((Math.random() * 101) + 19);
      cgrNumberforRedRuby = Math.floor((Math.random() * 12) + 1);
      cgrNumberforBlueDiamond = Math.floor((Math.random() * 12) + 1);
      cgrNumberforYellowTopaz = Math.floor((Math.random() * 12) + 1);
      cgrNumberforGreenEmerald = Math.floor((Math.random() * 12) + 1);
      
      //Clears the user score area. ----------------------
      $("#score-area").html("");

      // Push the new CGRNumber for Match to html page ---------------------
      $("#random-area").html(cgrNumberforMatch);
    }
      
    // MAIN PROCESS - This code controls what runs ///////////////////////////////////////////////////////////////////////////

    // Initializes game prior to start  ------------------

    initializeGame();

    // Starts the Game ---------------------------------

    startGame();




    // This is extra code I want to save to review later -------------------------------------------------------------
    //  if (userTotalPoints === cgrNumberforMatch) {
    //   $("#score-area").html(userTotalPoints);
    //   $("#score-title").html("WINNER");
    //   wins++;
    //   $("#win-counter").html(wins);
    //   restartGame();
    // }
    //  else if (userTotalPoints > cgrNumberforMatch) {
    //   $("#score-area").html(userTotalPoints);
    //   $("#score-title").html("NO SOUP FOR YOU");
    //   losses++;
    //   $("#loss-counter").html(losses);
    //   restartGame();
    // }
  
   });
