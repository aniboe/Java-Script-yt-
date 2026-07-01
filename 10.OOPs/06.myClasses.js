// its all happning after ES6 maybe seven 


// NOTE : this is the class 
class User1{
    constructor(username, email, password){   // the moment new(constructor) keyword is called this constructor is call instantly
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    userChange(){
        return `${this.username.toUpperCase()}`
    }
}

const value = new User1("nouser", "nouser@rrrr.cccm", "oass lik")
// const value = new User("nouser", "nouser@rrrr.cccm", "oass lik").encryptPassword()
// console.log(value);
console.log(value.encryptPassword());
console.log(value.userChange());



// NOTE: BEHIND THE SCENE

function User2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.userChange = function(){
    return `${this.username.toUpperCase()}`
}

const newval = new User2("nouser", "nouser@rrrr.cccm", "oass lik")
console.log(newval.encryptPassword());
console.log(newval.userChange());