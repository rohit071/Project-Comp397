

$("#instructions").click(function () {

    $("#menu").hide();
    $("#data").show();
    startMusic.pause();
    mainMusic.play();
    
    var c = document.getElementById("ui");
    var ctx = c.getContext("2d");
    document.getElementById("ui").style.background = 'black';

    ctx.font = "20px Georgia";
    ctx.fillText("Instructions", 10, 50);

    ctx.font = "30px Verdana";
    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText("Instructions", 250, 50);
    ctx.fillText("Move the snake with your arrow keys.", 10, 90);
    ctx.fillText("If you hit yourself or the walls ", 10, 130);
    ctx.fillText("the game will be over.", 10, 170);
    ctx.fillText("Red bonus is poison. Blue is power up.", 10, 210)
    ctx.fillText("Yellow is score booster and white is to go to next level", 10, 250)

});

