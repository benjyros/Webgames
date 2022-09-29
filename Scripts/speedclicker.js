$(document).ready(function () {
    
    var clicks = 0;

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
        $("#gameContent").append('<div id="start"></div>');
        $("#start").append(
            '<div id="startScreen"><div><h3>Speedclicker</h3><p>As soon the screen turns to light purple, click as often as you can.</p><br><h5>click to start</h5></div></div>'
        );

        $("#start").click(function () {
            play();
        });
    }

    function play() {
        $("#gameContent").empty();
        $("#gameContent").append('<div id="game"></div>');
        $("#game").append(
            '<div id="play"></div>'
        );
        $("#play").append(
            '<h4 id="countdown">Timer: 10.00</h4>'
        );
        $("#play").append(
            '<h4 id="currentClicks">Score: 0</h4>'
        );
        $("#play").append(
            '<h4 id="clicks">Clicks: 0</h4>'
        );

        var countdown = 800;
        var timer = 0;

        var timerId = setInterval(function () {
            countdown--;
            timer++;
            if (countdown <= 0) {
                clearInterval(timerId);
                end();
            }
            document.getElementById("countdown").textContent = "Countdown: " + (countdown / 100).toFixed(2);
            document.getElementById("currentClicks").textContent = "Current clicks/s: " + (clicks / (timer / 100)).toFixed(2);
            document.getElementById("clicks").textContent = "Clicks: " + clicks;
        }, 10);

        $("#game").click(function () {
            clicks++;
        });
    }

    function end() {
        $("#game").empty();
        $("#game").append(
            '<div id="end"><div><img src="../Images/finish.png" alt="" id="finishFlag"><h4>You did ' + (clicks / 8) + ' clicks/s</h4><h6>total of ' + clicks + ' clicks in 8 secs</h6><hr></div></div>'
        );
        $("#gameContent").append("<div id='replay' class='button'>RESTART</div>");

        $('#replay').on("click", function () {
            clicks = 0;
            game();
        });
    }
});