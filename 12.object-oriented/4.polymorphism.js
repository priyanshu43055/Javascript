/**
 * ? Ploymorphism
 * ! Method Over loading - function with differnet parameters - Not possible in Javascript
 * * Method Overriding - over riding the parents' method
 */

function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic Shape"
}

// Circle 

function Circle(){

}

Circle.prototype = new Shape()

Circle.prototype.draw = function(){
    return "I am Circle"
}

// Square 

function Square(){

}

Square.prototype = new Shape()

Square.prototype.draw = function(){
    return "I am Square"
}

// Triangle 

function Triangle(){

}

Triangle.prototype = new Shape()

// Triangle.prototype.draw = function(){
//     return "I am Triangle"
// }

var shape = new Shape()
console.log(shape.draw())

var circle = new Circle()
console.log(circle.draw())

var square = new Square()
console.log(square.draw())

var triangle = new Triangle()
console.log(triangle.draw())

console.log('*************')
var shapes = [new Shape(), new Circle(), new Square(), new Triangle()]
shapes.forEach(function(shape){
    console.log(shape.draw())
})