//===========singletone
//Object.create



//=============objets litrals

const mySymbol = Symbol("key1")// to makke symbol 

const jsUser = {
    name: "anisur",
    "full name": "anisur rahman",
    [mySymbol]: "myKey1",// has yo be done this way refrance to line no. 8
    age: 21,
    email: "anisur@gmsal.com",
    isLoggedIn: false,
    lastLogin:["monday","tuesday"]
}

//access object
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser."full name"); // correct way is written below
// console.log(jsUser["full name"]);

// console.log(jsUser[mySymbol]); // to access key in object 
// console.log(jsUser);

// jsUser.email = "tempmail@mal.com" // to change selected value
// console.log(jsUser);

// Object.freeze(jsUser) // to stop changes in an object

// jsUser.email = "jbkjvkjd@mal.com" 
// console.log(jsUser);


//==========functios

jsUser.greatings = function(){
    console.log("hello js user")
}
console.log(jsUser.greatings());

////############# IMPORTANT
jsUser.greatings2 = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsUser.greatings2());


