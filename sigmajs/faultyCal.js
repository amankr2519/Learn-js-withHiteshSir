const cal = (num1 , num2 , opeartor)=>{
  let a = Math.random()
  if(a<0.1){
    if(opeartor == '+'){
      opeartor = '-'
      console.log(num1 - num2);
    }
    if(opeartor == '-'){
      if(num2 == 0 ){
        console.log('cannot divide');return
      }console.log(num1 / num2);
    }
    if(opeartor == '*'){
      console.log(num1 + num2);
    }
    if(opeartor == '/'){
      console.log(num1 ** num2);
      
    }
   
  }else{if(opeartor == '+'){
 
    console.log(num1 + num2);
  }
  if(opeartor == '-'){
    console.log(num1 - num2);
  }
  if(opeartor == '*'){
    console.log(num1 * num2);
  }
  if(opeartor == '/'){
    if(num2 == 0 ){
      console.log('cannot divide');
    }
    console.log(num1  / num2);
  }
  }
}

cal(2,2,'+')

