const score = 400 // converted into number implicitly

const balance = new Number(100) // [Number: 100]
// console.log(balance);
// console.log(score);

console.log(balance.toString());// out: 100   //toString converts into string  
console.log(balance.toString().length) //out: 3   // tells length
console.log(balance.toFixed(2)); // out: 100.00 //number inside toFixed function = number of zeros

const otherNumber = 2243.8475

console.log(otherNumber.toPrecision(5)); // out: 2243.8  NOTE run with value(2,3) 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//============================MATH==================================================


console.log(Math);
console.log(Math.abs(-4)); // converts (-ve => +ve) and (+ve => +ve)
console.log(Math.abs(4));

console.log(Math.round(4.6)); //out: 5

console.log(Math.ceil(4.2));// next greatest whole number
console.log(Math.floor(4.9),"\n");//lowest available whole number

console.log(Math.max(2,4,6,2,7,3,4));
console.log(Math.min(2,4,6,2,7,3,4));


console.log(Math.random());// values between (0-1)
console.log((Math.random()*10) + 1);// added 1 to get minimum value of 1
console.log(Math.floor(Math.random()*10) + 1); // floor roundes off to lowest avalable (line 29)



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);// NOTE formula to make arange for random function 
 

