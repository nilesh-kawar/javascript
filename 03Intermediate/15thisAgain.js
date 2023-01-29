console.log(this);

var user = {
    firstName: "Nilesh",
    courseCount: 2,
    getCourseCount: function (){    //This function is Object Function
        console.log("Line No. 7 ", this);      //this holds the whole object

        function sayHello(){
            console.log("Hello from Regular Function");
            console.log("Line 11 ", this);  //For all regular function call THIS holds window object
        }
        sayHello();
    }
}

user.getCourseCount();    //This type of function called object function call

// Regular Function:
// function sayHello(){
//     console.log("Hello");
// }

// sayHello();     //This type of function called Regular function call