// singleton
// object.create


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
            userfullname: {
                firstname: "Shrineet",
                lastname: "Padade"
            }
    }
}


// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1:'a', 2:'b'}
const obj2 = { 3:'c', 4:'d'}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2)  // assign method

const obj3 = {...obj1, ...obj2}      // Hamara universal spread method
// console.log(obj3);


// database se jab values ati he to ...... // ARRAY OF OBJECTS ke form me data ata he database se

const users = [
    {
        id: 1,
        email: 'test@example.com'
    },
    {
        id: 1,
        email: 'test@example.com'
    },
    {
        id: 1,
        email: 'test@example.com'
    },
    {
        id: 1,
        email: 'test@example.com'
    }
]          

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// *****************************ObjectDestructure**********************************

const course = {
    coursename: "Jswithshrineet",
    price: "899",
    courseInstructor: "Shrineet"
}

const {courseInstructor: instructor} = course
console.log(instructor);



// ********************Api**********************

{
    // JSON paile xml ati thi
}


// {
//     "name" : 'Shrineet',
//     "coursename" : 'Js with shrineet',
//     "price" : "free"
// }

[
    // {}
    // {}
    // {}
]



