const coading = ["js","rb","py","java","cpp"]


// coading.forEach( function (item) {}) // "item " will iterate the loop "coadeing"

// coading.forEach(function_name(item){}) // error statement// we dont need to pass function name her "function" is datatpe declaration 

// coading.forEach(function (values){
//     console.log(values);
// })

// ---------------------------------------ARROW FUNCION // " () => {} "

// coading.forEach((item) => {
//     console.log(item);
// })

// ______________________________________________________________________________

// function printme(value){
//     console.log(value);
// }

// coading.forEach(printme())

// _____________________________________________________________________


// coading.forEach((item, index, arr) => { // (value / index / array that is being used)
//     console.log(item, index, arr);    
// })






const mycoading = [
    {
        languageName : "java script",
        languageFileName : "js",
    },
    {
        languageName : "python",
        languageFileName : "pyp",
    },
    {
        languageName : "java",
        languageFileName : "java",
    }
]
mycoading.forEach( (item) => {
    console.log(item.languageName); // "item" will go to each "object" and and look for "languageName"
    console.log(item.languageFileName);
})