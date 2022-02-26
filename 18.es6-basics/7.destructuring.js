// Array Destructuring

let names = ["scott", "adam", "Tuan"]

let [name1, name2, name3] = names

console.log(name1) // sets name1 to array[0]
console.log(name2) // sets name2 to array[1]
console.log(name3) // sets name3 to array[2]

let [firstName, lastName] = "John Galt".split(' ')

console.log(firstName)
console.log(lastName)

let [name, , title1] = ["Scott", "Boston", "Great Boss"]
console.log(name)
//console.log(city)
console.log(title1)

// Object destructuring 

let user = {
    username: 'Scott',
    age: 45
}

for(let [key, value] of Object.entries(user)){
    console.log(`key is ${key} and value is ${value}`)
}

let {username, age} = user

console.log(username)
console.log(age)

let options = {
    title :'Menu',
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title, width, height)