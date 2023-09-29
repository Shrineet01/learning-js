// to declare an object there are two ways 1) literal(Singleton nhi banega) 2) constructor(hamesha singleton banega)
 
// singleton
// object.create


// object literals  (objects me key-value concept use hota he)

const mySym = Symbol("key1")

const Jsuser = {
    name : "Shrineet",
    age: 18,
    [mySym]: "mykey1",   //syntaxxxxx to use symbol
    location: "Maharashtra",
    email: "shrineet@google.com",
    "full name" : "Shrineet",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tue", "Wed"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);
console.log(typeof[mySym]);



Jsuser.email = "Shrineet@bing.com" // syntaxx to change values or overwrite existing
Object.freeze(Jsuser)
Jsuser.email = "Shrineet@yahoo.com" // this line will not execute because i have freezed Jsuser
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Jsuser");
}

