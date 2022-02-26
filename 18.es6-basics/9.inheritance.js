class Shape{
    constructor(){

    }

    draw=()=>{
        return "This is a generic shape"
    }
}

class Circle extends Shape {
    constructor(){
        super()
    }

    // draw=()=>{
    //     return "This is a Circle"
    // }
}

let circle = new Circle()
console.log(circle.draw())