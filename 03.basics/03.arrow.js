const user = {
    username: "anisur",
    price: 999,

    welcomeMessage: function(){
        console.log(`welcome to website, ${this.username}`); // "this" refers to current context(referig to something in same function)
        // console.log(this); // this about the current object its in 
        
    }

}

// user.welcomeMessage // wont give any output

// user.welcomeMessage()
// user.username = "not anisur"
// user.welcomeMessage()

// console.log(this); //out:{}, gives an empty object, but in brouser it doesnt give empty value

// function chai(){
//     let username = "anisur"
//     console.log(this.username);// cant use it like line no. 6 because it inside a function
//     console.log(this); // gives a lot of info i dont know
// }
// chai()

////////////////////////

// const chai = function(){ // this doesnt work either like line 23 or above function
//     let username = "anisur"
//     console.log(this.username);// cant use it like line no. 6 because it inside a function
//     console.log(this);
// }

// chai()

//#####################################################################

// ARROW FUNCTION  

const chai = () => { // remove "function()" and add "=>" to make an arrow function
    let username = "anisur"
    // console.log(this.username); // gives undefined
    // console.log(this);// gives empty {} 
}

chai()

//++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++

// syntax : const function_name = () =>{}

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(2,3));
 
//++++++++++++++++++++++++++

// IMPLICIT RETURN (used when there is only single line in function that has to be returned)


// const addtwo = (num1,num2) =>  num1 + num2 // return num1 + num2
//            or 
// const addtwo = (num1,num2) =>  (num1 + num2) // NOTE:(used in react) if "{}" than u have to write "retuen if "()" then u dont have to return


// const addtwo = (num1,num2) =>  {username: "anisur"} // undefined so use the following method
const addtwo = (num1,num2) =>  ({username: "anisur"})

console.log(addtwo(2,3));




// const myArray = [2,3,4,5,6,7]
// myArray.forEach(function funcName() {}) // correct (more on loop)
//    or
// myArray.forEach(() => ()) // corrrect (more on loop)