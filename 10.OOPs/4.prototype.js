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

// heroPower.anisur()
myHeros.anisur()

myHeros.hiAnisur()
// heroPower.hiAnisur()