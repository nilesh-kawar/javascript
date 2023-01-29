const names = ["WhatsApp", "facebook", "Instagram", "LinkedIn", "Snapchat"];

// for of Loop
for(const n of names){  //for of Loop is Basically used for an Arrays
    console.log(n);
}

// for In Loop
const socialMedia = {       //for In Loop is Basically used for an Objects
    WA : "WhatsApp",
    Fb : "Facebook",
    IG : "Instagram",
    Li : "LinkedIn",
    Snap : "Snapchat"
};

for(const n in socialMedia){
    console.log(`Key is : ${n} and value is : ${socialMedia[n]}`);
}
