let object = {
  name : 'Aman',
  enrollment_no : 123,
  branch : 'Aiml b2'
}

// object = [1,2,3,4]

firstName = 'Aman'

for (const key in object) {
  // if (Object.prototype.hasOwnProperty.call(object, key)) {
    
  // }
  const element = object[key];
  console.log(element)
}


// for of use for iterable items like array and string 

for (const element of firstName) {
  console.log(element);
  
  
}
let i = 1
while (i<10) {
  console.log(i);
  i++
  
}

// do{
//   // condition
// }while()