// Print "TRY AGAIN" until user presses 0

const prompt = require('prompt-sync')();

let num = 1
while (num!=0){
    num = Number.parseInt(prompt("Press 0 to exit"));
    console.log("Please Try Again !");
}