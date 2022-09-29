$(document).ready(function () {
    var rowX = new Array();
    var rowO = new Array();
    var columnX = new Array();
    var columnO = new Array();
    var diagonalX = new Array();
    var diagonalO = new Array();
    var opDiagonalX = new Array();
    var opDiagonalO = new Array();

    startScreen();

    function startScreen() {
        $("#gameContent").append('<div id="gameTitle">TIC TAC TOE</div><div id="startButton" class="button">BEGIN</div>');
        $("#startButton").on("click", function () {
            game();
        });
    }

    function game() {
        $('#gameContent').empty();
        $('#gameContent').append('<table id="tictactoe"></table>');
        for (var i = 0; i < 3; i++) {
            $('#tictactoe').append('<tr id="tr_' + i + '"></tr>');
            for (var j = 0; j < 3; j++) {
                $('#tr_' + i).append('<td id="td_' + j + '"></td>');
            }
        }

        $('td').on("click", onTileClick)
        /*

        $('#enterLetter').on("click", onBtnClick);
        */
    }

    function onTileClick(e) {
        if (!won) {
            if ($(this).is(":empty")) {
                var column = $(this).attr('id').split('_')[1];
                var row = (e.target.parentNode.id).split('_')[1];
                alert(row + ", " + column);
                count++;
                if (count % 2 == 0) {
                    $(this).append('<img class="x" src="../Images/x.png" />');

                    rowX[row] += 1;
                    columnX[column] += 1;

                    if(row == column){
                        diagonalX[row] += 1;
                    }
                    if(row + column + 1 == 3){
                        opDiagonalX[row] += 1
                    }
                }
                else {
                    $(this).append('<img class="circle" src="../Images/circle.png" />');

                    rowO[row] += 1;
                    columnO[column] += 1;
                    
                    if(row == column){
                        diagonalO[row] += 1;
                    }
                    if(row + column + 1 == 3){
                        opDiagonalO[row] += 1
                    }
                }
            }
        }

        

        $('td').off("click", onRowClick)
    }

    var count = 0;
    let won = false;

    $("td").click(function () {
        //changing between

        if (
            //fields with circle
            $("#field1").has(".circle").length &&
            $("#field2").has(".circle").length &&
            $("#field3").has(".circle").length
        ) {
            $("#field1").css("background-color", "green");
            $("#field2").css("background-color", "green");
            $("#field3").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });

        } else if (
            $("#field4").has(".circle").length &&
            $("#field5").has(".circle").length &&
            $("#field6").has(".circle").length
        ) {
            $("#field4").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field6").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field7").has(".circle").length &&
            $("#field8").has(".circle").length &&
            $("#field9").has(".circle").length
        ) {
            $("#field7").css("background-color", "green");
            $("#field8").css("background-color", "green");
            $("#field9").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field1").has(".circle").length &&
            $("#field4").has(".circle").length &&
            $("#field7").has(".circle").length
        ) {
            $("#field1").css("background-color", "green");
            $("#field4").css("background-color", "green");
            $("#field7").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field2").has(".circle").length &&
            $("#field5").has(".circle").length &&
            $("#field8").has(".circle").length
        ) {
            $("#field2").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field8").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field3").has(".circle").length &&
            $("#field6").has(".circle").length &&
            $("#field9").has(".circle").length
        ) {
            $("#field3").css("background-color", "green");
            $("#field6").css("background-color", "green");
            $("#field9").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field1").has(".circle").length &&
            $("#field5").has(".circle").length &&
            $("#field9").has(".circle").length
        ) {
            $("#field1").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field9").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field7").has(".circle").length &&
            $("#field5").has(".circle").length &&
            $("#field3").has(".circle").length
        ) {
            $("#field7").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field3").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>Circle won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            //fields with x
            $("#field1").has(".x").length &&
            $("#field2").has(".x").length &&
            $("#field3").has(".x").length
        ) {
            $("#field1").css("background-color", "green");
            $("#field2").css("background-color", "green");
            $("#field3").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field4").has(".x").length &&
            $("#field5").has(".x").length &&
            $("#field6").has(".x").length
        ) {
            $("#field4").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field6").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field7").has(".x").length &&
            $("#field8").has(".x").length &&
            $("#field9").has(".x").length
        ) {
            $("#field7").css("background-color", "green");
            $("#field8").css("background-color", "green");
            $("#field9").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field1").has(".x").length &&
            $("#field5").has(".x").length &&
            $("#field9").has(".x").length
        ) {
            $("#field1").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field9").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field3").has(".x").length &&
            $("#field5").has(".x").length &&
            $("#field7").has(".x").length
        ) {
            $("#field3").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field7").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field1").has(".x").length &&
            $("#field4").has(".x").length &&
            $("#field7").has(".x").length
        ) {
            $("#field1").css("background-color", "green");
            $("#field4").css("background-color", "green");
            $("#field7").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field2").has(".x").length &&
            $("#field5").has(".x").length &&
            $("#field8").has(".x").length
        ) {
            $("#field2").css("background-color", "green");
            $("#field5").css("background-color", "green");
            $("#field8").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field3").has(".x").length &&
            $("#field6").has(".x").length &&
            $("#field9").has(".x").length
        ) {
            $("#field3").css("background-color", "green");
            $("#field6").css("background-color", "green");
            $("#field9").css("background-color", "green");

            won = true;

            $(".inner-container")
                .children()
                .css({ opacity: 0.6 })
                .end()
                .css({ opacity: 0.6 });

            $("<div id='wonDisplay'><p>X won<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#wonDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        } else if (
            $("#field1").has("img").length &&
            $("#field2").has("img").length &&
            $("#field3").has("img").length &&
            $("#field4").has("img").length &&
            $("#field5").has("img").length &&
            $("#field6").has("img").length &&
            $("#field7").has("img").length &&
            $("#field8").has("img").length &&
            $("#field9").has("img").length
        ) {
            $(
                "#field1, #field2, #field3, #field4, #field5, #field6, #field7, #field8, #field9"
            ).css("background-color", "pink");

            $("<div id='drawDisplay'><p>It's a draw !<p></div>")
                .css({
                    position: "absolute",
                    width: "60%",
                    height: "35%",
                    background: "grey",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "3px solid black",
                })
                .appendTo($("#gameContent").css("position", "relative"));

            $("<button type='button' class='btn btn-dark restartBtn smol'>Restart</button>").appendTo(
                $("#drawDisplay")
            );

            $(".restartBtn").click(function () {
                location.reload(true);
            });
        }
    });
});
