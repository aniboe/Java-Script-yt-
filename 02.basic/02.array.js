const marvel_Heros = ["thor", "ironman", "spiderman"]
const dc_Heros = ["superman", "batman", "flash"]

// marvel_Heros.push(dc_Heros) // will add dc_Hero in marvel but, insted there will be an array inside array 
// :out : [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// console.log(marvel_Heros)
// console.log(typeof marvel_Heros[3][1]);// to access array inside array

// const allHeros = marvel_Heros.concat(dc_Heros)// adds both array and gives new array
// console.log(marvel_Heros);
// console.log(allHeros);


// SPREAD METHOD
const allNewHeros = [...marvel_Heros, ...dc_Heros]// this also adds both array
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],6,[7,4,8,[4,6]]]

const usableAnotherArray = anotherArray.flat(Infinity)// no. inside flat() function decides how deapp or how many layer it will look
//flat will give a normal array from nested array
console.log(usableAnotherArray);


console.log(Array.isArray("aisur"));// chesks if anisur is an array
console.log(Array.from("aisur"));// makes(output) an array using these letter

console.log(Array.from({name: "anisur"}));// intrsting (it does not know what to make array with so gives an empty array)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// makes an array of these value



