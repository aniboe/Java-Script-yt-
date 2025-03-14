// const coading = ['js','ruby','java','python','cpp']

// const values = coading.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);
// conclusion : it never returns value

// ________________________________________________
const myNum = [1,2,3,4,5,6,7,8,9,10]

// using "filter" because it allows to return values unlike "forEach" 

// const newnum = myNm.filter( (num) => num > 5 ) // "filter( (accessing variable) => condition)"
// console.log(newnum);

//                OR

// const newnum = myNm.filter( (num) => (num > 5) ) // "filter( (accessing variable) => condition)"
// console.log(newnum);

//                OR

// const newnum = myNm.filter( (num) => {
//     return num > 5 // we have to use "return" because "condition" we have created a scope( " {}" ) here .
// } )
// console.log(newnum);

//                OR

// const newnum = myNm.filter( (num) => {return num > 5 // we have to use "return" because "condition" we have created a scope( " {}" ) here .
// } )
// console.log(newnum);


// If we want to use return on "forEach"

// const newnum = []

// myNum.forEach( (num) => {
//     if (num > 4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

let userBooks = books.filter( (bk) => bk.genre === "History" ) // give books with history genre

userBooks = books.filter( (bk) => bk.publish >= 1995 ) // give books published after or in 2000
//line no 56 is overwriting line no. 54(we are able to do this because it is "let" not "const")
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"} )

console.log(userBooks);

