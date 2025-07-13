const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // DB call, cryptography , network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
    
}) // .then() is conneted with resolve in first line




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){   // this part of code is not stored inside variable hense no need to do same as line 11
    console.log('async 2 resolved');
    
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: 'anisur',email:'example@mail.com'
        })
    },1000)
})
const username = promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'dono', password:'123'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {

})