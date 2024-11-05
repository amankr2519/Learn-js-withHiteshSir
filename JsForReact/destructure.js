// Array Destructure
const numbers = [1,2,3,4]
const [first,second,third] = numbers

console.log(first);
console.log(second);
console.log(third);

// Object Destructure

const person = { name : "Aman" , age : 20}
const { name , age} = person
console.log(name)
console.log(age)

const { name : username ,  age : userage} = person
console.log(username);



