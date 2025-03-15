const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) => num + 10) // adding 10 to each numbers
// // const newNum = myNumbers.map( (num) => {return num + 10}) // adding 10 to each numbers
// console.log(newNum);



// Chaining (using multiple  these )

const newNumbers = myNumbers.map( (num) => num * 10 ).map( (num) => num +1 ).filter( (num) => num >= 40 )

//                   Can also be written like following

// const newNumbers = myNumbers
//             .map( (num) => num * 10 )
//             .map( (num) => num +1 )
//             .filter( (num) => num >= 40 )
console.log(newNumbers);
