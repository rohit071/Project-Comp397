$(function () {

    // prepare layer 1 (bg)
    var canvas_bg = document.getElementById("bg");
    layer1 = canvas_bg.getContext("2d");


    // prepare layer 2 (game)
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    layer2 = ctx;



    // draw a splash screen when loading the game background
    // This is for safety purpose if someone click at once start link of welcome page before the game background is loaded

    var bg_gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    bg_gradient.addColorStop(0, "#cccccc");
    bg_gradient.addColorStop(1, "#efefef");
    ctx.fillStyle = bg_gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // draw the loading text

    ctx.font = "34px 'Arial'";
    ctx.textAlign = "center";
    ctx.fillStyle = "#333333";
    ctx.fillText("loading...", ctx.canvas.width / 2, canvas.height / 2);


    // load the background image

    bg_image = new Image();
    bg_image.onload = function () {

        drawLayerBG();
        init();
    }

    bg_image.onerror = function () {

        console.log("Error loading the image.");
    }

    bg_image.src = "images/board.png";


});

function changeGameLevel() {
    if (level == 2) {
        gameover();
    } else {
        level++;
        $("#levelNum").text(level + 1);
        clearInterval(gameRepeater);
        init();

        gameRepeater = setInterval(gameloop, gameLevel[level].speed);

    }
}
// draw graphics that related to the bg canvas
function drawLayerBG() {
    var ctx = layer1;
    clear(ctx);
    // draw the image background
    ctx.drawImage(bg_image, 0, 0);

}
