// JavaScript Conditionals

// Evaluations
  // Strict Equality Operator ===
    // Checks data type and value

let myName = "Elyse"
console.log("Elyse" === myName) // true

let myFavNum = 7
console.log(myFavNum === 7) // true
console.log(myFavNum === 8) // false
console.log(myFavNum === "7") // false

  // Loose equality ==
    // Check only the value
    // Uses type coercion when necessary
      // Type coercion is the process of converting a value from one type to another

console.log(myFavNum == "7") // true

// Strict equality is best practice


  // Relational Operators
    // Checks if a value is greater than or less than <, >, <=, >=
console.log(3 > 4) // false
console.log(3 < 4) // true


  // Logical Operators
    // Logical AND &&
      // Combines multiple evaluations and ALL must be true to evaluate entire statement as true

let greeting = "hello"
let num = 6
let myCat = "Tobey"

console.log(num > 2 && "hello" === greeting) // true
// num > 2 -> true
// "hello" === greeting -> true
// true + true = true
console.log(num < 2 && "hello" === greeting) // false
// false + true = false

      // Logical OR ||
console.log(num < 2 || "hello" === greeting) // true
// false + true = true
console.log(num < 2 || "hi" === greeting) // false
// false + false = false

console.log(num < 2 || "hello" === greeting && myCat === "Tobey") // true


  // Negation
    // We can negate a statement by using the Bang Operator !

console.log(num !== greeting) // true

// If/Else
  // Creates code that executes an output based on an evaluation

  // if(condition is true) {
  //   do this action
  // }

if(true) {
  console.log("I'm true")
}
// I'm true

if(false) {
  console.log("You can't see me cause I'm false!")
} else {
  console.log("Here is the else")
}
// Here is the else


let yourName = "Derek"
if(yourName === "Derek") {
  console.log("Hey Derek!")
} else {
  console.log("Hey!")
}
// Hey Derek!

yourName = "Jacob"
if(yourName === "Derek") {
  console.log("Hey Derek!")
} else {
  console.log("Hey!")
}
// Hey!

// _________________
// Else if

// string interpolation - allows javascript variables to be injected into a string ``

let num1 = "Hi"
let num2 = 8

if(num1 > num2) {
  console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2) {
  console.log(`${num1} is less than ${num2}`)
} else if(num1 === num2) {
  console.log(`${num1} and ${num2} are the same`)
} else {
  console.log("Invalid entry")
}

// 24 is greater than 8
// 4 is less than 8
// 8 and 8 are the same
// Invalid entry