let n = 5 
// factorial by loop
// let factorial = 1
// for(let i = 1 ; i<=n ; i++){
//   factorial = factorial * i
// }
// console.log(factorial);



// by reduce 

function factorial(num){
  let arr = Array.from(Array(num+1).keys())
  let c = arr.slice(1,).reduce((a,b)=> a*b)
  return c 
}

let result = factorial(n)
console.log(result);


