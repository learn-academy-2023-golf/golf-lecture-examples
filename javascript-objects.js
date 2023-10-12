// JavaScript Objects

  // Primitive Data Types
    // Null
    // Boolean
    // String
    // Undefined
    // Number
    // Symbol

console.log(typeof [1, 2, 3]) // object

// Object - data type is a collection of things
  // Arrays - values can be located by index [1, 2, 3]
  // Object - we match up values to a name called a key
      // {key: value}
      // Stored in curly braces
      // Key value pairs

// h1 {
//   color: "purple"
// }

// let myObject = {key1: "value1", key2: "value2", key3: "value3"}
// console.log(myObject)

// Symbol - unique identifier, often used as keys in objects
  // Key holds the value
  // Value is any valid data type in JavaScript

  let myObject = {
    key1: "value1", 
    key2: "value2", 
    key3: "value3",
    key4: 7,
    key5: true
  }

  console.log(myObject)

// ______________
// Accessing values:
console.log(myObject.key2) // value2
console.log(myObject.key4) // 7
console.log(myObject.key1, myObject.key3)  // value1 value3

// ____________
// Nested Objects

let breakfast = {
  item1: "oatmeal",
  item2: "eggs",
  item3: "bacon",
  item4: {
    beverage1: "coffee",
    beverage2: "tea",
    beverage3: "grapefruite juice",
    beverage4: {
      smoothie1: "strawberry banana",
      smoothie2: "mango",
      smoothie3: "green"
    }
  }
}

console.log(breakfast)
console.log(breakfast.item1)
console.log(breakfast.item4)
console.log(breakfast.smoothie1) // undefined
console.log(breakfast.item4.beverage4.smoothie1) // strawberry banana
console.log(breakfast.item4.beverage4.smoothie2) // mango
console.log(breakfast.item4.beverage4.smoothie3) // green

//______________
// Object Destructuring - creating a defined pathway through a nested object to use a shortcut
// console.log(smoothie1) // Error
let { smoothie1, smoothie3 } = breakfast.item4.beverage4
console.log(smoothie1)
console.log(smoothie1)
console.log(smoothie1)
console.log(smoothie1)
console.log(smoothie3)

let { beverage4 } = breakfast.item4
console.log(beverage4) // {smoothie1: 'strawberry banana', smoothie2: 'mango',smoothie3: 'green'}

// ____________
// Objects are the interstion of data and behavior
// Methods are functions or behavior that belongs to an object
// "this" - refrencing the object name when you are inside the object

let numbers = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  },
  myObject: function() {
    return this
  }
}

console.log(numbers.num2) // 10
console.log(numbers.addUp()) // 30
console.log(numbers.myObject()) // returns the entire object


// _____________
// Arrays with Objects
const shoppingList = [
  { name: "beans", price: 2 },
  { name: "rice", price: 10 },
  { name: "socks", price: 15 },
  { name: "sheets", price: 40 },
  { name: "grill", price: 500}
]

// Creating a function called shoppingCart that has 3 parameters
const shoppingCart = (array, minPrice, maxPrice) => {
  // Take the array and filter through the objects
  return array.filter(itemObject => {
    // itemObject on the first iteration is  { name: 'beans', price: 2 }
    // Use dot notation to access price
    // itemObject.price on the first iteration is 2
    // Since we have price set as a number, we can perform evaluations inside our filter to check if it is greater than minPrice AND less than maxPrice
    // return result
    console.log(itemObject.price)
    return itemObject.price > minPrice && itemObject.price < maxPrice
  })
}

console.log(shoppingCart(shoppingList, 10, 50)) // [ { name: 'socks', price: 15 }, { name: 'sheets', price: 40 } ]
console.log(shoppingCart(shoppingList, 0, 30)) // [
//   { name: 'beans', price: 2 },
//   { name: 'rice', price: 10 },
//   { name: 'socks', price: 15 }
// ]