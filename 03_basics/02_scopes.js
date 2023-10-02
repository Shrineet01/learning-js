


if(true) {
    let a = 10
    const b = 20 // iske andar likha hua rehta hai block scope aur uske bahar likha hua hota hai global scope
    var c = 30   
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Shrineet"

    function two(){
        const website = "http://shrineet.com"
        console.log(username);
    }
    console.log(website);
    
    two();
}

one();




// +++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++

// console.log(addOne(5))

function addOne(num){
    return num + 1;
}


// addTwo(5)

const addTwo = function(num){
    return num + 2; 
}
