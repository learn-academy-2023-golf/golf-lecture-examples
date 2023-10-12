// JavaScript Classes 10/12/2023

// template or blueprint for objects

// functions determine when code runs
// dynamic code - allowing code to change and ensuring your logic still works

// PascalCase - first letter is upper cased, the casing convention for classes beyond just JavaScript

// defined our class
// constructor methods are specifically used in classes to create data
// class DoingMath {
//   constructor() {
//   }
// }

// instantiation - creating an object, keyword new
// console.log(new DoingMath)
// --> DoingMath {}

// var myClass1 = new DoingMath
// console.log(myClass1)
// --> DoingMath {}
// var myClass2 = new DoingMath
// console.log(myClass2)
// --> DoingMath {}

// using this to add variables to the class
// class DoingMath {
//   constructor() {
//     this.num1 = 5,
//     this.num2 = 4,
//     this.num3 = 8
//   }
// }

// var myClass1 = new DoingMath
// console.log(myClass1)
// // --> DoingMath { num1: 5, num2: 4, num3: 8 }
// var myClass2 = new DoingMath
// console.log(myClass2)
// // --> DoingMath { num1: 5, num2: 4, num3: 8 }

// add a method
// class DoingMath {
//   constructor() {
//     this.num1 = 5,
//     this.num2 = 4,
//     this.num3 = 8
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// var myClass1 = new DoingMath
// // console.log(myClass1)
// // --> DoingMath { num1: 5, num2: 4, num3: 8 }
// // console.log(myClass1.addUp)
// // --> [Function: addUp]
// console.log(myClass1.addUp())
// // --> 17
// console.log(myClass1.num3)
// // --> 8

// var myClass2 = new DoingMath
// console.log(myClass2)
// --> DoingMath { num1: 5, num2: 4, num3: 8 }


// creating dynamic code
// class DoingMath {
//   constructor(num1) {
//     this.num1 = num1,
//     this.num2 = 4,
//     this.num3 = 8
//   }
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// var myClass1 = new DoingMath(6)
// console.log(myClass1)
// --> DoingMath { num1: 6, num2: 4, num3: 8 }
// console.log(myClass1.addUp())
// --> 18

// var myClass2 = new DoingMath(10)
// console.log(myClass2)
// --> DoingMath { num1: 10, num2: 4, num3: 8 }
// console.log(myClass2.addUp())
// --> 22



class DoingMath {
  constructor(num1, num2) {
    this.num1 = num1,
    this.num2 = num2,
    this.num3 = 8
  }
  addUp() {
    return this.num1 + this.num2 + this.num3
  }
  largestNum() {
    return Math.max(this.num1, this.num2, this.num3)
  }
}


// var myClass1 = new DoingMath(6, 19)
// console.log("first object:", myClass1)
// // --> { num1: 6, num2: 19, num3: 8 }
// console.log("first object addup output:", myClass1.addUp())
// // --> 33
// console.log("first object largest output:", myClass1.largestNum())
// // --> 19

// var myClass2 = new DoingMath(10, 28)
// console.log("second object:", myClass2)
// // --> { num1: 10, num2: 28, num3: 8 }
// console.log("second object addup output:", myClass2.addUp())
// // --> 46
// console.log("first object largest output:", myClass2.largestNum())
// // --> 28



// if the class is not instantiated you can't do anything with it
console.log(DoingMath.largestNum())
// --> TypeError: DoingMath.largestNum is not a function