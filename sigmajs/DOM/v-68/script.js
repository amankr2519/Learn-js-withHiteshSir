console.log("Aman")

let boxes =   document.getElementsByClassName("box")
console.log(boxes);

boxes[2].style.backgroundColor = 'red'

document.getElementById("redbox").style.backgroundColor = "pink"


console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
  e.style.backgroundColor = "orange";
}) 

document.querySelector(".box").style.backgroundColor = "green";



