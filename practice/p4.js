// looping through Array 

      //forEach
// it calls a function for every element in an array 

const a = [1,2,3,4,5]
a.forEach((value,index,array)=>{
  console.log(value,index,array)
})


// map
const result = a.map((value)=>{
  return value **2
})

console.log(result)


// filter

const b = [1,2,3,4,5]
const result1 = b.filter((value,index,array)=>{
  if(value>2&& index>2){
    return b
  }
})

console.log(result1);



// reduce

const n = [1,2,3,4,5]
let sum = n.reduce((prev,next)=>{
  return prev = prev + next
},0)
console.log(sum)


//product of numbers by reduce

let product = n.reduce((acc,curr)=> acc*curr,1)
console.log(product);


// flattted an array by reduce 

const nested = [[1,2],[3,4],[5,6]]

const flat = nested.reduce((acc,curr)=> acc.concat(curr),[])

console.log(flat)


// count occurances

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc,curr)=>{
  acc[curr] = (acc[curr]|| 0) +1
  return acc
},{})
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }
