//const user = new Object() this(SINGLETONE OBJECT) and below(non singletone) both can be used to make object
const user = {}

// inserting values in object
user.id = "123jfjf"
user.name = "not me"
user.isLoggedin = false

// console.log(user);

//nested object
const regularUser = {
    email: "dsfkdhf@jfj.com",
    fullname: {
        userfullname: {
            firstname: "anisur",
            lastname: "rahman"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.firstname);// adding ? checks if the value exists inside object


//
const objOne = {1:"a", 2: "b"}
const objTwo = {3:"a", 4: "b"}
const objthree = {5: "a", 6: "b"}

//methods to add these array
// const obj3 = {objOne,objTwo} // this wont add 
// const obj3 = Object.assign({},objOne,objTwo,objthree)// all three is being ssigned in first empt object

//spread method
const obj3 = {...objOne, ...objTwo, ...objthree}// use this methos
// console.log(obj3);


const NewUser = [  //arrayof an object
    {
        id: 1,
        email: "hmai@.com"
    },

    {
        id: 1,
        email: "hmai@.com"
    },

    {
        id: 1,
        email: "hmai@.com"
    },

    {
        id: 1,
        email: "hmai@.com"
    },
]
// console.log(NewUser[1]);// to print first 
// console.log(NewUser[1].email);  // to print email of first object


// To find keys and value

// Keys
// console.log(Object.keys(user));// it will tell all the keys of object user (in array)
// console.log(Object.values(user)); // gives values of those keys (in array)
// console.log(Object.entries(user));// gives an array of smaller array(array of key value pair )

// console.log(user.hasOwnProperty("isLoggedin"));// "hasOwnProperty" checks if value exists in objec(output in boolean)



///3333333333333333333333333333


const course = {
    coursseName : "js hindi",
    price: "free",
    coursrInstructor: "hitesh"
}

// console.log(course.coursrInstructor);

//############### OBJECT DESTRUCTURING

// const {coursrInstructor} = course /* in above line u see that we have to write course everytime
//            we want to access keys of "course" object so by this line we dont have to write coutse every time we want to access "course" object */
// console.log(coursrInstructor); // because of above line we dont have to write course, we can directly access

const {coursrInstructor: instructor} = course // we can also change name 
console.log(instructor); // same as line 89 
//##########################################################

                  /// JASON
// {
//     "name": "anisur",
//     "coursename": "B.Tech"
// }

// above is an example of JASON