// If-else statement
/**
  if (condition) {
    // code
  } else {
    //code
  }
 */

const age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are child.");
}

// If-else ladder

if (age >= 0 && age <= 4) {
  console.log("Infant");
} else if (age >= 5 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 50) {
  console.log("Adult");
} else if (age >= 51) {
  console.log("Elderly");
} else {
  console.log("Invalid age");
}

const gender = "M";

// Nested if-else
if (age >= 18) {
  if (gender == "M") {
    console.log("You are a Male adult.");
  } else if (gender == "F") {
    console.log("You are a Female adult.");
  } else {
    console.log("You are gender neutral adult.");
  }
} else {
  console.log("You are child.");
}

const num = -3211;

if (num >= 0) {
  console.log("Positive number");

  if (num % 2 == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
} else {
  console.log("Negative number");

  if (num % 2 == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

// Switch
switch (gender) {
  case "M":
    console.log("Male");
    break;
  case "F":
    console.log("Female");
    break;
  default:
    console.log("Gender neutral");
    break;
}

// Ternary operator => condition ? true case : false case
age >= 18 ? console.log("You are an adult.") : console.log("You are child.");
