//Demonstrate use of SWITCH CASE

const prompt = require('prompt-sync')();
console.log("Select any 1 fruite\n1) Apple\n2) Mango\n3) Banana\n4) Pineapple\n");

let opt = Number.parseInt(prompt());

switch (opt){
    case 1:{
        console.log(`You have selected APPLE`);
        break;
    }
    case 2:{
        console.log(`You have selected MANGO`);
        break;
    }
    case 3:{
        console.log(`You have selected BANANA`);
        break;
    }
    case 4:{
        console.log(`You have selected PINEAPPLE`);
        break;
    }
    default: console.log("Incorrect selection....!");
}
