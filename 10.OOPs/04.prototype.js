// let myName = "anisur"
// let myChanel = "aniboe"

// console.log(myName.length);
// console.log(myName.trim().length);


let myHeros = ["thor","spiderMan"]

let heroPower = {
    thor: "thunder",
    spiderMan: "web",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderMan}`);
        
    }

}
Object.prototype.anisur = function(){
    console.log(`anisur is present in all object`);
    
}
Array.prototype.hiAnisur = function(){
    console.log(`anisur says hi`);
    
}

// print below to see if needed
// heroPower.anisur()
// myHeros.anisur()

// myHeros.hiAnisur()
// heroPower.hiAnisur()



// -------------------------------PROTOTYPAL INHERITANCE------------------------------

const Teacher = {
    makeVideo: true
}

const TeachingSuport ={ 
    isAvailable: true
}

const TASuport = {
    makeAsignment: "js asignment",
    fulTime: true,
    __proto__: TeachingSuport // so now this object has access to TeachingSuport 
}

const user = {
    name: "namai",
    email: "namai@gmail.com"
}

// Teacher.__proto__ =  user // similar to above we can write this outside too
// console.log(TASuport.isAvailable);
// // __proto__ is not used much now (might find in old code base)
// //  following is now way to write it 

// // Object.setPrototypeOf(support to , suport of)
// Object.setPrototypeOf(user, TASuport)
// console.log(user.isAvailable);


// MAKING A CUSTOM PROTOTYPE FOR STRING
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`${this}`);
    console.log(`true length : ${this.trim().length}`)
}

const stri = " hihi  "
stri.trueLength()