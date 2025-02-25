//----------------------for-----------------------

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("five is best no.");
//     }
//     // console.log(element);
// }


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i +' x ' + j + ' = ' + i * j ); // console.log(i +  ' x' + '= ' + i * j ); // same thing
             
    }
}

let myArray = ["superman", "batman", "spiderman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}



// -------------------------- break / continue ---------------

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`detected 5`)
//         break
//     }console.log(`val of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`detected 5`)
        continue
    }console.log(`val of i is ${index}`);
}   