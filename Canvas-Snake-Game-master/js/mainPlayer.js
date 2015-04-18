function create_snake() {
    var length = gameLevel[level].length; //Length of the snake
    snake_array = []; //Empty array to start with
    for (var i = length - 1; i >= 0; i--) {
        //This will create a horizontal snake starting from the top left
        snake_array.push({ x: i, y: 0 });
        //console.log(snake_array[length - 1 - i].x, snake_array[length - 1 - i].y);
    }

}

