$("#start").click(function () {
    $("#data").hide();
    $("#menu").hide();
 

    $("#powerUpBoard").show();
    startMusic.pause();
    mainMusic.play();
    gameRepeater = setInterval(gameloop, gameLevel[level].speed);

});