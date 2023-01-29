var name = "Nilesh";
console.log("Line number 2", name);

function sayName(){
    // var name = "Mr. Nilesh";
    console.log("Line number 7", name);

    function sayNameTwo(){
        // var name = "Mr. NK";
        console.log("Line number 11", name);
    }

    sayNameTwo();
}

sayName();
