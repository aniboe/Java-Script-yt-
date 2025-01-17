const accountId=14321
let accountEmail="tempmails@gmail.com"
var accountPassword="12345"//let and var(not used now) are two mathod of declaring string
accountCity="delhi"//string can be declared without var and let(not recomended)

//accountId=2
/* in above coment we tried to change
value of constant(not posible later in code)*/

console.log(accountId);//for single line output
//adding empty variable
let accountState;
//updaing values of strings
accountEmail="nottemp@gmail.com"
accountPassword="54321"
accountCity="not delhi"

// console.log([accountEmail,accountId,accountPassword,accountCity,accountState])//output : [ 'nottemp@gmail.com', 14321, '54321', 'not delhi', undefined ]
// console.log(accountEmail,accountId,accountPassword,accountCity,accountState)//output : nottemp@gmail.com 14321 54321 not delhi undefined

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])//out put in tabuler form(error on no square bracket)

