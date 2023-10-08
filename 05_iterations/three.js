// // for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i);
// }


// const greetings =  "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each charecter is ${greet}`);

// }


// Maps

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('Fr', 'FRANCE')
map.set('IN', 'India')  // map doesn't show repeated values

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value); 
// }

for (const key in map) {
    console.log(key);
}




// const chai = {
//      "game1": "bgmi",
//      "game2": 'valorant',
//      "game3": "coachbussimulation",
//      "game4": "NFS" 
// }                                             // for of loop does not work for objects but works on maps

// for (const [key, value] of chai) {
//     console.log(key, ":-", value);
// }