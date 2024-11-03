// singleton
// Object.create()

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym] : "key1" ,
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
console.log(JsUser["full name"]);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser.location)
// console.log(JsUser[mySym])

JsUser.email = "aman@google.com"
// Object.freeze(JsUser)
JsUser.email = "aman@microsoft.com"
// console.log(JsUser);




JsUser.greeting = function(){
  console.log(`Good Morning`);
  
}
JsUser.greetingTwo = function ()  {
  console.log(`Hello ${this.name}`);
  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());