function/*(keyword)*/ sayMyName(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
}


//sayMyName //REFERENCE
//sayMyName()  //EXECUTION

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    return number1 + number2;
}

const result = addTwoNumbers(3 , 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){                                  // !username === undefined
        console.log("please Enter A username");
        return
    }
        return `${username} just logged in`
}

console.log(loginUserMessage("Shrineet"));
console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

