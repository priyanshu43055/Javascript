// Spread Operator ... Unpacks elements from an array

const odd =[1,3,5]
const combined = [2,4,6, ...odd]

console.log(combined)

// Rest operator ... Packs elelements into array

function display(a,b,c, ...uma){
    console.log(uma)
}

display(1,2,3,4,5,6)

let initialChars = ['A', 'B']

let chars = [...initialChars, 'C', 'D']

console.log(chars)

// Concatenate Arrays
let numbers =[1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// Copy an array
let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// with strings
let newChars = ['A', ...'BCDE', 'F']
console.log(newChars)