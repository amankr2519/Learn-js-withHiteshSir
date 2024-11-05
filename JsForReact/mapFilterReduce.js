// Map

const array = [1,2,3,4,5]

const doubled = array.map((num)=>{
  num = num * 2
  return num
})

console.log(doubled)

// Filter

const evenNo = array.filter((num)=>{
  num = num % 2 == 0 
  return num 
})

console.log(evenNo)

// reduce 

const total = array.reduce((previousValue,currentValue)=>{
  previousValue = previousValue + currentValue
  return previousValue
},0)

console.log(total)


const people = [
  { name: "Aman", age: 20 },
  { name: "John", age: 25 },
  { name: "Jane", age: 18 },
  { name: "Mary", age: 30 }
];

const test = people
                  .filter((person) => person.age >21).map((person)=> person.name)

console.log(test);


// find 

const findbyname = people.find(obj => obj.name === "Aman")

console.log(findbyname);


// for each

const fruits = ["apple", "banana", "orange"];

fruits.forEach((item)=>{console.log(item);
})




