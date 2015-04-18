$("#restart").click(function(){ 
		
    init();
    mainMusic.play();
    $("#reMenu").hide();
    $("#powerUpBoard").show();
    level = 0;
    gameRepeater = setInterval(gameloop, gameLevel[level].speed);
			
});
	    	

