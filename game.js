//variable decleration
var gamePattern = [];
var userPattern = [];
var randomColor;
var lev = 0;
var len = 0;
var buttonColors = [
  "green",
  "red",
  "yellow",
  "blue"
];

var gameStart = false;
var level = 0;

//sequence generator
function nextSequence() {
  lev = 0;
  level += 1;
  userPattern = [];
  $(".heading").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 3);
  randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  sound(randomColor);
  ani(randomColor);
}

//detect start
$("body").keypress(function() {
  if (!gameStart) {
    gameStart = true;
    nextSequence();
  }
});

//checkAnswer
function checkAnswer() {
  if (gamePattern[lev] == userPattern[lev]) {
    len+=1;
  }else{
    sound("wrong");
      $("body").css("background-color","red");
    setTimeout(function(){
      $("body").css("background-color","#231955");},200);
    $(".heading").text("Game Over! press a key to start over");
    startOver();
  }
  lev+=1;

  if (lev == gamePattern.length) {
    if (len == gamePattern.length) {
      len =0;
      nextSequence();
    }
  }
}

$(".button").click(function() {
  var whichTile = $(this).attr("id");
  userPattern.push(whichTile);
  sound(whichTile);
  //ani(whichTile);
  checkAnswer();
});

//animation function
function ani(key) {
  //console.log(key);
  $("#" + key).addClass("animate");
  setTimeout(function() {
    $("#" + key).removeClass("animate");
  }, 100);
}

//play sound function
function sound(key) {
  var sound = new Audio("sounds/" + key + ".mp3");
  sound.play();
}

//startover function

function startOver(){
  gamePattern =[];
  gameStart = false;
  level = 0;

}
