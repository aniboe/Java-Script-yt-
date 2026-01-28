const user = {
    username: 'anisur',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());


//________________________________________________

function User(username, loginCount, isloggegIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggegIn = isloggegIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this; // it happens implicitly so dont have to write it
}
// const user1 = User("anisur",12 , true)
// const uaer2 = User("code and chil", 11, false) // this will over write above line even though the variable is diffrent
// console.log(user1);


const user1 = new User("anisur",12 , true)
const user2 = new User("code and chil", 11, false) // by adding new keyword we resolve above issue and doesnt give excess details in terminal
console.log(user1.constructor);
// console.log(user2);
