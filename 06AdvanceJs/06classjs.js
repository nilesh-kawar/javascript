class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];       //with the use of # you can make private varibale 

    enrollCourse(courseName){               //this is Setter (Setter means you can set information through parameter)
        this.#courseList.push(courseName);
    }

    getCourseList(){                //this is Getter (Getter means you can get info some private info.)
        return this.#courseList;
    }

    getInfo(){
        return{ name: this.name, email: this.email};
    }

}

module.exports = User;

const neel = new User("neel", "neel@ni.com");
console.log(neel.getInfo());
neel.enrollCourse("Javascript");
console.log(neel.getCourseList());
console.log(neel.courseList);

