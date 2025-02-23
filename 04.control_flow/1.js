// ----------------------------IF-------------------------

// const isLoggedIn = true

// if (isLoggedIn){
//     console.log("it works"); 
// }


//----------------Operator-------------------------
// <, >, <=, >=, ==, !=, === (also checks type of data)
//-------------------------------------------------

// if (3 == "3 ") {   // true even if datatype is not same 
//     console.log("it doesnt works");
    
// }

// // //

// if (3 === "3 "){ // doesnt workk if dtatype is not same
//     console.log("it does work");
// }else{
//     console.log("it doesnt work");
    
// }



// const score = 200

// if (score >100){
//     const power = "fly"
//     console.log(`user power is ${power}`);   
// }
// console.log(`user power is ${power}`);   power is not define in global scope, we can use "var" insed of "const" to make power global 



// const balance = 1000

// if (balance > 500) console.log("test"); // also works likes that for only one line


// -------------------------------------Nesting--------------------------

// const balance = 1000

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("more than 750");   
// }else if (balance < 900){
//     console.log("more than 900");   
// }else{
//     console.log("less than 1200");
// }

// const user = true
// const debCard = true
// const googleLogged = false
// const emailLogged = true

// if (user && debCard){ // and
//     console.log("alloawed to buy");
// }

// if (googleLogged || emailLogged){ // or
//     console.log("logged in");
// }

// if (!user){ // not
//     console.log("alloawed to buy");
// }console.log("didnt print");
