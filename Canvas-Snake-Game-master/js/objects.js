//For adding sounds effect
var startMusic = document.getElementById("start_music");
var mainMusic = document.getElementById("main_music");
startMusic.play();

//Game over messages Random selection
var msgsSelf = [];
msgsSelf[0] = "There's plenty of food. Don't eat yourself!";
msgsSelf[1] = "Is your body tastier than the food?";
msgsSelf[2] = "AArrgghhh!! I bit myself!!";
msgsSelf[3] = "Do you have Autophagia?";

var msgsWall = [];
msgsWall[0] = "You broke your head!";
msgsWall[1] = "The wall is stronger than it seems!";
msgsWall[2] = "There's no way to escape the game...";
msgsWall[3] = "LOOK MA! NO HEAD..!!";
msgsWall[4] = "Can't see the wall? Huh?";

var msgsPoison = [];
msgsPoison[0] = "Hey!!! Do you like poison...";
msgsPoison[1] = "Do you have poison food deficiency...";
msgsPoison[2] = "Be Carefull!!! Avoid Poison Food!!!";

//global variables
var bonus_time = 10;//bonus food remain for 10 sec
var layer1, layer2, bg_image, foodx, foody;
var w = $("#bg").width();
var h = $("#bg").height();
var cw = 20;
var d;
var food;
var food_bonus = { x: -1, y: -1 };
var counter, flag = 0, hitType, gameRepeater;
var score;
var levelchanged = 0;
var bonus = 0;
var highestScore = 0;
var snake_array;
var bonus_food_type = 0;
var powerSaver = 0;//initially no power saver is given
var wallShaker = 0;
var snakeShaker = 0;
/*
0:yellow-Points fruit
1:yellow-Points fruit
2:red-poison fruit
3:blue-power up fruit
4:white-new level fruit
*/
var prey_image = new Image();
prey_image.src = "images/prey.png";
var gameLevel = [{
    speed: 200,
    length: 3
},
{
    speed: 190,
    length: 6
},
{
    speed: 180,
    length: 10
}];
var level = 0;