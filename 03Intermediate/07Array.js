// Method 1 to define Array
var country = ["India", "USA", "Japan", "UK", "PKMKB"]; //we can define Array using [] brakets

// Method 2 to define Array
var states = new Array ("Maharashtra", "Delhi", "Punjab", "Gujarat", "Goa"); //We can define Array usinf keyword "new Array";

// Print an Array
console.log(country);
console.log(states);

// Print specific value
console.log(country[0]);    //Array always starts from zero

//length of an Array
console.log(states.length);

// Change specific value from Array
states[4] = "Karnataka";
console.log(states);       //Goa to Karnataka



var user = ["Nilesh Kawar", "nilesh@gmail.com", 22, true];
console.log(user);

// Remove last element of an Array
user.pop();
console.log(user);

// Remove First element of an Array
user.shift();
console.log(user);

// Add New element at starting of Array
user.unshift("Mr. Niel");
console.log(user);

// Get index Number
console.log(user.indexOf(22));
console.log(user.indexOf("Mr. Niel"));
console.log(user.indexOf("hehehe")); //not in an Array
console.log(user.indexOf("abcd")); //not in an Array

// Seperate Characters
console.log(Array.from("NILESH"));




