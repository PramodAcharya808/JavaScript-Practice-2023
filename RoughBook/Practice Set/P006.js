//Write a program to print the marks of students in an object using FOR LOOP

let marks = {
    pramod : 95,
    chandana : 96,
    ambika : 96,
    keerthi : 95
}

for (let i=0 ; i<Object.keys(marks).length ; i++){
    console.log(`Marks of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}