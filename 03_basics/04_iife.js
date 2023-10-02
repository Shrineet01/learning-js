(function chai(){
    //Named iffie
    console.log("DB CONNECTED");      // iffie hai ye 😂
})(); // aise case me semicolon dena hai kyuki iffie ko pta nhi he context rokna kaha hai 


( () => {
    console.log(`DB CONNECTED TWO`);
} )();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Shrineet")