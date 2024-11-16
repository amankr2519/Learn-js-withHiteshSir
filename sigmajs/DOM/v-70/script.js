const randomNum = Math.floor(Math.random()*101)

console.log(randomNum)
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green";
// }) 

if(randomNum<=20){
  alert(randomNum)
  document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "red";
}) 
}else if(randomNum>20 && randomNum<=40){
  alert(randomNum)
  document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 
}else if(randomNum>40 && randomNum<=60){
  alert(randomNum)
  document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "blue";
}) 
}else if(randomNum>60 && randomNum<=80){
  alert(randomNum)
  document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "orange";
}) 
}else if(randomNum>80 && randomNum<=100){
  alert(randomNum)
  document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "magenta";
}) 
}
