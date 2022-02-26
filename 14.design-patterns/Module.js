// var Module = (function(){

// })()

// console.log(Module)

// Private Methods

// var Module = (function(){

//     var privateMethod = function(){

//     }
    
// })()

// console.log(Module)

// return 

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }

//     return {
//         publicMethod : publicMethod
//     }
// })()

// console.log(Module)

// Anonymous Object Literal

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     return {
//         publicMethodOne : function(){

//         },
//         publicMethodTwo : function(){

//         },
//         publicMethodThree : function(){

//         }
//     }
// })()

// console.log(Module)

// Locally Scoped Object Literal


// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var myObj = {}

//     var privateMethod = function(){
        
//     }

//     myObj.someMethod = function(){

//     }

//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal


// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod: function(){

//         },
//         anotherMethod : function(){

//         }
//     }
//     return myObj
// })()

// console.log(Module)

// Revealing Module Pattern

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         some: someMethod,
//         another: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing Private Method

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }


    return {
        getMessage: publicMethod,

    }
})()

Module.getMessage('I am able access private method')