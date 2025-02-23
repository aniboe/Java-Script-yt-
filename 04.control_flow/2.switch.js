//-----------------------Switch--------------

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 
const test = "jan"

switch (test) {
    case "jan":
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;// stops from further executing accept default
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case");
        
        break;
}