let score="44abc"

// console.log(typeof score);

// console.log(typeof(score));

let valueInNumber=Number(score) // 'Number' will convert 'score' into 'int' value
// console.log( typeof valueInNumber);
// console.log(valueInNumber); //it will convert but output will be 'NaN'(not a number)

///////NOTES/////
// "33"=>33
// "33abc"=>NaN
// true=>1 : false=>0
// null=>0
// undefined=>NaN
///////////

let isLoggedIn=2

let booleanIsloogedIn=Boolean(isLoggedIn)//converts into boolean value
// console.log(booleanIsloogedIn);

////////NOTE/////
// 1(or any number accept 0)=>true
// 0=>false
// ""=>false
// " "=>true
// "anisur"=>true
///////////////

let someNumber=33

let stringNumber=String(someNumber); //converts "int" to "string"
// console.log(typeof stringNumber);
// console.log(stringNumber);

// **************************OPERATIONS***************************

let value = 3
let negValue = -value//converts into -ve
// console.log(negValue);


// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2+2);
// console.log(2**2); //power
// console.log(2**3);
// console.log(2%2); //remender


let str1 = "anisur "
let str2 = "rahman"
// console.log(str1 + str2);


//dont do these following bullshit

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(+true); //1
// console.log(+""); //0

//till here

//**********prefix and postfix */

let x = 3;
const y = x++;//value of x also increases

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; //value of a also increases

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"






