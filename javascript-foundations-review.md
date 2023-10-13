# Week 2 Review

## Functions Loops and Arrays
- Functions, loops, and arrays: big picture takeaway was to cipher through index in conjunction with for loops and arrays, encapsulation.
- Encapsulation: Information, data, or variables available within a specific scope.
- Scope: range - code block.  Gloabl scope is available to the whole file, function scope makes information is only available within that block.

## Higher Order Functions
- higher-order function: function that takes in a function as an argument.  Passing an anonymous function as an argument () => {}
- .map(): takes an array and returns an array of equal length
- .filter(): takes an array and returns a subset of the array.  Has a built in conditional statement
- type coercion: JavaScript converts the datatype to create an output when possible
- falsy: Using type coercion, JavaScript is evaluating values as false that may not be a number.  Ex: "", 0, null, false
- truthy: Using type coercion, JavaScript is evaluating values as true that may not be a number. Ex: "Hi", numbers that are not 0, true

## JEST
- test driven development (TDD): red-green-refactor
- red-green-refactor: Write the test, see it fail, write code to pass the test, see it pass, refactor code to be as clean as possible but still passes the test.
- Jest: JavaScript Testing Framework
- dependencies: snippits of code - package
- yarn: package manager
- package manager: installs the dependencies and gives us the terminal commands to execute the tests

## Objects
- key:value pairs: they make up an object 
  - key: property or attribute.  Special variable in an object 
  - value: determination of what the key is worth in an object.  The data that is assigned to a key.
- methods: functions that is encapsulated in an object or belongs to an object.
- dot notation: allows us to access the value in an object by referencing the key.
- this: references the object while inside object
- destructuring: creating a defined pathway, shortcut

## Classes
- class: blueprint for object
- object: an intersection of data and behavior.  Instance of a class
- constructor: initializes parameters to create data within a class
- new: keyword that allows us to create a new instance of the class
- PascalCase: naming convention for classes where first letter of each word is capitalized