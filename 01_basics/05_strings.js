const name = "Shrineet"
const repoCount = 50

// console.log(name + repoCount + "Value"); old way to concatinate 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shrineet-name-com') // Each letter is an object not an array in string as it also starts from 0

// Strings are based on key value pairs For example: S H R I N E E T  ==>>  The key value pairs for SHRINEET are:
// 0:S, 1:H, 2:R, 3:I, 4:N, 5:E, 6:E, 7:T

console.log(gameName[0]); // How to access key-Value pair
console.log(gameName.__proto__);   // How to access Prototypes (syntax)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('e'));

// ***************************Substr, slice******************************

// const newString = gameName.substring(0, 4); // It only consider from 0rth index 
// console.log(newString);

// const anotherString = gameName.slice(-6, 7)  // benefit of using slice method to get substring is it can also give reverse values 
// console.log(anotherString);

// **************************Trim, replace**********************************

// const newStringOne = "   Shrineet    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://shrineet.com/shrineet%20padade"
console.log(url.replace('%20', '-'));
console.log(url.includes('sheineet'));

console.log(gameName.split('-'));

