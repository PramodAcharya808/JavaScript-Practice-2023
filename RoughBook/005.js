const prompt = require('prompt-sync')();
let a = prompt("First Name: ")
let b = prompt("Last Name: ")
console.log(a+" "+b);

let c =prompt("Enter your age: ")
console.log(typeof c);
c = Number.parseInt(c)
console.log(typeof c);

if (c > 18){
    alert("This a valid age")
}

