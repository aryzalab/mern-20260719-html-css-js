/**
 * for of
 * foreach
 * map
 * filter
 * sort
 * find
 * includes
 * some
 * every
 * reduce
 */

const list = [35, 32, 56, 9, 34, 23, 45, 67, 89, 90, 12, 34, 56, 78, 90];

// I want an array of numbers with double the value of each item in the above list

// for loop solution =========
const doubleList = [];

for (let i = 0; i < list.length; i++) {
  doubleList.push(list[i] * 2);
}

console.log(doubleList);

// for of solution ===========
const forOfdblList = [];

for (const item of list) {
  forOfdblList.push(item * 2);
}

// foreach solution =======
const foreachdblList = [];

list.forEach((item) => {
  foreachdblList.push(item * 2);
});

// map solution =========
/**
 * Map: array.map() => array
 *
 * [a,b,c]=> map => [x,y,z]
 */

console.log("map solution");

const mapdblList = list.map((listItem) => listItem * 2);

console.log(mapdblList);

/**
 * Fiter: array.filter() => array
 * [a,a,b,a,c] => filter(a) => [a,a,a]
 */

const filteredList = list.filter((item) => item % 2 != 0);

console.log(filteredList);

// console.log(list.filter((item) => item.toString().startsWith("3")));

/**
 * Find: array.find() => value
 */

const foundItem = list.find((item) => item == 90);

console.log(foundItem);

// list of 10 students with name, gender, age, gpa
const students = [
  { name: "John", gender: "male", age: 20, gpa: 3.5 },
  { name: "Jane", gender: "female", age: 22, gpa: 3.8 },
  { name: "Bob", gender: "male", age: 21, gpa: 3.2 },
  { name: "Alice", gender: "female", age: 23, gpa: 3.9 },
  { name: "Mike", gender: "male", age: 24, gpa: 3.1 },
  { name: "Sara", gender: "female", age: 20, gpa: 3.7 },
  { name: "Tom", gender: "male", age: 22, gpa: 3.4 },
  { name: "Emily", gender: "female", age: 21, gpa: 3.6 },
];

const foundStudent = students.find((student) => student.gpa == 3.9);

console.log(foundStudent);

console.log(students.filter((student) => student.gender == "male"));

/**
 * Includes: Exact match
 * Some: Some match
 * Every: every match
 *
 * All of the above three methods return boolean result
 */

console.log(list.includes(90));

console.log(list.some((item) => item > 50));

console.log(list.every((item) => item > 50));

console.log(students.some((std) => std.gender == "male"));

console.log(students.every((std) => std.gender == "male"));

// sort

list.sort((a, b) => a - b); // ascending

console.log(list);

list.sort((a, b) => b - a); // descending

console.log(list);

students.sort((a, b) => a.name.localeCompare(b.name)); // asc

console.log(students);

students.sort((a, b) => b.name.localeCompare(a.name)); // desc

console.log(students);

// Reduce

const numbers = [3, 5, 7, 8, 2, 8, 2, 7, 9, 2, 7, 9, 2, 7, 9, 3];

// Total some of all numbers in this array

let total = 0;

for (const item of numbers) {
  total = total + item;
}

console.log(total);

const reducedTotal = numbers.reduce((total, item) => {
  total = total + item;

  return total;
}, 0);

console.log(reducedTotal);
