function tipper(a){
    var tip = parseInt(a) + 5;
    console.log(tip);
}

tipper("5");  //first define function and then call--> run perfect

// -------------

bigtipper(15); //first call function and then define --> run perfect

function bigtipper(a){
    var tip = parseInt(a) + 15;
    console.log(tip);
}

// -------------


// smalltipper(2);   //when we call function using variable declaration it gives erro

// var smalltipper = function (a){
//     var tip = parseInt(a) + 5;
//     console.log(tip);
// }


// -------------