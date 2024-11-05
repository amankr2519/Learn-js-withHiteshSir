// Spread in array
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1 ,...arr2]
console.log(arr3);

// in objects

const user = { name: "Aman", age: 20 };

const updatedUser = {...user , age :21}

console.log(updatedUser);


// Rest operator

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6


const { name, ...otherInfo } = user;
console.log(otherInfo); // Output: { age: 20 }

// export

export const pi = 3.14

export const addNum = (num1 ,num2)=>{
  return num1 + num2
}
