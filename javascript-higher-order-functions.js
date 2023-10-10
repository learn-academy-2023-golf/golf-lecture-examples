// Javascript Higher Order Functions 

// Built in methods - premade functions , easily invokable (some take additional info, some dont)

// array - collection of data


// Iteration - process of performing an action a certain number of times or until a condition is met

// Higher order functions (HOF) 
  // called on arrays
  // another method, tool, to iterate
  // is a function that takes a function as an argument (AKA function within function)


// .forEach
  // great if we want to do something to each element in an array

  // () => {}  anonymous function, function that is not defined or set to a variable

  // value - value is the current value in the iteration process( array[i]), the required argument

  // [2, 3, 4, 5].forEach((value) => {
  //   console.log(value)
  // })

  // index - is the current index in the iteration process(i)
  // array - allows us to pass the array the HOF was called on 


  // [2, 3, 4, 5].forEach((value, index, array) => {
  //   console.log("value:", value)
  //   console.log("index:", index)
  //   console.log("array:", array)  
  // })

  // The order of arguments will ALWAYS be value, index, array BUT they can be called anything

  // [2, 3, 4, 5].forEach((apple, banana, cherry) => {
  //   console.log("value:", apple)
  //   console.log("index:", banana)
  //   console.log("array:", cherry)  
  // })

// .map
  // iterates over each element and will return a new array of the same length

  const myArray = [10, 33, 42, -5]

  const mappedArray = myArray.map((value) => {
    return value * 2
  })

  console.log(mappedArray)
  console.log(myArray)

  // We can use implicit return and rewrite our previous code into one line
  const mappedArrayVersionTwo = myArray.map(value => value * 2)

  console.log(mappedArrayVersionTwo) // [ 20, 66, 84, -10 ]

  // Create a function that takes in an array of numbers and will display "even" or "odd" depending on what the number is

  // Pseudocode
    // Input : myArray
    // Output : ["even", "odd", "even", "odd"]

    // declare a function evenOrOdd
    // set array as parameter
    // use .map to iterate on my array
    // use a conditional statement
      // evaluate if a number is even or odd , modulo 
      // return the appropriate response

    const evenOrOdd = (array) => {
      return array.map(value => {
        if(value % 2 === 0 && typeof value === "number") {
          return "even"
        } else if(value % 2 !== 0 && typeof value === "number") {
          return "odd"
        } else {
          return "Oops something went wrong. Please enter a number"
        }
      })
    }

    console.log(evenOrOdd(myArray)) // [ 'even', 'odd', 'even', 'odd' ]
    console.log(evenOrOdd([ 0, 5, 10, 15, ""])) // [ 'even', 'odd', 'even', 'odd', 'even' ]

// .filter

    // iterate over an array, and return only what we want
    // it has a built in conditional statement
    // returns a subset of the array

  const newArray = [0, 5, 10, 15, -15]

  // create a function that returns only the odd numbers

  // pseudocode
  // input : newArray
  // output : [5, 15, -15]

  // declare a function called onlyOdd
  // parameter : array
  // filter will take care of our iteration
    // use modulo to determine if number is odd

  const onlyOdd = (array) => {
    return array.filter(value => value % 2 !== 0)
  }

  console.log(onlyOdd(newArray)) // [ 5, 15 ]

  const items = ["cups", "plates", "forks"]

  const forksOnly = (array) => {
    return array.filter(value => value === "forks")
  }

  console.log(forksOnly(items))