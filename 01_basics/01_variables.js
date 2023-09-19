const accountId = 122345
let accountEmail = "shrineet@google.com"
var accountPassword = "21212121"
accountCity = "Banglore"  // Do not declare variable in this way 
let accountState; // undefined value

// accountId = 2 //not allowed

accountEmail = "sh@google.com"
accountCity = "Jaipur"
accountPassword = "31313131"

console.log(accountId);

/*
Prefer not to use var
because of issue in blockscope and functional scope
*/



console.table([accountCity,accountEmail,accountId,accountPassword,accountState])