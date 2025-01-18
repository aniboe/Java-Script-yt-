let score="44abc"

console.log(typeof score);

console.log(typeof(score));

let valueInNumber=Number(score) // 'Number' will convert 'score' into 'int' value
console.log( typeof valueInNumber);
console.log(valueInNumber); //it will convert but output will be 'NaN'(not a number)

///////NOTES/////
// "33"=>33
// "33abc"=>NaN
// true=>1 : false=>0
// null=>0
// undefined=>NaN
///////////

let isLoggedIn=2

let booleanIsloogedIn=Boolean(isLoggedIn)//converts into boolean value
console.log(booleanIsloogedIn);

////////NOTE/////
// 1(or any number accept 0)=>true
// 0=>false
// ""=>false
// " "=>true
// "anisur"=>true
///////////////

let someNumber=33

let stringNumber=String(someNumber); //converts "int" to "string"
console.log(typeof stringNumber);
console.log(stringNumber);






