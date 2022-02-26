function greet(message){
    var city = "Boston"
    return function(name){
        return message + ' ' + name + ' to ' + city
    }
}

var sayHello = greet("Welcome")
console.log(sayHello)

var wish = sayHello("Scott")
console.log(wish)

var wish = sayHello("Adam")
console.log(wish)