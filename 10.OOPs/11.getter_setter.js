class User {
    constructor(email, password){ // with setter and getter password always sends value to setter and return from getter 
        this.email = email
        this.password = password 
    }

    // getter : to get values from outside of the class
    get password(){
        // return this.password.toUpperCase() //if we are setting _pass, then we have to get it too(this line will not apply toUpperCase())
        // return this._password.toUpperCase() // although we are saving non upper case but we are providing uppercase as output
        return `${this._password.toUpperCase()}lol hahahah 🤣`
    }
    // setter : to set value inside class
    set password(value){    // NOTE: this setter is specifcaly for password so it will only do the password
                            // so when this class is used email is created usinf constructor bur for password this setter is called 
        // this.password = value // because constructor above is also trying to set password , to creates a race betrween these two and the "callstact size exceaed error"
        // this._password = value.toUpperCase() // so trying new variable
        this._password = value
    }


    // for email
    get email(){
        return `${this._emal}.fbi.co.gov.lo`
    }

    set email(val){
        this._emal = val
    }
}

const user1 = new User("lol@mail.lol", "secured password")
console.log(user1); // this gives the original 
console.log(user1.password); // this gives the midified value
console.log(user1.email); 
