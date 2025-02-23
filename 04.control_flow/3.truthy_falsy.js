// const userEmail = "ani@temp.com"

// if (userEmail){
//     console.log("got user email");    
// }else{
//     console.log("dont have usr email");   
// }

// here "userEmail" has some value in it so its true
// if empty than false


// const userEmail = {} // userEmail is true here

// if (userEmail){
//     console.log("got user email");    
// }else{
//     console.log("dont have usr email");   
// }


// ------------------Falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN 

// all of these are falsy values, anything else is truthy
// ----------------------------------


// ------------------Tuthy values

// true, "0", "false", " ", [], {}, function(){}




const Email = []

if (Email.length === 0){
    console.log("array is empty");
}



const empObj = {}

if (Object.keys(empObj).length === 0){ // Object.keys gives an "array" of keys(look into "03.objects.js")
    console.log("object is empty");
}




