const name = "anisur"
const repositCount = 20

// console.log(name + repositCount + " value"); // out: anisur2value (this method is not recomended)

// console.log(`hello my name is ${name} and my repo count is ${repositCount}`);

const gameName = new String('anisur-an')

/* 
const gameName = new String('anisur') 

String {'anisur'}
0: "a"
1: "n"
2: "i"
3: "s"
4: "u"
5: "r"
length: 6
*/
// console.log(gameName[0]); // acces 0 index
// console.log(gameName.__proto__); // we can see these value on brouser console or output is on from line 13


// console.log(gameName.toUpperCase()); // converts into upper case, doesn't change orignal value(stack, primitive)
// console.log(gameName.charAt(3)); // charater at 3rd index
// console.log(gameName.indexOf("i")); // tells index of given value
// console.log(gameName.indexOf("ni")); //out: -1 (value doesn't exist) and always searches for "first" character only

// substring
const newString = gameName.substring(0, 4) // from 0 to 3 index gets stored(can't use -ve )
// console.log(newString);

// slice
const anitherString = gameName.slice(-7, 4) // count from back and start from start and print
// console.log(anitherString);


// trim()
const newString1 = "       anisur      "
// console.log(newString1);
// console.log(newString1.trim()); // removes white space

// replace
const url = "https://aniboe.com/aniboe%20blogspot"
console.log(url.replace('%20', '-')) // replace value

// includes
console.log(url.includes('ani')); // check if the vakue exists in string
 

const gameName1 = new String('anisur - rahman - ani')
const diff = gameName1.split('-') // remove and make space/(try output, hard to explain)
console.log(diff);



