$(document).ready(function () {
    
    var rowX = [0, 0, 0];
    var rowO = [0, 0, 0];
    var columnX = [0, 0, 0];
    var columnO = [0, 0, 0];
    var diagonalX = [0, 0, 0];
    var diagonalO = [0, 0, 0];
    var opDiagonalX = [0, 0, 0];
    var opDiagonalO = [0, 0, 0];

    var count = 0;

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
        $('#gameContent').append('<div id="feedback"></div>');

        $('td').on("click", onTileClick)
    }

    function onTileClick(e) {
        if ($(this).is(":empty")) {
            var column = parseInt($(this).attr('id').split('_')[1]);
            var row = parseInt((e.target.parentNode.id).split('_')[1]);
            count++;
            if (count % 2 == 0) {
                $(this).append('<img class="x" src="../Images/x.png" />');

                rowX[row] += 1;
                columnX[column] += 1;

                if (row == column) {
                    diagonalX[row] += 1;
                }
                if (row + column + 1 == 3) {
                    opDiagonalX[row] += 1;
                }
                checkWinX(row, column);
            }
            else {
                $(this).append('<img class="circle" src="../Images/circle.png" />');

                rowO[row] += 1;
                columnO[column] += 1;

                if (row == column) {
                    diagonalO[row] += 1;
                }
                if (row + column + 1 == 3) {
                    opDiagonalO[row] += 1;
                }
                checkWinO(row, column);
            }
        }
    }

    function checkWinX(row, column) {
        var sumDiagonal = 0;
        var sumOpDiagonal = 0;

        for (var i = 0; i < diagonalX.length; i++) {
            sumDiagonal += diagonalX[i];
            sumOpDiagonal += opDiagonalX[i];
        }

        if (rowX[row] == 3 || columnX[column] == 3 || sumDiagonal == 3 || sumOpDiagonal == 3) {
            finalMessage("X", false);
        }
        else if(getCheckDraw()){
            finalMessage("", true);
        }
    }

    function checkWinO(row, column) {
        var sumDiagonal = 0;
        var sumOpDiagonal = 0;

        for (var i = 0; i < diagonalO.length; i++) {
            sumDiagonal += diagonalO[i];
            sumOpDiagonal += opDiagonalO[i];
        }

        if (rowO[row] == 3 || columnO[column] == 3 || sumDiagonal == 3 || sumOpDiagonal == 3) {
            finalMessage("O", false);
        }
        else if(getCheckDraw()){
            finalMessage("", true);
        }
    }

    function getCheckDraw(){
        var ret = true;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if($('#tr_' + i + ' #td_' + j).is(":empty")){
                    return false;
                }
            }
        }
        return true;
    }

    function finalMessage(player, draw) {
        setNewVariables();
        $('td').off("click", onTileClick);
        if(draw){
            $('#feedback').append("It's a draw!<br><br><div id='replay' class='button'>RESTART</div>");
        }
        else{
            $('#feedback').append("Player " + player + " has won!<br><br><div id='replay' class='button'>RESTART</div>");
        }
        $('#replay').on("click", function () {
            game();
        });
    }

    function setNewVariables() {
        rowX = [0, 0, 0];
        rowO = [0, 0, 0];
        columnX = [0, 0, 0];
        columnO = [0, 0, 0];
        diagonalX = [0, 0, 0];
        diagonalO = [0, 0, 0];
        opDiagonalX = [0, 0, 0];
        opDiagonalO = [0, 0, 0];
    }

    startScreen();

    /*Im sorry for your 640 lines of code, which has been modified to a better version*/
});