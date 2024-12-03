const prompt = require('prompt-sync')();

let input = prompt('Enter the number: ');
input = parseInt(input);

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    console.log('*',);
  }
 console.log(i)
}