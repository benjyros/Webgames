$(document).ready(function () {
    $(".menuitem").hover(function(){
        $(this).css("transition", "0.2s");
        $(this).css("transform", "scale(1.05)");
    }, function(){
        $(this).css("transition", "0.5s");
        $(this).css("transform", "scale(1)");
    });
});