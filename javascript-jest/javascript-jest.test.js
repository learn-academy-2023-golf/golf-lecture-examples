// JavaScript Jest

  // Jest - JavaScript testing framework
  // Framework - collection of files that are managed by yarn
  // Yarn - package manager for your code
    // Package - code shared by other developers

  // To install jest dependencies: yarn add jest
    // ensure you are within the folder that you wish to write your tests NOT the repo level

  // node_modules: thousands of folders and files that make up the framework we are using
  // package.json: contains information about dependencies
  // yarn.lock: source of information about the current versions of dependencies

// TDD - Test Driven Development - red-green-refactor
  // Write the test first
  // Run the testing suite to see a failing test (good failure)
  // Write the code
  // Run the testing suite to see your test pass 
  // Refactor if necessary

// _______________________
// Create a function called greeter that returns a string that says "Hi Golf 2023!"

// input: none
// output: "Hi Golf 2023!"

// Describe - function name
// It - description of what the test does
// Expect - asserting that when I run the function I get a specific output

// () => {} = anonymous function

// describe method lists the name of the function
describe("greeter", () => {
  // nested inside the describe block, it in plain words describes what the function does
  it("returns a string that says 'Hi Golf 2023!'", () => {
    // expect will invoke the function and compare the result to a predetermined expected output using .toEqual matcher
    expect(greeter()).toEqual("Hi Golf 2023!")
  })
})

// greeter() === "Hi Golf 2023!"
// Run file with: yarn jest

// ReferenceError: greeter is not defined - good failure!

const greeter = () => {
  return "Hi Golf 2023!"
}

// PASSED!

// _______________
// Prompt: Write a function that logs 'help others' if you do understand, or 'ask questions' if you do not understand

// input: "yes"
// output: "help others"

// input: "no"
// output: "ask questions"

// Template:
// describe("functionName", () => {
//   it("description of function from prompt", () => {
//     expect(functionName("argument")).toEqual("Expected Output")
//   })
// })

describe("doYouUnderstand", () => {
  it("logs 'help others' if you do understand, or 'ask questions' if you do not understand", () => {
    expect(doYouUnderstand("yes")).toEqual("help others")
    expect(doYouUnderstand("no")).toEqual("ask questions")
  })
})

// ReferenceError: doYouUnderstand is not defined - Good failure!

// Pseudocode
// Create a function called doYouUnderstand
// One parameter: string
// Write a conditional to evaluate if string equals "yes"
  // return "help others"
// Otherwise evaluate if string equals "no"
  // return "ask questions"

const doYouUnderstand = (string) => {
  if(string === "yes") {
    return "help others"
  } else if(string === "no") {
    return "ask questions"
  }
}


// __________________
// Prompt: Create a function that takes in an array and a string and appends the string to the end of the array

// input: ["take notes", "pay attention", "practice", "take breaks"], "ask questions"
// output: ["take notes", "pay attention", "practice", "take breaks", "ask questions"]

describe("becomeADeveloper", () => {
  it("takes in an array and a string and appends the string to the end of the array", () => {
    let developerList = ["take notes", "pay attention", "practice", "take breaks"]
    let developerString = "ask questions"
    let result = ["take notes", "pay attention", "practice", "take breaks", "ask questions"]
    expect(becomeADeveloper(developerList, developerString)).toEqual(result)
  })
})

// ReferenceError: becomeADeveloper is not defined - Good failure!

// Pseudocode:
// Create a function called becomeADeveloper
// 2 Parameters: array, string
// Could use .push - mutator
// Or can use .concat - accessor that combines the two items
// return result

const becomeADeveloper = (array, string) => {
  return array.concat(string)
}


//______________
// Prompt: Create a function that allows a customer to filter the cost of an item dynamically by selecting a cost range

// input: [10, 22, 33, 94, 46, 55, 42, 100, 570, 2], 15, 35
// output: [22, 33]


describe("priceFilter", () => {
  it("allows a customer to filter the cost of an item dynamically by selecting a cost range", () => {
    let prices = [10, 22, 33, 94, 46, 55, 42, 100, 570, 2]
    expect(priceFilter(prices, 15, 35)).toEqual([22, 33])
  })
})


// ReferenceError: priceFilter is not defined - Good failure

// Pseudocode: 
// Create a function called priceFilter
// 3 parameters: array, lowestPriceNum, maxPriceNum
// Use filter on the array to check if the price falls between lowestPriceNum or maxPriceNum
// Return result

// function called priceFilter that has 3 parameters: array, lowestPriceNum, maxPriceNum
const priceFilter = (array, lowestPriceNum, maxPriceNum) => {
  //  return an array that is filtered using .filter HOF
  return array.filter(value => {
    // evaluate if the current value we are iterating on is greater than the lowestPriceNum AND also less than the maxPriceNum
    return value > lowestPriceNum && value < maxPriceNum
  })
}


// ________________
// Prompt: Create a function that takes in an array of names and a string of a letter and returns an array of only the values that contain the string


describe("filterNames", () => {
  it("takes in an array of names and a string of a letter and returns an array of only the values that contain the string", () => {
    const names = ["Elyse", "Gene", "Jacob", "Michael", "Jeffrey", "Ledarrien"]
    expect(filterNames(names, "a")).toEqual(["Jacob", "Michael","Ledarrien"])
    expect(filterNames(names, "e")).toEqual(["Elyse", "Gene", "Michael", "Jeffrey", "Ledarrien"])
  })
})

// Pseudocode:
// input: array, letter
// Create a function called filterNames
// Filter over array and return only the values that include the letter using .includes

const filterNames = (array, letter) => {
  return array.filter(name => {
    return name.includes(letter)
  })
}