const uno = () =>{
    return "I am One";
}

// const dos = () =>{
//     setTimeout(()=>{
//         return "Sorry I'm late";
//     }, 3000);
// }


const dos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("I am Two");
        }, 3000)
    });
}


const tres = () =>{
    return "I am Three";
}

const callMe= async() => {
    const valOne = uno();
    console.log(valOne);

    const valTwo = await dos();     //await will wait until dos completey executed and after that it'll execute other methods
    console.log(valTwo);

    const valThree = tres();
    console.log(valThree);
}

callMe();