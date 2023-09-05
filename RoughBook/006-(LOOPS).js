let num = 0

//FOR LOOP
for( let i=0; i<5; i++){
    console.log(i+1)
}

//FOR IN

let marks = {
    pramod : 98,
    vinay : 95,
    chandana : 99,
    ambika : 96,
    keerthi : 98
}

for(let a in marks){
    console.log(`Marks of ${a.toUpperCase()} is ${marks[a]}`);
}

//FOR OF

for(let a of "PRAMOD"){
    console.log(a);
}

// WHILE LOOP

while(num<5){
    console.log(num);
    num++;
}

// DO WHILE

do{
    num++;
    console.log(num);
}while(num<5);