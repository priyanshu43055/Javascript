var employee = {
    id: 1,
    greet: function(){
        console.log(this.id)
    }
}

employee.greet()

// use settimeout

var employee = {
    id: 1,
    greet: function(){
        var self = this
        setTimeout(function(){
            console.log(self.id)
        },1000)
    }
}

employee.greet()

// Bind
var employee = {
    id: 1,
    greet: function(){
        setTimeout(function(){
            console.log(this.id)
        }.bind(this),1000)
    }
}

employee.greet()

// fat arrow function
var employee = {
    id: 1,
    greet: function(){
        console.log(this)
        setTimeout(() =>{
            console.log(this.id)
        },1000)
    }
}

employee.greet()