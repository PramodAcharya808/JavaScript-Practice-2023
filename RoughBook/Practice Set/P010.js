console.log("Pra\"mod".length);

// Include String function

let str1 = "Hello world, this is PRAMOD";
let str2 = str1.includes("PRAMOD");
console.log(str2);

// Startswith String function

let str3 = str1.startsWith("Hello");
console.log(str3);


// Endswith String function

let str4 = str1.endsWith("PRAMOD");
console.log(str4);


// Comvert givern string to lowercase

let str5 = "PRAMOD";
console.log(str5.toLowerCase());

//Extract the amount frm "Please give us Rs 1000"

let str6 = "Please give us Rs 1000";
console.log(str6.slice(18,23));

// Try to change 4th character of a string. Is it possible ?

str5[4] = "P"; // Not possible to modifiy the same string, as Strings are Immutable.
console.log(str5[4]); 