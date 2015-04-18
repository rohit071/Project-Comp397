function paint() {
    //To avoid the snake trail we need to paint the BG on every frame
    //Lets paint the layer2 now
    drawLayerBG();


    drawWalls();
    //The movement code for the snake to come here.
    //The logic is simple
    //Pop out the tail cell and place it infront of the head cell
    var nx = snake_array[0].x;
    var ny = snake_array[0].y;

    //These were the position of the head cell.
    //We will increment it to get the new head position
    //Lets add proper direction based movement now
    if (d == "right") nx++;
    else if (d == "left") nx--;
    else if (d == "up") ny--;
    else if (d == "down") ny++;

    //Lets add the game over clauses now
    //This will restart the game if the snake hits the wall
    //Lets add the code for body collision
    //Now if the head of the snake bumps into its body, the game will restart
    if (nx == -1 || nx == w / cw || ny == -1 || ny == h / cw - 1 || check_collision(nx, ny, snake_array) || check_collision_wall(nx, ny)) {
        if (powerSaver == 0) {
            hitType = "wall";

            if (check_collision(nx, ny, snake_array))
                hitType = "self";

            gameover();
            //Lets organize the code a bit now.
            //return;
        }
        else {
            powerSaver--;
            snakeShaker = 5;
            $("#life" + (powerSaver + 1)).hide();
            if (nx == -1) {//left
                nx++;
                ny++;

                if ((ny + 1) > (h / (2 * cw))) {
                    ny--;
                    d = "up";
                } else {
                    ny++;
                    d = "down";
                }

            }
            else if (ny == -1) {//up
                ny++;

                if ((nx + 1) > (w / (2 * cw))) {
                    nx--;
                    d = "left";
                } else {
                    nx++;
                    d = "right";
                }

            }
            else if (nx == w / cw) {//right
                nx--;

                if ((ny + 1) > (h / (2 * cw))) {
                    ny--;
                    d = "up";
                } else {
                    ny++;
                    d = "down";
                }

            } else if (ny == h / cw - 1) {//down
                ny--;

                if ((nx + 1) > (w / (2 * cw))) {
                    nx--;
                    d = "left";
                } else {
                    nx++;
                    d = "right";
                }

            }
            if (check_collision_wall(nx, ny)) {
                if (level == 1) {
                    if (nx == 18 && ny >= 4 && ny <= 16) {
                        if (d == "right") {
                            if (ny <= 10) {
                                nx--;
                                ny--;
                                d = "up";
                            }
                            else {
                                nx--;
                                ny++;
                                d = "down";
                            }
                        }
                        else if (d == "left") {
                            if (ny <= 10) {
                                nx++;
                                ny--;
                                d = "up";
                            }
                            else {
                                nx++;
                                ny++;
                                d = "down";
                            }
                        }
                        else if (d == "up") {


                            nx--;
                            ny++;
                            d = "left";

                        }
                        else if (d == "down") {
                            ny--;
                            nx--;
                            d = "left";
                        }


                    }
                }

                else if (level == 2) {
                    if (nx == 98 && ny >= 4 && ny <= 16) {
                        if (d == "right") {
                            if (ny <= 10) {
                                nx--;
                                ny--;
                                d = "up";
                            }
                            else {
                                nx--;
                                ny++;
                                d = "down";
                            }
                        }
                        else if (d == "left") {
                            if (ny <= 10) {
                                nx++;
                                ny--;
                                d = "up";
                            }
                            else {
                                nx++;
                                ny++;
                                d = "down";
                            }
                        }
                        else if (d == "up") {


                            nx--;
                            ny++;
                            d = "left";

                        }
                        else if (d == "down") {
                            ny--;
                            nx--;
                            d = "left";
                        }


                    }
                    else if (ny == 10 && nx >= 7 && ny <= 30) {

                        if (d == "up") {
                            if (nx >= 18) {
                                nx++;
                                ny++;
                                d = "right";
                            }
                            else {
                                nx--;
                                ny++;
                                d = "left";
                            }
                        }
                        else if (d == "down") {
                            if (nx >= 18) {
                                nx++;
                                ny--;
                                d = "right";
                            }
                            else {
                                nx--;
                                ny--;
                                d = "left";
                            }
                        }
                        else if (d == "left") {


                            nx++;
                            ny--;
                            d = "right";

                        }
                        else if (d == "right") {
                            ny--;
                            nx--;
                            d = "left";
                        }


                    }
                }
            }

        }

    }

    //Lets write the code to make the snake eat the food
    //The logic is simple
    //If the new head position matches with that of the food,
    //Create a new head instead of moving the tail
    if (nx == food.x && ny == food.y) {
        var tail = { x: nx, y: ny };
        score = score + 10;
        if (score > highestScore) {
            $("#highScore").text("...New High Score!!!...").show();
        }
        bonus++;
        //Create new food
        create_food();
        if (bonus == 3) {//bonus food will come after eating 3 normal food
            bonus = 0;
            bonus_time = 10;

            bonus_food_type = bonus_food_type % 5;//will give value 0-4

            create_bonus_food();


            flag = 1;
        }
    }
    else if (nx == food_bonus.x && ny == food_bonus.y) {
        var tail = { x: nx, y: ny };
        if (bonus_time < 0) bonus_time = 0;

        switch (bonus_food_type) {
            case 0:
            case 1:
                score = score + 10 * bonus_time;
                break;
            case 2://poison
                if (powerSaver == 0) {
                    hitType = "poisonFood";
                    gameover();
                }
                else {
                    powerSaver--;
                    $("#life" + (powerSaver + 1)).hide();
                }
                break;
            case 3://power up
                powerSaver++;
                $("#life" + powerSaver).show();
                break;
            case 4://resize
                //for (l = 0; l < 22;l++)
                // snake_array.pop();
                //Level changer
                changeGameLevel();
                levelchanged = 1;
                break;
        }


        if (score > highestScore) {
            $("#highScore").text("...New High Score!!!...").show();
        }
        food_bonus.x = -1;
        food_bonus.y = -1;
        $("#bottom_msg").hide();
        $("#food_timer").text(15);
        clearInterval(counter);
        bonus_food_type++;
    }
    else {
        var tail = snake_array.pop(); //pops out the last cell
        tail.x = nx; tail.y = ny;
    }
    //The snake can now eat the food.
    if (levelchanged == 1) {
        levelchanged = 0;
        var tail = snake_array.pop();
        tail.x = snake_array[0].x; tail.y = snake_array[0].y;
    }
    snake_array.unshift(tail); //puts back the tail as the first cell

    for (var i = 0; i < snake_array.length; i++) {
        var c = snake_array[i];
        //Lets paint 10px wide cells
        if (i <= snake_array.length - 2 && i >= 1) {
            paint_cell(c.x, c.y, true);
        } else {
            paint_cell(c.x, c.y, false);
        }
    }

    //Lets paint the food


    //paint_cell(food.x, food.y);

    ctx.drawImage(prey_image, food.x * cw, food.y * cw, 20, 20);

    //for bonus
    if (food_bonus.x != -1) {
        drawCircle(ctx, food_bonus.x * cw + 10, food_bonus.y * cw + 10, 10);
        if (flag == 1) {
            flag = 0;
            $("#bottom_msg").show();
            decreaseTimer();
        }
    }

    //Lets paint the score
    var score_text = "Your Score: " + score;

    $("#scoreBoard").html(score_text);

}