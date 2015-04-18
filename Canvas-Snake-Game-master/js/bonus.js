



function create_bonus_food() {
    food_bonus = {
        x: Math.round(Math.random() * (w - cw) / cw),
        y: Math.round(Math.random() * (h - cw) / cw),
    };
    if (food_bonus.y >= 21)
        food_bonus.y = 14;
}

//to draw bonus food
function drawCircle(ctx, x, y, radius) {

    // prepare the radial gradients fill style
    var circle_gradient = ctx.createRadialGradient(x - 3, y - 3, 1, x, y, radius);
    switch (bonus_food_type) {
        case 0:
            circle_gradient.addColorStop(0, "#fff");
            circle_gradient.addColorStop(1, "#ff0");
            break;
        case 1://yellow-points fruite
            circle_gradient.addColorStop(0, "#fff");
            circle_gradient.addColorStop(1, "#ff0");
            break;
        case 2://red-poison fruite
            circle_gradient.addColorStop(0, "#fff");
            circle_gradient.addColorStop(1, "#f00");
            break;
        case 3://blue-power up fruite
            circle_gradient.addColorStop(0, "#fff");
            circle_gradient.addColorStop(1, "#00f");
            break;
        case 4://white-next level fruite
            circle_gradient.addColorStop(0, "#fff");
            circle_gradient.addColorStop(1, "#fff");
            break;
    }

    ctx.fillStyle = circle_gradient;

    // draw the path
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();

    // actually fill the circle path
    ctx.fill();
}



