// let add = function(x,y){
//     return x + y
// }

// let add = (x,y) =>{
//     return x + y
// }

//let add = (x,y) => x + y

let add = (x,y) => { return x + y}

console.log(add(20,30)) 

/**
 * ? () => expression
 * ? () => {return expression}
 */

// sort an array

let numbers = [4,2,6]

    numbers.sort(function(a,b){
        return b-a
    })

    console.log(numbers)

let moreNumbers = [4,2,6]

    moreNumbers.sort((a,b) => b-a)

    console.log(moreNumbers)

// Taking single parameters
/**
   * ? (p1) => statements
   * ?  p1 => statements
 */

let names = ["Scott", "Adam", "Tuan", "Uma"]

let lengths = names.map(name =>name.length)

console.log(lengths)

// With no Params

let logDocument = () => console.log(window.document)

logDocument()

// Line breaks

// let multiply = (x,y)  // This will give syntax error
// => x*y

let multiply = (x,y)  => // valid syntax
 x*y

 console.log(multiply(2,3))

// Object literal

// let setColor = function(color){
//     return {value: color}
// }

// let backGroundColor = setColor('green')
// console.log(backGroundColor)


let setColor = (color) => ({value: color})


let backGroundColor = setColor('green')
console.log(backGroundColor)