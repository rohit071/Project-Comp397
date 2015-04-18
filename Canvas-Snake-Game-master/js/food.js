//Lets create the food now
function create_food() {
    food = {
        x: Math.round(Math.random() * (w - cw) / cw),
        y: Math.round(Math.random() * (h - cw) / cw),
    };
    if (food.y >= 21)
        food.y = 14;

    changeFoodLocationIfcollideWall(1);//1 for simple food and 2 for bonus food
}

function changeFoodLocationIfcollideWall(foodType) {
    if (level == 0) {
        return;
    }
    var locX, locY;
    if (foodType == 1) {
        locX = food.x;
        locY = food.y;
    } else {
        locX = food_bonus.x;
        locY = food_bonus.y;
    }
    //checking whether collide with snake
    if (check_collision(locX, locY, snake_array))//means when collide
    {
        if (foodType == 1)
            create_food();
        else
            create_bonus_food();
        return;
    }
    //if( check_collision_wall(locX, locY)

    //if level is either 1 or 2
    if (locX == 18) {
        if (locY >= 4 && locY <= 16)//colliding with wall
        {
            locX = Math.round(Math.random() * 37);
            loxY = Math.round(Math.random() * 3);
        }
        if (foodType == 1) {
            food.x = locX;
            food.y = locY;
        } else {
            food_bonus.x = locX;
            food_bonus.y = locY;
        }
        return;//As now it will not collide in any level case
    }

    if (level == 2) {
        if (locY == 10) {
            if (locX >= 7 && locX <= 30)//colliding with wall
            {
                locX = Math.round(Math.random() * 6);
                loxY = Math.round(Math.random() * 20);
            }
            if (foodType == 1) {
                food.x = locX;
                food.y = locY;
            } else {
                food_bonus.x = locX;
                food_bonus.y = locY;
            }
            return;
        }
    }
}