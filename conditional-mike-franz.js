// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
if(34/3 > 67/2) {  
    console.log(`${34/3} is greater than ${67/2}`)
} else if (34/3 < 67/2) {
    console.log(`${34/3} is less than ${67/2}`)
} else if (34/3 === 67/2) {
    console.log(`${34/3} and ${67/2} are the same`)
} else {
    console.log("not equal")
}
//11.333333333333334 is less than 33.5

// Does 5 evaluate to the same as "5"?

// Does 5 strictly equal "5"?

// Does !3 strictly equal 3?
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// Does "LEARN" contain the subset "RN"?
let greeting = "LEARN"
console.log(greeting.includes("RN"))
//true

// Does "LEARN" contain the subset "rn"?
console.log(greeting.includes("rn"))
//false

// Does "LEARN"[0] strictly equal "l"? 
console.log(greeting.indexOf ("l"))
//-1

// Modify the code from the previous question to return true.
console.log(greeting.indexOf ("L"))
// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.