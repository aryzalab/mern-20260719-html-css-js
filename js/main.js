// print
console.log("Hello world");
console.info("Info: JS is Awesome");
console.warn("Warning: JS is not CPU friendly.");
console.error("Error: Page not found.");

// Variable: Memory element : const, let, var
// Syntax: const/let/var variableName = value;

const username = "Hari";
let age = 30;
var address = "Dharan";

console.log(username); // Hari
console.log(address);
console.log(age); // 30

age = 40;
age = "Ram";

console.log(age); // Ram

var address = 20;

console.log(address);

// Data types
/**
 * 1. String: "Ram", "Hari", "Dharan", "ram@gmail.com"
 * 2. Number: 23, 45.234, -13234,
 * 3. Boolean: true, false
 * 4. Array: [123,45,3425,"Ram"]
 * 5. Object: {name:"ram", age:20}
 * 6. null/undefined
 * 7. BigInt
 */

const test1 = "Ram"; //string
const test2 = "ram@gmail.com";
const test3 = 10; //number
const test4 = "10"; //string
const test5 = true; //boolean

console.log(test4);

const list = [
  34,
  12,
  "Ram",
  true,
  false,
  "Dharan",
  "ram@gmail.com",
  [234, 435, 34, 76, 5689],
  { name: "ram" },
];

console.log(list[2]);
console.log(list[4]);
console.log(list[7][2]);
console.log(list[8].name);

// Object
const user = {
  name: "John",
  email: "john@gmail.com",
  phone: [987534235, 9812431345],
  age: 34,
  isMale: true,
  address: {
    city: "Pokhara",
    country: "Nepal",
    street: "Prithvi Chowk",
  },
};

console.log(user);
console.log(user["email"]);
console.log(user["age"]);
console.log(user.name);
console.log(user.address.country);
console.log(user["address"]["country"]);
console.log(user.phone[1]);

// Operators
/**
 * 1. Arithematic operator: +, -, *, /, %, ++, --, **
 * 2. Relational operator: >, <, >=, <=, ==, !=, ===, !==
 * 3. Logical operator: && (AND), || (OR), ! (NOT)
 * 4. Ternary operator: condition ? true : false
 */

// Arithematic operator
console.log(432 + 34);
console.log(432 - 34);
console.log(432 * 34);
console.log(432 / 34);
console.log(432 % 34);
console.log(5 % 2);
console.log(2 ** 3);

let value = 10;
value++; // 11

console.log(value); // 11

value--; // 10

console.log(value); // 10

console.log("Ram" + 34); // Ram34 (append/concatenation)
console.log("Ram" + "Rohan");
console.log("Ram" - "Rohan"); // Not a Number (error)
console.log("20" + 11); // 2011 (String)
console.log("20" - 11); // 9 (Number)

// Relational operator

console.log(54 > 43); // true
console.log(54 < 43); // false
console.log(54 > 54); // false
console.log(54 >= 54); // true
console.log(54 == 53); // false
console.log(54 != 53); // true
console.log(54 == "54"); // true
console.log(54 == "543"); // false
console.log(54 === "54"); // false
console.log(54 === 54); // true
