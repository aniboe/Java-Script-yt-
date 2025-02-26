//  for of

// ["","",""]
// [{},{},{}]



// const array = [1,2,3,4,5]

// for (const num of array) {
//     console.log(num);
// }



// const greatings = "hello world"
// for (const greet of greatings) {
//     console.log(greet);
    
// }


// ____________________________________________


// Maps

const map = new Map()  // it stores value in key value pair, has no repetion and stayes in same order ad we have given input

map.set('in','india')
map.set('usa','united states if america')
map.set('fr','france')
map.set('in','india')

// console.log(map);

// for (const mapkey of map) {
//     console.log(mapkey);
    
// }

// another method

// for (const [mapKey, mapValue] of map) { //accessing ley value saperately
//     console.log(mapKey, ":-",mapValue );
// }




// // following method doesnt work because object cant be iterated using this method (for of loop)
// look into next file(4.four.js) for answer 
// const myObject = {
//     "game1" : "NFS",
//     "game2" : "DGB",
//     "game3" : "dont ask me i dont know"
// }

// for (const [key,value] of myObject) {
//     console.log(key,":", value);
// }

