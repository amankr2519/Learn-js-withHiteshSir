let MyDate = new Date()
// console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toJSON());

// console.log(typeof MyDate);

// let myCreateDate  = new Date(2024,11,21)
let myCreateDate  = new Date(2024,11,21,1,56)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

// "MM-DD-YY"

let myTimestamp = Date.now()
// console.log(myTimestamp);  // print milliseconds since 1970 jan
// console.log(myCreateDate.getTime());  // for comparison we use .getTime() -> it also print in milliseconds

// console.log(Math.floor(Date.now()/1000)); // mili sec to sec

let newDate = new Date()
// console.log(newDate.getMonth()+10);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
  weekday : "long",

})






