var states = [
    "Maharashta", 
    "Gujarat", 
    44, 
    "Punjab", 
    "Delhi", 
    "Karnataka"
];  //An Array declaration

// For Loop

for(let i = 0; i< states.length; i++){
    if(typeof states[i] !== "string") break;
    console.log(states[i]);
}


// while loop

let i = 0;
 
while(i < states.length){
    console.log(states[i]);
    i++;
}
