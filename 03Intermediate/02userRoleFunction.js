var getUserRole = function (name, role){        //You can also define as function getUseRole(name,Role)

    switch (role) {
        case "admin":
            return `${name} is Admin with all access`;
            break;
        
        case "subadmin":
            return `${name} is subadmin with access to Create and Delete Course`;
            break;

        case "testprep":
            return `${name} is testprep with access to Create and Delete Test`;
            break;   
            
        case "user":
            return `${name} is user with access to Consume Content`;
            break;        
    
        default:
            return `${name} is Guest User`;
            break;
    }

}

console.log(getUserRole("Nilesh", "admin"));

var getAccessInfo = getUserRole("Niel", "testprep");
console.log(getAccessInfo);