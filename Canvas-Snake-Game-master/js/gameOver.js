function gameover() {

    clearInterval(gameRepeater);
    mainMusic.pause();
    $("#powerUpBoard").hide();
    if (score > highestScore) {
        localStorage.setItem("SnakeGameHigh", score);
        highestScore = score;
    }



    var goText = document.getElementById("info2");

    //Show the messages
    if (hitType == "wall") {

        goText.innerHTML = msgsWall[Math.floor(Math.random() * msgsWall.length)];

    }
    else if (hitType == "self") {

        goText.innerHTML = msgsSelf[Math.floor(Math.random() * msgsSelf.length)];

    }
    else if (hitType == "poisonFood") {

        goText.innerHTML = msgsPoison[Math.floor(Math.random() * msgsPoison.length)];

    }

    $("#reMenu").show();

}
