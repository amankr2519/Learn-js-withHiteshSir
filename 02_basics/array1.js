// array

const myArr = [0,1,2,3,4,5]

const myHeros = ["Superman","Spiderman","Batman"]

const myArr2 = new Array(0,1,2,3,4,5)

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);


// unshift and shift

// myArr.unshift(101)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr2.includes(0))
// console.log(myArr2.indexOf(5));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);


// slice 
console.log("A",myArr);

const n1Arr = myArr.slice(1,4)
console.log(n1Arr);

console.log("B",myArr);

const n2Arr = myArr.splice(1,4)
console.log(n2Arr);


console.log("C",myArr);
