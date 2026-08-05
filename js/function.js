/**
 * Function: Perform specific task
 *
 * function <functionName> (optional parameter) {
 *  // code
 * }
 */

function greetings() {
  console.log("Hello");
}

greetings(); // Function call

function greetUser(name) {
  console.log("Hello " + name);
}

greetUser("Ram");
greetUser("Hari");

function sum(value1, value2 = 10) {
  console.log(value1 + value2);
}

sum(10, 26);

// returns value
function square(value) {
  return value * value;
}

const squaredValue = square(22);

console.log(squaredValue);

// ==========================

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
  greetUser(users[index]);
}
