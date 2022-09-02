$(document).ready(function () {
    var letter; 
    var words = [];

    let step = 0;

    const hangman = document.getElementById('hangman').getContext("2d");

    drawLines();

    function draw(part) {
        switch (part) {
            //bottom
            case (1):
                hangman.strokeStyle = "black";
                hangman.lineWidth = 5;
                hangman.beginPath();
                hangman.moveTo(0, 245);
                hangman.lineTo(180, 245);
                hangman.stroke();
                break;
            //pole
            case (2):
                hangman.beginPath();
                hangman.moveTo(30, 245);
                hangman.lineTo(30, 5);
                hangman.stroke();
                break;
            //top
            case (3):
                hangman.beginPath();
                hangman.moveTo(10, 15);
                hangman.lineTo(120, 15);
                hangman.stroke();
                break;
            //rope
            case (4):
                hangman.beginPath();
                hangman.moveTo(110, 15);
                hangman.lineTo(110, 30);
                hangman.stroke();
                break;
            //head
            case (5):
                hangman.beginPath();
                hangman.arc(110, 55, 25, 0, Math.PI * 2, true);
                hangman.closePath();
                hangman.stroke();
                break;
            //spine
            case (6):
                hangman.beginPath();
                hangman.moveTo(110, 80);
                hangman.lineTo(110, 160);
                hangman.stroke();
                break;
            //arm left
            case (7):
                hangman.beginPath();
                hangman.moveTo(110, 90);
                hangman.lineTo(90, 130);
                hangman.stroke();
                break;
            //arm right
            case (8):
                hangman.beginPath();
                hangman.moveTo(110, 90);
                hangman.lineTo(130, 130);
                hangman.stroke();
                break;
            //leg left
            case (9):
                hangman.beginPath();
                hangman.moveTo(110, 160);
                hangman.lineTo(90, 220);
                hangman.stroke();
                break;
            //leg right
            case (10):
                hangman.beginPath();
                hangman.moveTo(110, 160);
                hangman.lineTo(130, 220);
                hangman.stroke();
                break;
        }
    }

    function drawLines() {
        placeholder = document.getElementById("placeholder");
        solution = document.createElement("ul");

        var wordtest = getFile();
        alert(wordtest + "teeeeeeest");
        words = getFile().split(',');
        console.log(words + "hallo0oooo");
        alert(words);
        /*
        let rndNum = Math.floor(Math.random() * words.length);
        var word = words[rndNum];

        for (var i = 0; i < word.length; i++) {
            solution.setAttribute("id", "solution");
            letter = document.createElement("li");
            letter.setAttribute("class", "letter");
            letter.innerHTML = "_";
            placeholder.appendChild(solution);
            solution.appendChild(letter);
        };
        */
    }

    function getFile(){
        var wordlist;
        $.get("../Data/wordlist.txt", function (data) {
            wordlist = data;
            alert(wordlist);
            return data;
        }, "text");
        return wordlist;
    }

    $("#enterLetter").click(function () {
        let letter = $("#letter").val();

        if (letter != "" && checkLetter(letter)) {
            $("#letter").val("");
            step++;
            draw(step);
        }
    });

    function checkLetter(letter) {
        return /^[A-Za-z]*$/.test(letter);
    }
});

