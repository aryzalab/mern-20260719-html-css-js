/**
 * Template literals
 * Spread/Rest operator
 * Array/Object Destructuring
 * Arrow function
 * Array methods
 */

const name = "Rohan";
const age = 30;
const address = "KTM";

console.log(
  "Hello I am " +
    name +
    " and I am " +
    age +
    " years old. I live in " +
    address,
);

// Template literals
console.log(
  `Hello I am ${name}.
I am ${age} years old. 
I live in ${address}.
`,
);

// Spread operator: Data copy (array, object)

const list1 = [3, 124, 5423, 3456, 4567, 56785];
const list2 = [67, 54, 2345, 8, 9, 8, 34, 235, 869, 7];

const list3 = [...list1, ...list2];
console.log(list3);

const obj1 = {
  name: "ram",
  age: 40,
  address: "Pokhara",
};

const obj2 = {
  school: "Saraswati School",
  class: 10,
  section: "A",
};

const obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);

// Destructuring

const student = {
  faculty: "BSC",
  year: 2,
  semester: "Third",
  batch: 2026,
};

// const faculty = student.faculty;
// const year = student.year;
// const joinedBatch = student.batch;

// Object destructuring
const { faculty, semester, batch: joinedBatch, year } = student;

console.log(faculty);
console.log(joinedBatch);

const listItem = ["Ram", "Sita", "Hari", "Rohan"];

// const name1 = listItem[0];
// const name2 = listItem[1];

const [name1, name2, name3, name4] = listItem;

console.log(name1);
console.log(name2);
console.log(name4);

const numList = [24, 6, 645, 667, 85, 45, 356, 467, 78, 56, 45, 635];

// Rest operator
const [num1, num2, num3, ...num4] = numList;

console.log(num1, num2, num3, num4);

const [num41, num42] = num4;

console.log(num41, num42);

const pupil = {
  faculty: "BSC",
  batch: 2026,
  year: 2,
  semester: "Third",
};

const { batch, ...mydata } = pupil;

console.log(mydata);

// function greetings(name) {
//   console.log(`Hello ${name}`);
// }

// Arrow function
const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Ram");
greetings("Hari");

// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => a + b;

console.log(sum(34, 34));

(a, b) => a * b;
