let counter  = document.querySelector(".counter");
let followers  = document.querySelector(".followers");
var backcolor = document.querySelector("body");

let count = 1;

setInterval( () => {
    if (count < 1000) {
        count++;
    counter.innerHTML = count;
    }
} , 0.5);

setTimeout( () => {
    followers.innerHTML = "Followers On Instagram";
    backcolor.style.background = "linear-gradient(45deg, #E91E63, #FF9800)";
} , 4000)

// linear-gradient(45deg, #E91E63, #FF9800);