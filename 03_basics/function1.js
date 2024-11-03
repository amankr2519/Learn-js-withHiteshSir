function sayMyName(){
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName()

function addTwoNumbers(num1 ,num2){
  return num1 + num2
}

const result = addTwoNumbers(3, 5)
console.log(result);


// function loginUser(name ){
//   if(!name){
//     console.log("enter a user name");
//     return
//   }
//   return `${name} logged in`
// }

// console.log(loginUser())

function loginUser(name = 'defaultUser'){
  if(!name){
    console.log("enter a user name");
    return
  }
  return `${name} logged in`
}

console.log(loginUser("Aman"))

function calCarPrice(va1 , val2 , ...num1){ //rest parameter ...num1
  return num1
}
console.log(calCarPrice(4,5,6,7,9,56))


// obj in function

const obj = {
  userName : "Aman",
  price : 99
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.userName} and the price is ${anyobject.price}`);
}

// handleObject(obj)
handleObject({
  userName : "Rahul",
  price : 100
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue([100,200,400,600]));

