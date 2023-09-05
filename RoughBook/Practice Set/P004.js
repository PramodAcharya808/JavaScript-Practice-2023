//Find weather the numebr divisible by 2 OR 3

let a = 9
// console.log(a%2);
if((a%2==0)&&(a%3==0)){
    console.log("The Number is divisible is both 2 and 3");
}
else if(a%2==0){
    console.log("The Number is divisble by 2")
}
else if(a%3==0){
    console.log("The Number is divisible by 3");
}
else{
    console.log('Not Divisible by either by 2 and 3');
}
