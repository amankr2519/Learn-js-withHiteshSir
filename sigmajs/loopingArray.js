const arr = [];

for (let i = 0; i <= 5; i++) {  // This will add elements from 0 to 5
 arr.push(i)
}
console.log(arr);



// for each

arr.forEach((value,index,array) => {
  console.log(`value(${value})  index(${index}) array(${array})`);
  
});

// 'forin' use for object
const obj = {
  name : 'Asha Devi',
  work : 'Business-woman',
}

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key,element);
        
  }
}

// forof used for array
for (const element of arr) {
  console.log(element);
  
}
