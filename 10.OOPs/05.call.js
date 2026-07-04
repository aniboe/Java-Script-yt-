function setUserName(username){
    //complex db call
    console.log("from inside setusername function ",this.username);
    this.username = username
    console.log("from inside setusername function ",this.username);
}

function createUser(user, email, password){
    /*
    setUserName(user) // this method doesnt work because its not calling the function
    setUserName.call(user)  // this method doesnt work because, 
                            // we are not passing "this" which points to the 
                            // empty object created when "new createUser" was called
    */
    
    setUserName.call(this, user) // this works because we are passing current context of this function so 
    /*we are passing context of this funtion into setUserName,
     so it rerutns value into this function instead of disappearing  */
    this.user = user
    this.email = email
}

const tea = new createUser("chai", "tea@chai.com", "whywoulditellu")
console.log(tea);
