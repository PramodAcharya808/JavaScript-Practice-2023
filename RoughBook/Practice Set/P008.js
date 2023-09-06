// Print "TRY AGAIN" until user presses 0

const prompt = require('prompt-sync')();

do {
    var num = Number.parseInt(prompt("Press 0 to exit: "));
    console.log("TRY AGAIN !");
}
while (num != 0)