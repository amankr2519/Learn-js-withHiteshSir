const arr = [1,2,3,4,5]

// map 
const arr1 = arr.map(e => e*e)
console.log(arr);
console.log(arr1);

// filter

const arr2 = arr.filter(e => e>2)
console.log(arr2);

//reduce

const arr3 = arr.reduce((prev,curr)=> prev+curr,0)
console.log(arr3);





