// const tinderUser = new Object();
// console.log(typeof tinderUser);

const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "Aayush"
tinderUser.loggedin = true

// console.log(tinderUser)

const regularUser = {
  email  : "some@google.com",
  fullname: {
    userfullname: {
        firstname: "hitesh",
        lastname: "choudhary"
    }
}
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)
let obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3);
// console.log(obj3[1]);


const users = [
  {
      id: 1,
      email: "1@gmail.com"
  },
  {
      id: 2,
      email: "2@gmail.com"
  },
  {
      id: 3,
      email: "3@gmail.com"
  },
]

console.log(users[1].email)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
  keyname : "value"
}

console.log(course.courseInstructor);
// Destructure
const {keyname : variable} = course // object name
console.log(variable);


[
  {},
  {},
  {}
]

var obj = {
  "name" :"Aman",
  "course" :"js-tutorial",
  "price " : "free"
}
