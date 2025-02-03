// array

//defining an array
const myArray = [1,2,3,4,6] //can have multiple datatypes and variable length(unlike c/c++)
const myHero = ["hero 1","hero 2","hero 3"]
const newArray = new Array()

// console.log(myArray[4]);// 4th index print
// console.log(myArray);// print whole array

//// ARRAY METHODS

// myArray.push(6)// insert at end
// myArray.pop()// removes last value

// myArray.unshift(9)// adds value to start of array
// myArray.shift()// removes values from staart of array

// console.log(myArray.includes(6));// if value exists then "true" or else "false"
// console.log(myArray.indexOf(28)) // findes index of given value, if not exists then out: -1

// console.log(myArray);

// const newArr = myArray.join() // adds all array as string

// console.log(newArr);
// console.log(typeof newArr);



//## SLICE, SPLICE

console.log("original aray : ",myArray);

//slice

const myar1 = myArray.slice(1,3)// doesnt include 3 (1-2) also doesnt change original array
console.log("after slice : ",myArray);
console.log(myar1);


//splice

const myar2 = myArray.splice(1,3); // does change original array and also include the last value of range
console.log("after splice",myArray);

console.log(myar2);





