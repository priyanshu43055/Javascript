// function getTotal (){

// }

// var getCount = function(){
    
// }

// function confirm(){
//     return "Hello"
// }

var confirm = (function (message){
    return function(){
        return "Hello"
    }
})("Hello World")

console.log(confirm)
