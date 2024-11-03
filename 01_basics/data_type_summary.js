// Primitive

//  7 types : String , Number , Boolearn , undefined , null , BigInt ,Symbol

const score = 100
const scoreValue  = 100.4

const isLogged = true 
const outsideTemp = null 
let useremail;

const id = Symbol('123')
const value = Symbol('123')

console.log(id === value);
const bigNumber = 371073895791203n
// console.log(typeof bigNumber);


// Reference (Non-primitive)
// Arrays , Objects ,Fuction 


const heros = ["Spiderman","Batman","Superman","Hulk","Thor"]
let myObj = {
  name : "Aman",
  age : 20,
}

const myFuction = function (){
  console.log("Myfunction")
}

console.log(typeof myFuction) //fun
console.log(typeof myObj) //obj
console.log(typeof heros) //obj
