var isEven = function(element){
    // if (element % 2 === 0) {
    //     return true
    // }
    // OR---->

    return (element % 2 === 0); //Whole if else in one line
}

// Method 3 of writting Function using an Arrow .

var isEvenArrow = (element) =>{
    return (element % 2 === 0); //if you remove Return keyword it will give "Undefined" Error
}

var isEvenArrow2 = (element) =>(
     (element % 2 === 0) //you can use () instead of {} to remove return 
);

// ----------------
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0)); //Scan every element an check condtion
console.log(result);
// ----------------

console.log(isEven(2));
console.log(isEvenArrow(4));
console.log(isEvenArrow2(6));
console.log(isEvenArrow2(5));