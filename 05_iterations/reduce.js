const mynums = [1,2,3,4,5]

// const total = mynums.reduce(function(acc,current_value){
//   console.log(`${acc} : ${current_value}`);
//   return acc + current_value
// },0)

// console.log(total);


const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const pricetopay = shoppingCart.reduce(function(acc,curr){return acc + curr.price},0)

console.log(pricetopay);



