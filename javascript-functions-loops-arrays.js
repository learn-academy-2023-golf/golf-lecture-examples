// JavaScript Functions, Loops, and Arrays

// Array: Collection of data elements
let myArr = [1, "hello", true, null]
myArr[1]
// Zero indexing

// Loops: Iteration

// Starting point
// Ending point
// How you want to increment between

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

// for(let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i])
// }

// Functions: little coding machine - reusable block of code

  // Variable declartion - const
  // Arrow syntax - () => {}
  // Return
  // Invoke

// const myFunction = () => {
//   for(let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i])
//   }
// }

// console.log(myFunction()) // Gives back result plus undefined

// const myFunction = () => {
//   for(let i = 0; i < myArr.length; i++) {
//     return myArr[i]
//   }
// }

// console.log(myFunction()) // 1

// Functions, Loops, and Arrays

// Prompt: Create a function that takes in an array of numbers and multiplies each number by 5

// let myArrayOfNumbers = [2, 3, 4, 5, 6]
// Expected Output: [10, 15, 20, 25, 30]

// Pseudocode
// Create a function called mult5
// input: array
// output: array with each number multiplied by 5
// We are going to want to iterate over the array
// create a variable to hold any updates in the for loop
// when iterating, use push method to update variable with the current value * 5


// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++){
//     console.log(array[i] * 5)
//   }
// }

// console.log(mult5(myArrayOfNumbers)) // NaN



// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++){
//     return array[i] * 5
//   }
// }

// console.log(mult5(myArrayOfNumbers)) // 10

let myArrayOfNumbers = [2, 3, 4, 5, 6]

const mult5 = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 5)
  }
  return newArray
}

console.log(mult5(myArrayOfNumbers)) // [ 10, 15, 20, 25, 30 ]
console.log(mult5([20, 30, 40])) // [ 100, 150, 200 ]


// Prompt: Create a function that takes an array of strings and adds additional information into the string

// Pseudocode
// input: array, array of strings
// output: array, set of strings that includes the value with additional content
// create a function called coffeeShop
// parameter will be called array
// iterate over array using a for loop
  // access the value of each individual string
  // use string concatenation or interpolation to add "I would like a ..."
  // create a variable to store the updated strings in an array
  // Use push method to update variable
  // return variable


let coffees = ["black", "hazlenut", "latte", "cold brew"]
// Expected output: ["I would like a black coffee", "I would like a hazlenut coffee", "I would like a latte coffee", etc]
let teas = ["matcha", "peppermint", "sweet", "london fog"]
// Expected output: ["I would like a matcha tea", "I would like a peppermint tea", etc]

const coffeeShop = (array) => {
  let orders = []
  for(let i = 0; i < array.length; i++) {
    orders.push(`I would like a ${array[i]}`)
  }
  return orders
}

console.log(coffeeShop(coffees))
// [
//   'I would like a black',
//   'I would like a hazlenut',
//   'I would like a latte',
//   'I would like a cold brew'
// ]
console.log(coffeeShop(teas))
// [
//   'I would like a matcha',
//   'I would like a peppermint',
//   'I would like a sweet',
//   'I would like a london fog'
// ]

// To allow more specific order, we can use a conditional to check if it is a tea or coffee
