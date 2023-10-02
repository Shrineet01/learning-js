// const user  = {
//     username : "Shrineet",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username  = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Shrineet"
//     console.log(this.username);
// }

 const chai = () => {
    let username = "Shrineet"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {     // Arrow function
//     return num1 + num2;  // Explicit return
// }


// const addTwo = (num1, num2) => num1 + num2;  // Implicit return 


// const addTwo = (num1, num2) => (num1 + num2);  // Implicit return (Same output ayega lekin most used in react REMEMBER**)

// const addTwo = (num1, num2) => ({username: "Shrineet"}); // how to return a object using arrow function  



// console.log(addTwo(1, 2));