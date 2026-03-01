function setUserName(username){
    //complex db call
    console.log("from inside setusername function ",this.username);
    this.username = username
    console.log("from inside setusername function ",this.username);
}

function createUser(user, email, password){
    /*setUserName(user) // this method doesnt work because its not calling the function
    setUserName.call(user) //this method does call but,
                            setUserName has executed it is erased from call stack so it doesnt,
                            and doesnt return any value*/
    setUserName.call(this, user) // this works because we are passing current context of this function so 
    this.user = user
    this.email = email
}

const tea = new createUser("chai", "tea@chai.com", "whywoulditellu")
console.log(tea);
