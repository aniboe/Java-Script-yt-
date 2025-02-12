//########### How to definr function

function saymyName() {
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("u");
    console.log("r");
    
}
// saymyName()

//############################################
// function add2num(num1,num2){ // num1 and num2 are parameter 
//     console.log(num1 + num2);// here function is giving an output but its is not " returning" a value 
// }

// add2num(3,5)// numbers inside is called arguments

// if we pass empty value it gives "Nan"
// 3 , "5" => 35
// 3 , null => 3
// 3 , "a" => 3a

// const letnum = add2num(3,6)
// console.log(letnum); // output: undefined, because function doesnot return anything( refrence to line 17)
//#############################################################################


// Returning value with function

// function addTwoNum(num1,num2){

    // let result = num1 + num2
    // return result

    //      or

//     return num1 + num2 // same thing but in one line
//     console.log("anisur");// code doesnt rnsfter function(hence faded colour)
    
// }
// console.log(addTwoNum(3,5))// rening function like upper function

// let result = addTwoNum(4,6)// asigning value
// console.log("Result: ",result);// this will give proper output(not undefined) unlike above function becuse function is returning value



function LoginUserMessage(username = "sam"){ // "sam" here is a default value, if nothing is passed than sam will be passsed(because of this it will not go to if block)
    if (username === undefined) { //if (!username){} // this line can be written in bith ways(besause anything empty ("") or undefined means false)
            
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(LoginUserMessage("anisur"));
// console.log(LoginUserMessage()); // if nothing is passed than output: undefined just logged in

//#########################################################################

// function calculatingPrice(...num1){ // here (...) is a rest operator, makes anarray of multiple/single values given to it
//     return num1
// }
// console.log(calculatingPrice(400));

// 2nd case
function calculatingPrice(val1,val2, ...num1){ // "val1" and "val2" will tale first two consuctive value and rest will be turned into an array and returned via "num1"
    return num1
}
// console.log(calculatingPrice(200,300,500,600,400));// output: [ 500, 600, 400 ]



//##########
// const user = {
//     username: "anisur",
//     price: 0
// }

function handleObject(anyobjet){
    console.log(`user name is ${anyobjet.username} and price is ${anyobjet.price}`);
}
// handleObject(user) // passingn "user" objcet in function
//      or
handleObject({username: "anisur", // here insted of using "user"(object) we are passing object directly while calling function 
    price: "less"
})
//###########


const myArray = [200,400,600,700]

function secondVal(anyArray){
    console.log(anyArray[1]);
}

secondVal(myArray)// also can db done similarly like line 88