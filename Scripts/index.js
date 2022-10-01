$(document).ready(function () {
    $(".gamesection").hover(function(){
        $(this).children().css("transition", "0.5s");
        $(this).children().css("transform", "scale(1.1)");
    }, function(){
        $(this).children().css("transition", "1s");
        $(this).children().css("transform", "scale(1)");
    });
});