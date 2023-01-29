var returnMax = Math.max(3, 2, 7, 9, 5, 1, 8);
// console.log(returnMax);

var myObj = {}; //You can define empty object

Object.assign(myObj, {a: 1, b: 2, c: 3}, {z: 9, y: 8, x: 7}, {m: 4, n: 5, o: 6}); //You can assign object like this
// console.log(myObj);


function sumOne(a, b){
    return a + b;
}

var myArr = [6, 4]; //Kya hum array ko function ke parameter me pass kr sakte hai??
// lets try
// console.log(sumOne(myArr)     //  <------we cant define like this
// console.log(sumOne(myArr[0], myArr[1]));    //method one simple
// console.log(sumOne(...myArr));   //using spread method 

function sumTwo(...args){
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

// console.log(sumTwo(2, 3, 1, 1, 1)); //we can pass as many parameters as we want function will return sum of all parameters

function sumTProd(a,b,...args){
    let sum = 0;
    let prod = a * b;
    for (const arg of args) {
        sum += arg;
    }
    return [prod, sum]; //we can return values in array or string anything
}

console.log(sumTProd(2, 3, 1, 1, 1));   //output: [6, 3] It will give 2, 3 output and rest sum

