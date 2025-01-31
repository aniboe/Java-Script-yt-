//#date

// let myDate = new Date()

// console.log(myDate.toString());// toString converts "2025-01-31T17:43:12.121Z" into "Fri Jan 31 2025 17:44:49 GMT+0000 (Coordinated Universal Time)"
// console.log(myDate.toDateString()); // Fri Jan 31 2025
// console.log(myDate.toISOString(),"\n"); // 2025-01-31T17:47:52.024Z

// console.log(myDate.toJSON()); // 2025-01-31T17:49:28.472Z
// console.log(myDate.toLocaleDateString()); // 1/31/2025
// console.log(myDate.toLocaleString()); // 1/31/2025, 5:49:28 PM

// console.log(myDate.toTimeString());// 17:53:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString(),"\n");// Fri, 31 Jan 2025 17:53:19 GMT
/////////////////////////


// let myCreatedDate = new Date(2024,0,6)// yyyy , mm , dd (month starts from zero)
// let myCreatedDate = new Date(2024,0,6,5,6,8)
// let myCreatedDate = new Date("2024-1-6")// yyyy-mm-dd
let myCreatedDate = new Date("1-6-2024")// mm-dd-yyyy


// console.log(myCreatedDate.toDateString()); // Sat Jan 06 2024
// console.log(myCreatedDate.toLocaleString());// 1/6/2024, 5:06:08 AM
// console.log(myCreatedDate.toLocaleString()); // 1/6/2024, 12:00:00 AM
console.log(myCreatedDate.toLocaleString()); // 1/6/2024, 12:00:00 AM

let myTimeStamp = new Date.now()
console.log(myTimeStamp);
