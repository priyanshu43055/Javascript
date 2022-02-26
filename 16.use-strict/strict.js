'use strict'

var a =1;

console.log(this)

function sample(){
    console.log(this)
}

sample()

myFunction();

function myFunction() {
  var y = 3.14;   // This will also cause an error because y is not declared
}