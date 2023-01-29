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

    login(){
        return "You are logged in";
    }

}


class SubAdmin extends User{       //With the keyword extends u can inherit any class 
    constructor(name, email, age){
        super(name, email);
        this.age = age;
    }
    getAdminInfo(){
        return "I am subadmin: name:- "+ this.name + ", email:- " + this.email + ", age: " + this.age;
    }

}


const subadmin = new SubAdmin("tom", "tom@jerry.com", 6); 

console.log(subadmin.getAdminInfo());
console.log(subadmin.login());  //you can access parent methods
console.log(subadmin.getInfo());

