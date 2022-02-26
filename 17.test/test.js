// console.log(multiply(2)(3)(4)) // 2*3*4 = 24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }

var a=10 // Value Type 
var b=a
a=20

console.log(a)
console.log(b)

var a = [1,2] // Object
var b =a
a.push(3)

console.log(a)
console.log(b)

var a = [1,2]
var b =a
a = [1,2,3]

console.log(a)
console.log(b)

var name = 1 + 2 + "scott" + 3 +4

console.log(name)

// 12scott34
// 3scott34

var output = (function(x){
    delete x
    return x
})(1)

console.log(output)

var output = (function(x){
    delete x
    return x
})({a:1})

console.log(output)

var output = (function(x){
    delete x.a
    return x
})({a:1})

console.log(output)

// {}
// undefined
//

// Emprty an array

var array = ['a', 'b', 'c', 'd' ,'e', 'f']

//Method1
//array =[]

// Method2
// while(array.length){
//     array.pop()
//     // array.shift()
// }

//Method3
//array.splice(0,array.length)

// Method4
array.length =0
console.log(array)

console.error('There is an error')
console.warn('This is warning')
console.info('This is information')
console.table([{
    a:1,b:2
}])

// ternary operator 
let count =10

let message = count<=10? "Hello" : "Hey"

console.log(message)

// == and ===

console.log(1==1)
console.log(1=='1') // == Only checks for value
console.log(1==='1') // === Checks for value and datatype

console.log(1!='1')
console.log(1 !== '1')

// Converting string into an array
let message = 'Who is John Galt'.split(' ')
console.log(message)

// Converting an array into string
let newMessage = message.join(' ')
console.log(newMessage)


