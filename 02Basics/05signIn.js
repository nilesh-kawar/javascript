var email = true;
var google = false;
var facebook = false;


if(email || google || facebook){
    console.log("Login Successfull");
} else{
    console.log("Please Login");
}


var authenticate = false;

if(email || google || facebook){
    authenticate = true;
} else{
    authenticate = false;
}


if (authenticate){
    console.log("Show Signout Button");
} else{
    console.log("Show SignIn Button");
}



