// fill Array
var testArray = [2, 4, 6, 3, 1, 5, 9, 8];
console.log(testArray.fill("n", 2, 5)); 
//      Here--> "n" is the value to replace
//               2 is the postion or index number to start
//               5 is the postion or index number to end


//Filter Array
var randomNum = [22, 45, 65, 14, 55, 87, 91, 72];
var myNumber = randomNum.filter( (num) => num != 55 );  
//It will filter an Array and check condtion we used Arrow function here
console.log(myNumber);


// Slice Array
var users = ["Tim", "Tom", "Sam", "Dam", "Gam"];
console.log(users.slice(2, 4));
// Slice actually slice or cut an array just like cake slice
// Here 2 is inclusive value and 4 is exclusive value
// so starting from index no 2 and end before index no 4 bcz 4 is exclusive value 

// Splice Array
users.splice(1, 3, "Hello", "Bye");
//Here splice means cut from array
//1 is starting point index no
// But here 3 is not End point or Exclusive its count number
// here Start from 1 and count 3 from there and cut them out and insert Hello 
console.log(users);