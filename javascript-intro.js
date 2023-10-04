// JavaScript Intro

  // Provides interaction with the user
  // Dynamically typed - data types can be changed while they are being used
  // Interpreted language - read at runtime
  // Scripting language - logic can be read and understood by the computer


//____________________
// 6 Primitive Data Types - can't be broken down into a simpler form
  // Numbers - can be integers or floates
    // Integers: whole numbers
    8
    // Floats: decimal
    8.9
    // Basic math operations: add (+), subtract (-), multiply (*), division (/), exponents (**) 2**4
      // modulo (%) - returns remainder of division operation
    // Follows the order of operations (PEMDAS)

  // Strings - characters stored inside quotes
    // Properties: length, location of characters
      // Zero-indexing - count starts at 0
      "hello" // h is at 0 index


  // Boolean - True or False value
    // Often used for comparisons


  // Undefined - value of a variable that has been declared but not yet assigned

  // Null - equal to nothing, the lack of value

  // Symbol - unique keys

//____________________
// Variables - stores information
  // Anything saved in a variable has to be a data type
  // Declare variable: var, let, const
  // Variable names camelCase

const myName = "Elyse"
console.log(myName)

// const variable cannot be reassigned
// myName = "Elsa"
// console.log(myName)

// To run your code in the terminal: $ node file-name

// let and var allows variables to be reassigned
let yourName
console.log(yourName) // undefined
yourName = null
console.log(yourName) // null
yourName = "Franz"
console.log(yourName) // Franz
yourName = "Corey"
console.log(yourName) // Corey


//____________________
// String Methods and Properties

// Length Property
console.log("golf".length) // 4
console.log("Golf is pretty awesome!!".length) // 24

// Extracting Characters Using Index
console.log("Hello"[0]) // H
console.log("Hello"[1]) // e
console.log("JavaScript"[6]) // r

// Bracket notation allows us to extract a character from a specific index

//____________________
// Built in Methods - bits of code functionality that are shortcuts 
  // Designed for a particular action ON a specific data type
  // Written with dot notation and parenthesis after that can provide additional information if necessary

let greeting = "hello"

// upcase all letters in string:
console.log(greeting.toUpperCase()) // HELLO

// returns the character that is at a particular index
console.log(greeting.charAt(1)) // e

// returns the first index of a particular character
console.log(greeting.indexOf("e")) // 1
console.log(greeting.indexOf("l")) // 2

// returns a Boolean value on whether a subset of characters exist in the string
console.log(greeting.includes("he")) // true
console.log(greeting.includes("ho")) // false
console.log(greeting.includes("hi")) // false

// returns a subset of a string based on a starting and ending index
console.log(greeting.slice(1, 3)) // el
console.log(greeting.slice(1, 4)) // ell
console.log(greeting.slice(1, 5)) // ello
console.log(greeting.slice(1)) // ello