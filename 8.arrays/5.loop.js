var people = ["Scott", "Adam", "Tuan"]

/**
 * ? using for loop
 */
console.log('********** For Loop ************')
for(var i=0; i<people.length; i++){
    console.log(people[i], i)
}

/**
 * ? using forEach
 */
 console.log('********** ForEach ************')
 people.forEach(function(value, index){
    console.log(value, index)
 })

/**
 * ? using forEach
 */
 console.log('********** Map ************')
 people.map(function(value, index){
    console.log(value, index)
 })

 var fruits = ["Oranges", "Apples", "Bananas", "Guava"]

 var value1 = fruits.forEach(function(value, index){
    return value + ' ' + index
 })

 console.log(value1)

 var value2 = fruits.map(function(value, index){
    // return {
    //     id: index,
    //     name: value
    // }
    return [value, index]
 })

 console.log(value2)

 /**
 * ? using for...of
 */

 for(var value of people){
     console.log(value)
 }

 
 /**
 * ? using for...in
 */

for(var index in people){
    console.log(index)
}

 /**
 * ? using for using both index and value
 */


for(var [index, value] of people.entries()){
    console.log(index, value)
}