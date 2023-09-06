//Print marks of student in an OBJECT using FOR IN LOOP 

let marks = {
    Pramod : 95,
    Chandana : 96,
    Ambika : 98,
    Keerthi : 96
}

for (let i in marks){
    console.log(`Marks of ${i} is ${marks[i]}`);
}