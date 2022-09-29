let clicks = 0;

startScreen();

function startScreen() {
    $("#gameContent").append('<div id="gameTitle">SPEEDCLICKER</div><div id="startButton" class="button">BEGIN</div>');
    $("#startButton").on("click", function () {
        game();
    });
}

function game() {
    $("#gameContent").empty();
    $("#gameContent").css("background-color", "#eb8faf");
    $("#gameContent").append('<div id="game"></div>');
    $("#game").append(
        '<div id="startScreen"><div><h3>Speedclicker</h3><p>As soon the screen turns to light purple, click as often as you can.</p><h5>click to start</h5></div></div>'
    );

    $("#startScreen").mousedown(function () {
        play();
    });
}

function play() {
    $("#game").empty();
    $("#game").append(
        '<div id="play"><div><h4>CLICK</h4></div></div>'
    );

    setTimeout(end, 8000);

    $("#play").mousedown(function () {
        clicks++;
        $("#cs").text(clicks);
    });

}

function end() {
    $("#game").empty();
    $("#game").append(
        '<div id="end"><div><img src="../Images/finish.png" alt="" id="finishFlag"><h4>You did ' + (clicks / 8) + ' clicks/s</h4><h6>total of ' + clicks + ' clicks in 8 secs</h6><hr></div></div>'
    );
    $("#gameContent").append("<div id='replay' class='button'>RESTART</div>");

    //disabling the button for a sec
    $('#replay').on("click", function () {
        game();
    });
}