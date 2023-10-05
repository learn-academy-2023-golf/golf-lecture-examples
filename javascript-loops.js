// JavaScript Loops 10/5/2023

// iteration - repeating a process a particular number of times or until a condition is met

// for loop - iterator
// for(){
// }

// for loops are really good at counting
// where do we start
// where do we end
// how do we get from the beginning to the end

// for(let count = 1; count < 10; count = count + 1){
//   console.log(count)
// }

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// for(let count = 1; count <= 10; count = count + 1){
//   console.log(count)
// }
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// for(let count = 10; count <= 20; count = count + 2){
//   console.log(count)
// }
// 10
// 12
// 14
// 16
// 18
// 20

// for(let count = 0; count <= 5; count++){
//   console.log(count)
// }
// 0
// 1
// 2
// 3
// 4
// 5

// var stoppingNumber = 10

// var myArrays = ["yo", "hello", "hi", "hey", "hola"]
// myArrays.length

// for(let count = 0; count < myArrays.length; count++){
//   console.log(count)
// }
// 0
// 1
// 2
// 3
// 4

// for(let count = 0; count < myArrays.length; count++){
//   console.log(myArrays[count])
// }
// yo
// hello
// hi
// hey
// hola


// var myArrays = ["yo", "hello", "hi", "hey", "hola", "yoooo!", "sup"]

// for(let count = 0; count < myArrays.length; count++){
//   // console.log(`${myArrays[count]}!!!!!!`)
//   console.log(myArrays.toUpperCase())
//   // TypeError: myArrays.toUpperCase is not a function
//   console.log(myArrays[count].toUpperCase())
// }
// YO
// HELLO
// HI
// HEY
// HOLA
// YOOOO!
// SUP


var myArrays = ["yo", "hello", "hi", "hey", "hola", "yoooo!", "sup"]

// for(let count = 0; count < myArrays.length; count++){
//   console.log(myArrays[count].length)
// }
// 2
// 5
// 2
// 3
// 4
// 6
// 3

// for(let count = 0; count < myArrays.length; count++) {
//   if(myArrays[count].length % 2 === 0) {
//     console.log(myArrays[count])
//   }
// }
// yo
// hi
// hola
// yoooo!

// each (make a decision about each item or do something to each item) - iteration
// decision - conditional statement


var myNumberArray = [100, 200, 578, 4723, 482, 292, 42]

// add 10 to every number

for(let i = 0; i < myNumberArray.length; i++){
  console.log(myNumberArray[i] + 10)
}
// 110
// 210
// 588
// 4733
// 492
// 302
// 52

// i = i + 1 === i++
// 0 = 0 + 1
// 1 = 1 + 1
// 2 = 2 + 1
// 3 = 2 + 1

// what is the relationship between a length and the last index of an array (or a string)?
var arrayLength = [1, 2, 3, 4, 5, 6]
var arrayIndex = [0, 1, 2, 3, 4, 5]