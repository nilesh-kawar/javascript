var mobile = {
    name  : "Apple Iphone XR",
    color : "Black, Red, Yellow, Blue, Coral, White",
    display : "6.1 inches LCD Display", 
    mainCamera : "12 MP",
    selfieCamera : "7 MP",
    price : 47500,
    released : true
};


console.log(mobile);
console.log(mobile.name); //prefered
console.log(mobile["name"]); //or

console.log(mobile.price); //before update price
mobile.price = 48000;  //update price
console.log(mobile.price); //after update price

console.log(mobile);