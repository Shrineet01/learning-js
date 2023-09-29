const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["flash", "superman" ,"batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // array ke andar array ayega




// *********************concat************************
// const all_heros = marvel_heros.concat(dc_heros)   // array ke andar array nhi ayega elements gets separated
// console.log(all_heros);



// **************************Spread**********************

// const all_new_heros =  [...marvel_heros, ...dc_heros]  // Same kam krta he as concat but benefit is we can use many arays at a time
// console.log(all_new_heros);


// const another_array = [1,2,3, [4,5,6], 7, [6, 7, [4, 5]]]

// const usable_arr = another_array.flat(Infinity)   // kitna bhi kichkad array ho elements separate krke de dega (easy)

// console.log(usable_arr);


// sometimes data comes in different formats so what to do in that situation?
console.log(Array.isArray("shrineet"))
console.log(Array.from("shrineet"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





