// for

for(let i = 1; i<10 ; i++){
  const element = i
  if(i==5){
    console.log("5 is the best number");
  }
  console.log(element)
}
// console.log(element);

for(let i=1  ; i<=10 ; i++){
  for(let j=1 ; j<=10 ; j++){
    console.log(`${i} * ${j} = ${i*j}`);
  }console.log("\n");
}


let myArray = ["flash","batman","superman"]

console.log(myArray.length);
for(let index = 0 ; index<myArray.length; index++){
  console.log(myArray[index]);
}


//break and continue

for(let i = 1 ; i<=6 ; i++){
  if(i == 5){
    console.log("5 is a special number");
    // break
    continue
  }console.log(i);
}
