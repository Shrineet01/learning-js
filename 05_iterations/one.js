// for
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is the best number");
    }
    console.log(element);   
}

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop value: ${j} and inner loop : ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }    
// }

let myArray = ["Flash", "batman", "superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}