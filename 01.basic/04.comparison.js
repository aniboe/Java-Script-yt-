//following give answer in true/false

console.log(1<2);
console.log(1>2);
console.log(1<=2);
console.log(1>=2);
console.log(1==2);
console.log(1!=2);


// avoid following

console.log("2" > 1); // converts into int but not reliiable(output : true)
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false for all three
console.log(undefined > 0);
console.log(undefined < 0);


// === (strict check(also checks datatype))

console.log("2" === 2); // === will prevent datype conversion because of ===




