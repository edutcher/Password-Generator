// Global temp Array that will hold the characters chosen to pull from
var tempArray = [""];

// Add lowercase letters to our temp array
function addLower() {
    tempArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
}

// Add uppercase letter to our temp array
function addUpper() {
    tempArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
}

// Add numbers to our temp array
function addNumbers() {
    tempArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
}

// Add special characters to our temp Array
function addSpecial() {
    tempArray.push(" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ",", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~")
}

function generatePass() {
    // empty out any data in the password and temp Array
    var pass = ""
    tempArray = [""];

    // Check to see if checkboxes are marked, if so add their characters to the temp Array
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

    // Create the number of random characters requested by creating a random number and using that tempArray value
    for (var i = 0; i < document.getElementById("numChars").value; i++) {
        var randnum = Math.floor(Math.random() * tempArray.length);

        pass = pass + tempArray[randnum];
    }

    document.getElementById("passArea").innerHTML = pass;
}