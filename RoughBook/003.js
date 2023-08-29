//Practice-Set-001

//Create a String variable and try to add a number to it
let names = "Pramod"
names = names + 100
console.log(names) //It concatinates the string with the number trying to add

//Use the TYPEOF function to find the datatype of the STRING above
console.log(typeof(names)) //It gives output as STRING

//Create a CONST object and try to modify it to hold a number
const test = {
    "Mango" : "very tasty",
    "Apple" : 120
};

test["Mango"] = 12
console.log(test["Mango"]) //It can change the data which was inside the Const Object in outside of the object Block evn thought the OBJECT IS CONST


//Create a word-meaning dictionary of 5 words 
const dictionary = {
    "Book" : "Its a reference material to gain knowledge on any related topic",
    "Apple" : "An apple a day keeps the doctor away",
    "2017" : "We can remember about the demonatization",
    "Laptop" : "A portable machine which is so powerfull that it flies high"
};

console.log(dictionary["Book"])