var user = {
    firstName : "Nilesh",
    lastName : "Kawar",
    role : "user",
    loginCount : 33,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName); //Add new course to array push method
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    getInfo : function () {
        return `            First Name : ${this.firstName},
            Last Name : ${this.lastName},
            User Role : ${this.role},
            User Login Count : ${this.loginCount},
            User Course List : ${this.courseList},
            Total Course Count : ${this.getCourseCount()}`
    }
};

console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React JS");
console.log(user.getCourseCount());

user.buyCourse("Angular JS");
console.log(user.getCourseCount());

console.log(user.getInfo());

