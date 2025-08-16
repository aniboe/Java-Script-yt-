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
const user = promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  // if true than it trigers error/else statment
        if(!error){
            resolve({username:'dono', password:'123'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {   // returned value wilkl be passed inside this function
    console.log(username);
    
})
.catch(function(err){
    console.log(err);
    
})
.finally(() => {console.log('the primise is either resolved or rejected');
})






const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  // if true than it trigers error/else statment /// if false than triger non error statement
        if(!error){
            resolve({username:'javascript', password:'123'})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()




// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/aniboe')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
    
//     } catch (error) {
//         console.log('ERROR:',error);
        
//     }
// }getAllUser()




fetch('https://api.github.com/users/aniboe')
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data);
})
.catch((error) => {console.log(error);
})