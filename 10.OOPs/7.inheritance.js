class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{ // we are giving access of User to Teacher 
    constructor(username, email, password){
        super(username) // similar to calling function with .call and passing this in function call

        this.email = email
        this.password = password

    }
    newCource(){
        console.log(`a new cource was added by ${this.username}`); // stores the user name got from User via super
    }
}



const val = new Teacher("chai", "chai@teacher.com", "123")
val.newCource()
val.logMe() // can access logMe because it gets inherited by Teacher class


const masalaChai = new User("masalaChai")
masalaChai.logMe()


// console.log(chai === User); // this doesnt work because we are comparing two refrences(i guess(i dont know))
console.log(val instanceof User);
console.log(val instanceof Teacher);
console.log(masalaChai instanceof User);