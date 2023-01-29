const nilesh = {
    firstName : "Nilesh",
    lastName : "Kawar",
    role : "Admin",
    courseCount : 3,

    getInfo : function () {
        console.log(`
        First Name is ${this.firstName} Last Name is ${this.lastName} His role is ${this.role}
        `);
    },
}

const nk = {
    firstName : "Niel",
    lastName : "K",
    role : "Sub-Admin",
    courseCount : 1,
}

console.log(nilesh.firstName);

