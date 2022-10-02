$(document).ready(function () {

    var gametitle = new Array;
    var gameinfo = new Array;

    $.getJSON("Datas/gameslist.json", function (data) {
        for (i = 0; i < data.gameslist.length; i++) {
            gametitle[i] = data.gameslist[i].gametitle;
            gameinfo[i] = data.gameslist[i].gameinfo;
        }
        buildSections();
    })

    function buildSections(){
        buildGameSection();
        buildDemoSection();
        giveHover();
    }

    function buildGameSection(){
        $(".main").append('<div id="gamesection"></div>');
        $("#gamesection").append('<h1 class="sectiontitle">Twäwis-Games</h1><hr>');
        $("#gamesection").append('<section id="section" class="row">');

        for(var i = 0; i < gametitle.length; i++){
            $("#section").append(
                '<a class="col-sm gamesection" href="Views/' + gametitle[i].toLowerCase() + '.html">'
                    + '<img class="gameimg" src="Images/' + gametitle[i].toLowerCase() + '.png" alt="' + gametitle[i] + '"/><hr>'
                    + '<h3 class="gametitle">' + gametitle[i] + '</h3>'
                    + '<p>' + gameinfo[i] + '</p>'
                + '</a>'
            );
        }
    }

    function buildDemoSection(){
        $(".main").append('<div id="demosection"></div>');
        $("#demosection").append('<h1 class="sectiontitle">Twäwis-Demos</h1><hr>');

        for(var i = 0; i < gametitle.length; i++){
            $("#demosection").append(
                '<section class="infosection jumbotron">'
                    + '<div class="title">'
                        + '<h1 class="demotitle">' + gametitle[i].toUpperCase() + '</h1><hr>'
                    + '</div>'
                    + '<video class="video" width="650" height="500" controls>'
                        + '<source src="Videos/' + gametitle[i].toLowerCase() + '.mp4" type="video/mp4">'
                        + '<source src="Videos/' + gametitle[i].toLowerCase() + '.ogg" type="video/ogg">'
                        + '<source src="Videos/' + gametitle[i].toLowerCase() + '.webm" type="video/webm">'
                        + 'Your browser does not support the video tag.'
                    + '</video>'
                + '</section>'
            );
        }
    }

    function giveHover(){
        $(".gamesection").hover(function(){
            $(this).children().css("transition", "0.5s");
            $(this).children().css("transform", "scale(1.1)");
        }, function(){
            $(this).children().css("transition", "1s");
            $(this).children().css("transform", "scale(1)");
        });
    }
});