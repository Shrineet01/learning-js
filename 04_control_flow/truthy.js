const useremail = ""

// if(useremail) {
//     console.log("Got User email");
// } else {
//     console.log("Don't have user email");
// }

// flasy values

// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// Truthy values

// "0"(string ke andar 0 hai to), 'false', "", [], {}, function(){}

if(useremail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing operator(??) : null undefined   

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true: false;

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("more than 80");
