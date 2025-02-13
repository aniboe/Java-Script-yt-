
// var c = 3000

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30 // or c = 30

// }

// console.log(a); // error
// console.log(b); // error 
// console.log(c); // 30

let a = 300
if (true) {
    let a = 10  
    const b = 20
    // console.log("inner:", a);// output: 10 for inside function
}

// console.log("outer:", a);// output: 300 for outside function
  
//#################### nested scope



function one(){
    const username = "anisur"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website); // cant access
    two()
}   

// one()

if (true){
    const username = "anisur"
    if (username === "anisur") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // cant access
    
}
// console.log(username); // cant access

//############################### interesting ##########################

console.log(addone(5)); // in this way of defining function we can call funcion before function defination

function addone(num){
    return num + 1
}


// addTwo(3)// unlike line 54, this gives error because function declration is different

const addTwo =  function(num){ // another way to make function also called expretion 
    return num + 2
}
addTwo(3)
//############################################################