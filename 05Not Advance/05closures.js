// function init(){
//     var firstName = "Nilesh";
//     console.log("Hey there");
//     function sayName(){
//         console.log(firstName);
//     }
//     return sayName;     //<---Notice changes here function calling
// }

// var value = init();
// value();



function doAddition(x) {
    return function (y){
        return x + y;
    };
}

var num1 = doAddition(5);
console.log(num1(10));

// ------OR------

console.log(doAddition(5)(4));
