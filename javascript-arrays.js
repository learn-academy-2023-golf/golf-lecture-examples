// JavaScript Arrays 10/5/2023

// JavaScript data type - primitive data types cannot be broken down
// Boolean, number, undefined, string, null, symbol

// properties - how data types are defined
// behavior - what we can do with them, behavior is limited by the properties

// "hello".length
// 5
// 4.length
// VM169:1 Uncaught SyntaxError: Invalid or unexpected token
// "hello".toUpperCase()
// 'HELLO'
// true.toUpperCase()
// VM278:1 Uncaught TypeError: true.toUpperCase is not a function
//     at <anonymous>:1:6
// (anonymous) @ VM278:1
// 5 + 8
// 13
// "hello" + "!"
// 'hello!'
// var num = 7
// undefined
// num
// 7
// num.toupperCase()
// VM411:1 Uncaught TypeError: num.toupperCase is not a function
//     at <anonymous>:1:5
// (anonymous) @ VM411:1
// num === 7
// true
// num + 6
// 13


// abstraction - data can change names and shapes but it is still the data type

// typeof 9
// 'number'
// var num = 6
// undefined
// num
// 6
// typeof num
// 'number'
// typeof "hello"
// 'string'
// typeof true
// 'boolean'

// [] - arrays are defined by square brackets, collections, elements inside the array are comma separated
// console.log([]) // array with nothing inside
// console.log([3]) // array with one thing
// console.log([true]) // array with one thing
// console.log([true, "hello", "yo!", 4, 5, true, null, [9, 0]].length)
// --> 8, the number of elements inside the array
// console.log([true, "hello", "yo!", 4, 5, true, null, [9, 0]])
// var myArray = [true, "hello", "yo!", 4, 5, true, null, [9, 0]]
// console.log(myArray)
// [ true, 'hello', 'yo!', 4, 5, true, null, [ 9, 0 ] ]
// [ true, 'hello', 'yo!', 4, 5, true, null, [ 9, 0 ] ]
// --> the two console logs hold the same data - abstraction


// console.log([true, "hello", "yo!", 4, 5, true, null, [9, 0]].length)

// var myArray = [true, "hello", "yo!", 4, 5, true, null, [9, 0]]
// console.log(myArray.length)
// 8
// 8
// --> the output is the same - abstraction


// var myArray = [true, "hello", "yo!", 4, 5, true, null, [9, 0]]
// --> zero indexed
// console.log(myArray[0])
// --> true
// console.log(myArray[3])
// --> 4
// console.log(myArray[7])
// --> [ 9, 0 ]
// console.log(myArray[7][0])
// --> 9

// console.log(typeof myArray[7][0])
// --> number
// console.log(typeof myArray[0])
// --> boolean
// console.log(typeof myArray[1])
// --> string


// var myArray = [true, "hello", "yo!", 4, 5, true, null, [9, 0]]
// console.log(myArray[0])
// --> true
// myArray[0] = false
// console.log(myArray[0])
// console.log(myArray)
// --> [ false, 'hello', 'yo!', 4, 5, true, null, [ 9, 0 ]]



// var myArray = [true, "hello", "yo!", 4, 5, true, null, [9, 0]]
// console.log(myArray.pop())
// --> [ 9, 0 ]
// pop - removes the last item in an array
// console.log(myArray)
// --> [ true, 'hello', 'yo!', 4, 5, true, null ]

// myArray.push("hello golf!")
// push - adds an item to the end of the array, always takes an argument
// console.log(myArray)
// -->  true, 'hello', 'yo!', 4, 5, true, null, [ 9, 0 ], 'hello golf!' ]

// myArray.reverse()
// reverse - flips the indexes in an array
// console.log(myArray)
// -->  [ 9, 0 ], null, true, 5, 4, 'yo!', 'hello', true ]

// console.log(myArray.slice(3, 5))
// --> [ 4, 5 ]
// slice takes a subset of the array, one argument - start of the slice, the second argument is the end of slice (optional)
// myArray = myArray.slice(3, 5)
// console.log(myArray)
// --> [ true, 'hello', 'yo!', 4, 5, true, null, [ 9, 0 ] ]

// mutators - change the element they are called on
// accessors - that don't

// concat is an accessor method
// var myArray = [true, "hello", "yo!", 4, 5, true, null, [9, 0]]
// var myOtherArray = ["hi", "hola", 4, 6, 900]
// myArray.concat(myOtherArray)
// console.log(myArray)
// --> [ true, 'hello', 'yo!', 4, 5, true, null, [ 9, 0 ] ]
// console.log(myArray.concat(myOtherArray))
// --> [
//   true,   'hello',  'yo!',
//   4,      5,        true,
//   null,   [ 9, 0 ], 'hi',
//   'hola', 4,        6,
//   900
// ]
// var comboArray = myArray.concat(myOtherArray)
// console.log(myArray)
// console.log(myOtherArray)
// console.log(comboArray)


// var myCohort = "Golf 2023"
// reverse this string
// myCohort.reverse()
// console.log(myCohort)
// TypeError: myCohort.reverse is not a function

// console.log(myCohort.split())
// --> [ 'Golf 2023' ]

// console.log(myCohort.split(""))
// --> [ 'G', 'o', 'l', 'f', ' ', '2', '0', '2', '3 ]
// var cohortArray = myCohort.split("")
// cohortArray.reverse()
// console.log(cohortArray)
// --> [ '3', '2', '0', '2', ' ', 'f', 'l', 'o', 'G']
// console.log(cohortArray.join())
// --> 3,2,0,2, ,f,l,o,G

// console.log(cohortArray.join(""))
// --> 3202 floG



var myCohort = "Golf 2023"
var myReversedString = myCohort.split("").reverse().join("")
console.log(myReversedString)