var user = "Admin";

switch (user) {
    case "Admin":
        console.log("You have full access");
        break;
    
    case "subadmin":
        console.log("Access to create/delete course");
        break;

    case "testprep":
        console.log("Access to create/delete test");
        break;
    case "subadmin":
        console.log("consume content");
        break;

    default:
        console.log("Guest User")
        break;
}