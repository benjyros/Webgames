$(document).ready(function () {
    $(".buttonlink").click(function () {
        var win;
        switch($(this).attr("id")){
            case "benjy":
                window.open('https://github.com/benjyros', '_blank');
                break;
            case "ju":
                window.open('https://github.com/JHartmann-ims', '_blank');
                break;
            case "andrus":
                window.open('https://github.com/aMaterazzo-ims', '_blank');
                break;
        }
        win.focus();
    })
});