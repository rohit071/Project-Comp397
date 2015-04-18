
function init()
{
       
		d = "right"; //default direction
		create_snake();
		
		create_food(); //Now we can see the food particle
    //finally lets display the score
		if (level == 0) {
		    score = 0;
		}
		bonus=0;
		bonus_time = 10;
		bonus_food_type = 0;
		flag=0;
		highestScore=localStorage.getItem("SnakeGameHigh");
		if(highestScore==null)
		{
			highestScore=0;
		}else
		{
			$("#highScore").text("Game Best : "+parseInt(highestScore)).show();
		}
}

function gameloop() {	
    
		drawLayerGame();
		
}

function check_collision(x, y, array) {
    //This function will check if the provided x/y coordinates exist
    //in an array of cells or not
    for (var i = 0; i < array.length; i++) {
        if (array[i].x == x && array[i].y == y)
            return true;
    }

    return false;
}

//to clear canvas

function clear(ctx) {	

		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height); 

}

