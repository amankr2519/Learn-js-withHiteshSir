// Array destructuring

const arr = [1,2,3]

const[first , second , thrid] = arr

console.log(first,second,thrid)

// Object Destructuring

const person = { name : "Aman ", age : "20"}
const {name : username , age:userage} = person
// console.log(name,age)
console.log(username,userage)



// rest and spread

// spread

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1 ,...arr2]
console.log(arr3)


// rest

const sum = (...numbers) =>{
  return numbers.reduce((acc,curr)=>acc+curr,0)

}

const ans = sum(1,2,3)
console.log(ans);
