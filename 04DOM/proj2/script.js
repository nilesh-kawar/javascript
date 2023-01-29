const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBgColor = (selectElement) => {
   return window.getComputedStyle(selectElement).backgroundColor;   
}

// var color = getBgColor(red);

// red.addEventListener("mouseenter", () => {
//     center.style.background = color;
// });


const discoBall = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

discoBall(red, getBgColor(red));
discoBall(cyan, getBgColor(cyan));
discoBall(violet, getBgColor(violet));x
discoBall(orange, getBgColor(orange));
discoBall(pink, getBgColor(pink));



// console.log("Red :", getBgColor(red));
// console.log("Cyan :", getBgColor(cyan));
// console.log("Violet :", getBgColor(violet));
// console.log("Orange :", getBgColor(orange));
// console.log("Pink :", getBgColor(pink));
