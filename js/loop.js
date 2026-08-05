/**
 * Loop: repeat, round and round
 * for (entry control)
 * while
 * do-while (exit control)
 */

console.log(1 * 1);
console.log(2 * 2);
console.log(3 * 3);

/**
 * For loop
 *
 * for(start ; condition ; increment/decrement) {
 * // code
 * }
 */

console.log("============== FOR ================");

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

console.log("============== WHILE ================");

// While loop
let i = 1;

while (i <= 10) {
  console.log(i * i);

  i++;
}

console.log("============== DO WHILE ================");

let j = 100;

do {
  console.log(j * j);

  j++;
} while (j <= 10);

/**
 * Array methods:
 * forEach
 * map
 * filter
 * reduce
 * find
 * sort
 * includes
 * some
 * every
 */

const users = [
  "Ram",
  "Shyam",
  "Hari",
  "Rohan",
  "Raj",
  "Mohit",
  "Suraj",
  "Arun",
  "Ajay",
  "Ramesh",
  "Raju",
  "Sita",
  "Janak",
];

for (let index = 0; index < users.length; index++) {
  console.log(users[index]);
}
