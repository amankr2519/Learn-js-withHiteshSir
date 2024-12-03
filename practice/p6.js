function greet(callback,name){
 setTimeout(() => {
  console.log('Hello World')
  callback(name)
 }, 2000);
}

const displayName = (name)=> console.log(name)

greet(displayName,'Aman')
console.log('testing.........')


//Asynchronus javascript

console.log('start')

setTimeout(() => {
  console.log('inside the timeout')
}, 1000);

console.log('end')


//Promise

const fetchdata = new Promise((resolve,reject)=>{
  setTimeout(() => {
    const sucess = false
    if(sucess){
      resolve('Data fetched successfully')
    }else{
      reject('Error fetching data')
    }
  }, 2000);
})

fetchdata
  .then((result)=>{
    console.log(result)
  })

  .catch((error)=>{
    console.log(error)
  })


// Async Await

const getdata =()=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('Data fetched .......')
    }, 2000);
  })
}

const displayData = async ()=>{
  console.log('Start fetching.....')
  const data = await getdata()
  console.log(data)
  console.log('done..........')
}

displayData()