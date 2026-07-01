class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
    static createID(){
        console.log("lol: ",this.username);
        return `123`
    }
}

const val = new User("kimi no namai")
val.logMe()
// val.createID() // static function is in accessable
console.log(User.createID()); // this is the way i can access this function 





class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
    log(){
        console.log(this.username);
    }
    accessStatic(){
        const id = User.createID()
        console.log("this is static: ",id);
    }
}

// const android = new Teacher("android-it-is", "not-i@phone.com")
const android = new Teacher(val.username , "not-i@phone.com")
android.log()
android.logMe()
// android.createID() // even child cant access this function (duh)
android.accessStatic() // accessing createID from Teacher class