// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubeName = "AmanGamer"
let anotherYtChannel = myYoutubeName  // It takes Copy of myYoutubeName
anotherYtChannel = "Edcuation"

console.log(myYoutubeName)
console.log(anotherYtChannel);


// Heap

let userOne = {
  name : "Aman",
  age : 20 ,
  email : "ak3230531@gmail.com"
}

let userTwo = userOne // It passes reference 

userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email)
