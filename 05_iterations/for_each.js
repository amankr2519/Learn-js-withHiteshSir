const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val){
//   console.log(val);
// })

// coding.forEach((val)=>{
//   console.log(val);
// })

// function printme(val){
//   console.log(val);
  
// }

// coding.forEach(printme) // i have to give just reference only

coding.forEach((item,index,arr)=>{
  // console.log(item ,":",index,"->",arr)
})


const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]

myCoding.forEach((item)=>{
  console.log(item.languageFileName);
})


