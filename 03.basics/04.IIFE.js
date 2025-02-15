// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ( IIFE )
/* an "iife" is used when we want to run a function imedidiately and we dint want any 
polution from global scope */


function not_iife(){
    console.log("this functiom is not iife");
}
not_iife()


(function iife(){
    console.log("this id an iife");
})(); // "()" is here calling this function // NOTE : ";" is necessar because it determines the end if the function


( (name) => {
    console.log(`this is a arrow iife function and we can pass values like names: ${name}`);  
})("anisur");
