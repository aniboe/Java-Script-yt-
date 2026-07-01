

// console.log(Math.PI) // Math.PI is a constant that cant be changed by normal means 
// Math.PI = 4 
// console.log(Math.PI) 

// in this we learn how can we change values of things we usualy cant change



// ------------------
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // this means we want 'PI' from 'Math'

console.log(descriptor);
// output
/*
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }
*/
   
// ------------------



// ------------------

const chai = {
    name: "ginger",
    price: 100,
    isAvailable: true,

    aFunction: function(){
        console.log('a function that breaks that log below');
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai)); // undefined

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// output
/*
    {
        value: 'ginger',
        writable: true,
        enumerable: true,
        configurable: true
    }
*/
   


// editing the properties of chai object
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// output
/*
    {
        value: 'ginger',
        writable: false,
        enumerable: false,
        configurable: true
    }
*/




// for(let [key, value ] of chai){
//     console.log(`${key} ${value}`);
// }
// oputput: TypeError: chai is not iterable 
/*
    Plain JavaScript objects {} are never directly iterable using for...of, regardless of whether you changed the "enumerable" property or not. 
    To loop through any object with for...of, you always have to convert it using "Object.entries(obj)", "Object.keys(obj)", or "Object.values(obj)". 
    Turning enumerable: false simply hid the name property from showing up inside that entries loop!
*/


// but we can still iterate it using loop by following method
for(let [key, value ] of Object.entries(chai)){ // by using Object.entries('obj name) // we can iterate the object iven it is false
    if(typeof value !== 'function'){ // this is used becauses function in the 'chai' object, it breaks this logic, this is to avoide it(function)
        console.log(`${key} ${value}`);
    }
}
/*
output

    price 100
    isAvailable true

    NOTICE: we are not getting "name" property from object , bcause it was disabled above
*/

// ------------------




 