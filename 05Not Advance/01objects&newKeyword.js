var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Total course count is : ${courseCount}`);
    };
};

var nilesh = new User("Nilesh", 1);
// console.log(nilesh);
// nilesh.getCourseCount();

var niel = new User("Niel", 2);
// console.log(niel);
// niel.getCourseCount();

console.log(nilesh.firstName);
// ----OR---- //
User.prototype.getFirstName = function () {
    console.log(`Your First Name is : ${this.firstName}`);
}
nilesh.getFirstName();



