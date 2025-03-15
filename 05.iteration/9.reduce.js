const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (accumulator, current_val) { // look in MDN for this function ie. "reduce()"
//     console.log(`accumulator ${accumulator}`);
//     console.log(`current_value ${current_val}`);
//     return accumulator + current_val

// },0)    // "0" tells functon where to start from ie. accumulator 
// console.log(myTotal);


// ____________________________in arrow function (same thing as above)

// const myTotal = myNums.reduce( (accumulator, current_value) => accumulator + current_value, 0) // againn " 0 " here is value form which accumulator will start
// console.log(myTotal);


// -----------


const myShopingCart = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "python",
        price : 999
    },
    {
        itemName : "react native",
        price : 5999
    },
    {
        itemName : "data science",
        price : 12999
    },
]

const priceToPay = myShopingCart.reduce( (accumulator, item) => accumulator + item.price, 0)
console.log(priceToPay);
