const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
  }

}

// user.welcomeMessage()
// user.username = "Ramesh"
// user.welcomeMessage()

// console.log(this) // browser -> window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(username);
// }
// chai()


// const chai =  () => {
//   let username = "hitesh"
//   console.log(this);
// }

// chai()

// const addTwo = (num1,num2)=>{
//   return num1 + num2
// }

// console.log(addTwo(10,10));


const addOne = (num1 ) => num1 +1
const addThree = (num1 , num2 , num3 ) => (num1 + num2 + num3)

const addTwo = (num1,num2) => ({username : "Aman"})


addTwo("name" ,"hello")
console.log(addTwo("name" ,"hello"))
console.log(addTwo(3,4))

