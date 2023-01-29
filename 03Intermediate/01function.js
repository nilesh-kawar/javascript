function sayHello(name){
    console.log("Hey Nilesh, Whats up?");
    console.log(`Hey ${name}, Whats up?`);
}
sayHello("kawar");

function sayNamastey(){
    return "Namastey India";
}
//Method 1 to print return function;
console.log(sayNamastey());  

//Method 2 to print return function;
var greeting = sayNamastey();
console.log(greeting); 