let a = 10
let b = 20
let c = 30

function Avg (x, y){
    return x + y /2; //USE Math.round(X+Y/2) TO PRINT ROUND OF VALUE
}

console.log(Avg(a,b));
console.log(Avg(a,c));
console.log(Avg(c,b));

// Another way to create the same is function using ARROW FUNCTION

console.log();

let AvgNum = (x , y) =>{
    return  x+y/2;
}

console.log(AvgNum(a,b));
console.log(AvgNum(a,c));
console.log(AvgNum(c,b));