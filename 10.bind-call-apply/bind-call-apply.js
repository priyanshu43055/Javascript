var person1 = {name: "Scott", skill: 'Great Boss'}
var person2 = {name: "Adam", skill: 'Business Analyst'}
var person3 = {name: "Tuan", skill: 'Tech Boss'}

function display(message, city){
    return message + ' ' +  this.name + ' ' + this.skill + ' to '  + city
}

var getUserByBind = display.bind(person1)
console.log(getUserByBind("Welcome", "Boston"))


var getUserByBindOne = display.bind(person1,"Hola", "Texas")
console.log(getUserByBindOne())


var getUserByCall = display.call(person2, "Welcome", "Sydney")
console.log(getUserByCall)

var getUserByApply = display.apply(person3, ["Welcome", "Sydney"])
console.log(getUserByApply)

var person = {
    name: 'Scott',
    getName: function(){
        console.log(this)
        this.name ='Desatnick'
        console.log(this)

        var updateName = function(){
            this.name ="Great Scott"
            console.log(this)

        }
         updateName.bind(this)()
    }
}

person.getName()

var person = {
    name: 'Scott',
    getName: function(){
        console.log(this)
        this.name ='Desatnick'
        console.log(this)

        var updateName = function(){
            this.name ="Great Scott"
            console.log(this)

        }.bind(this)
         updateName()
    }
}

person.getName()