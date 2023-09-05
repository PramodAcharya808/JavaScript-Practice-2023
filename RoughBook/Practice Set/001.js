//Using logical operators, find weather the age of a person lies between 10 and 20

const prompt = require('prompt-sync')();

let age = Number.parseInt(prompt("Enter the age: "));

if(age>=10 && age<=20){
    console.log(`Your age is ${age}. It is between 10 and 20`);
}
else{
    console.log(`Your age is ${age}. Its is not in the given range`);
}