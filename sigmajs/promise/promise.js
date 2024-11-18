console.log('Promise Chapter');

let prom1 = new Promise((resolve,reject)=>{
  let a = Math.random()
  console.log(`Random num : ${a}`);
  if(a<0.5){
    reject('reject 1')
  }else{
    setTimeout(() => {
      console.log('Yes i am done');
      resolve('Aman')
    }, 1000);
  }
  
})


let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
      reject("No random number was not supporting you 2")
  }
  else {
      setTimeout(() => {
          console.log("Yes I am done 2")
          resolve("Harry 2")
      }, 1000);
  }
})

 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})