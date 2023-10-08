const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'                        
}


// for (const key in myObject) {
//     console.log(`${key} is the Shortcut for ${myObject[key]}`);
// }


const programming = ["js", "cpp", "rb", "Swift"]

for (const key in programming) {
    console.log(programming[key]);
}