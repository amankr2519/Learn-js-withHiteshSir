const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][4]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const one_array = another_array.flat(Infinity)
// console.log(one_array);



// console.log(Array.isArray([]));
// console.log(Array.from("Aman"));
// console.log(Array.from({name: "Aman Kumar"}));


// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));

// console.log(Array.of(score1, score2, score3));

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
 // .concat() returns a new it doesn't change the orignal array
console.log(a1.concat(a2,a3));
