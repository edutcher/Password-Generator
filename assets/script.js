var tempArray = [""];

function addLower() {
    tempArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
}

function addUpper() {
    tempArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
}

function addNumbers() {
    tempArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
}

function addSpecial() {
    tempArray.push(" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ",", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~")
}

function generatePass() {

    var pass = ""
    tempArray = [""];

    if (document.getElementById("wantLower").checked) {
        addLower();
    }

    if (document.getElementById("wantUpper").checked) {
        addUpper();
    }

    if (document.getElementById("wantNumbers").checked) {
        addNumbers();
    }

    if (document.getElementById("wantSpecial").checked) {
        addSpecial();
    }

    for (var i = 0; i < document.getElementById("numChars").value; i++) {
        var randnum = Math.floor(Math.random() * tempArray.length);

        pass = pass + tempArray[randnum];
    }

    console.log(pass);

    document.getElementById("passArea").innerHTML = pass;
}