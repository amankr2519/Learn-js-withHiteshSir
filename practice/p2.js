// function 

function greet(){
  console.log('Good morning');
  
}

function num(i){
  console.log(i);
  greet() // function invocation
}

num('Aman')


//Arrow function 

const sum = (a,b)=>{
  return a+b
}

console.log(sum(1,2))

const obj = {
  harry : 98,
  rohan : 70,
  aakash : 7,
}

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(element);
    
  }
}