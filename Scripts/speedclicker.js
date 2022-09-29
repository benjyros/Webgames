let clicks = 0;

startScreen();

function startScreen() {
    $("#gameContent").empty();
    $("#gameContent").css("background-color", "purple");
    $("#gameContent").append(
        "<div id=startScreen><div><h3>Speedclicker</h3><p>As soon the screen turns to light purple, click as often as you can.</p><h5>click to start</h5></div></div>"
    );

    $("#startScreen").mousedown(function () {
        play();
    });
}

function play() {
    $("#gameContent").empty();
    $("#gameContent").css("background-color", "#B82DFB");
    $("#gameContent").css("border", "2px solid purple");
    $("#gameContent").append(
        "<div id=play><div><h4>CLICK</h4></div></div>"
    );

    setTimeout(end, 5000);

    $("#play").mousedown(function () {
        clicks++;
        $("#cs").text(clicks);
    });

}

function end() {
    $("#gameContent").empty();
    $("#gameContent").css("background-color", "purple");
    $("#gameContent").append(
        "<div id=end><div><img src='../Content/finish.png' alt='' id='finishFlag'><h4>You did " + (clicks / 5) + " clicks/s</h4><h6>total of " + clicks + " clicks in 5 secs</h6><hr><button type='button' class='btn' id='button'>click to restart</button></div></div>"
    );

    //disabling the button for a sec
    let button = document.getElementById("button");
    button.disabled = true;
    setTimeout(()=>{
        button.disabled = false;
        console.log('Button Activated')}, 1000)

    $("button").mousedown(function () {
        clicks = 0;

        startScreen();
    });
}