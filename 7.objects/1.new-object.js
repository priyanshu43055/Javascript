var person = new Object()

person["firstName"] ="Scott"
person["lastName"] ="Desatnick"

var cityName = "city"

person[cityName] = "Boston"

person.address = new Object()

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