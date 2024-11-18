console.log('Harry is hacker');
console.log('Aman in hacker');

setTimeout(() => {
    console.log('I am inside the setTimeout');
}, 5000);

setTimeout(() => {
  console.log('I am inside the SetTimeout 2');
  
}, 3000);

console.log('the end');

const fn = ()=> {
  console.log('I am a function');
}

const callback = (arg , fn)=>{
  console.log(arg);
  fn();
}

callback('Aman',fn)

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Aman", fn);
  document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


