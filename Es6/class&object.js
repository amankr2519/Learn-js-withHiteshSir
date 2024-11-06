//  class and object 

class customer{

  constructor(n){
    this.name = n 
  }

  // ES7
  age = 20

  // method -> fn 
 buy= ()=>{
  console.log(this.name);
 }
  
}

class guestCustomer extends customer{
  hello(){
    console.log('Hello');
  }
}

// let customer1 = new customer('Aman')

// console.log(customer1);
// customer1.buy()


let guest = new guestCustomer('Aman')
console.log(guest);
guest.buy()
