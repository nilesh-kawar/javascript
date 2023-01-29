const User = require("./06classjs.js")

const nilesh = new User("Neel", "nil@g.c");

console.log(nilesh.getInfo());
nilesh.enrollCourse("React Js");
nilesh.enrollCourse("Angulart Js");
// console.log(nilesh.getCourseList());

// Loop through array 

let course = nilesh.getCourseList();
console.log(course);

course.forEach(c => console.log("Your course name", c));