var person = {} // Object Literal Syntax

person["firstName"] ="Scott"
person["lastName"] ="Desatnick"

var cityName = "city"

person[cityName] = "Boston"

person.address = {} // Object Literal Syntax

person.address.state = "Massecchusets"
person.address.country = "USA"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.firstName)
console.log(person.lastName)
console.log(person.city)

console.log(person.address.state)
console.log(person.address.country)
console.log(person["address"]["country"])

person.getName =  function(){
    return "My name is Scott Desatnick"
}

person.isAdmin = true

person.colors = ["red", "blue", "yellow"]
person.total = null
person.property = undefined
person.id =1

var student = {
    id: 1,
    name: 'Scott Desatnick',
    isAdmin: true,
    getDetails: function(){
        return 'id: ' + this.id + 'name: ' + this.name
    },
    address : {
        state: 'Massecchusets',
        country: 'USA'
    },
    colors: ["red","blue", "yellow"]
}

console.log(student)