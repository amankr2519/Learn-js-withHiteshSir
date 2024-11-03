// for of

// ["","",""]
//[{},{},{}]

const array =  [1,2,3,4,5]

for (const num of array) {
  // console.log(num);
}

const greeting = "Hello"

for (const greet of greeting) {
  // console.log(`each char is ${greet}`);
}

// Map

const map = new Map()
map.set('In' , "India")
map.set('USA','United states of America')
map.set('Fra','France')
map.set('In','India')
map.set('Afg','Afghanistan')
map.set('RU','Russia')
map.set('IR','Iran')

// console.log(map);

for (const [key,value] of map) {
  // console.log(key,':-',value);
}

const myObj = {
  game1 : 'Pubg',
  game2 : 'Free-Fire',
  game3 : 'Call of duty',
  game4 : 'Apex legends'
}

// for of not use for obj

// for (const element of myObj) {
//   console.log(element);
  
// }
