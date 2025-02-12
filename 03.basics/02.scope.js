
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
    console.log("inner:", a);// output: 10 for inside function
}

console.log("outer:", a);// output: 300 for outside function
  
