// Javascript Functions 

// Variables
  // Place to store data
  // Reassignable:
    // var: global scope

// for(let i = 0; i < 10; i++) {
//   var myCat = "Tobey"
//   console.log(i)
// }
// console.log(myCat) // Will log Tobey


    // let: function and block scope

// for(let i = 0; i < 10; i++) {
//   let myCat = "Tobey"
//   console.log(i)
// }

// console.log(myCat) // Throws an error
  // Cannot reassign:
    // const


// ________________
// Functions - reusable blocks of code
  // Main job is to sometimes recieve an input, do an action, produce an output

// Variable declaration: const declaration so it cannot be redeclared or reassigned
// Arrow syntax
  // () - funnel that we can pass data through
  // => - replaces the keyword function
  // {} - action / block of code to be executed
    // return

// () => {}

const myFunction = () => {
   "output"
}

// Invoke or call function:
console.log(myFunction()) // undefined

const mySecondFunction = () => {
  return "output"
}

// Invoke or call function:
console.log(mySecondFunction()) // output


// const makeCoffee = () => {
//   return "Coffee is made!"
// }

// console.log(makeCoffee()) // Coffee is made!
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())


// _____________________________
// Parameters and Arguments
  // Functions can take inputs
  // Encapsulation: code should only have access to information the developer decides
  // Parameters: special variables that accept an input in a function
  // Arguement: the value assigned to the the parameter
// const myExampleFunction = (parameter) => {
//   return parameter
// }

// myExampleFunction(arguement)

// const parameter = argument

// const coffeeType = "latte"
const makeCoffee = (coffeeType) => {
  return `Enjoy your ${coffeeType}`
}
// console.log(coffeeType) // Throws error since we are outside the function

console.log(makeCoffee()) // Enjoy your undefined
console.log(makeCoffee("Vietnamese Coffee")) // Enjoy your Vietnamese Coffee
console.log(makeCoffee("English Breakfast")) // Enjoy your English Breakfast

//___________________
// Pseudocode - is the term for writing process notes in plain english
  // breaks problems down into smaller pieces

// Inputs and outputs
// Steps in between to provide proper output

// Prompt: Create a function that takes a coffee type and a size, then returns a statement with the appropriate price

// create a function called coffeeShop
// input: coffeeType (string), size (string)
// output: string - "Your (size) (coffeeType) is $(amount)"
  // Determine set prices: small - $3, medium - $4, large - $5
// Use conditional statement to make an evaluation on the size
  // If size evaluates to large - it will cost $5 ✅
  // If the size evaluates to medium - it will cost $4 ✅
  // If the size evaluates to small - it will cost $3  ✅
  // If none of the above are true - return a string asking for a different input

const coffeeShop = (coffeeType, size) => {
  if(size === "large") {
    return `Your ${size} ${coffeeType} is $5`
  } else if(size === "medium") {
    return `Your ${size} ${coffeeType} is $4`
  } else if(size === "small") {
    return `Your ${size} ${coffeeType} is $3`
  } else {
    return `We do not carry ${size}.  Please order a small, medium or large.`
  }
}

console.log(coffeeShop("Caramel", "large")) // Your large Caramel is $5
console.log(coffeeShop("Mocha", "medium")) // Your medium Mocha is $4
console.log(coffeeShop("Decaf", "small")) // Your small Decaf is $3
console.log(coffeeShop("Green tea", "Xl"))