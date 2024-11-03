const name = "Aman"
let repoCount = 5 

// use backticks `for concatinating`

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("thunder-war")

// console.log(gameName[0])
console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,8)
console.log(newString)

const sliceString = gameName.slice(-5,-1)
console.log(sliceString)

const newStringOne = "        Aman      "
console.log(newStringOne.trim())

const url = "https://aman@google.com/aman%20Kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('aman'));


// String To Array

console.log(gameName.split('-'));




