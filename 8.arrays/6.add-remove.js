var array =[1,2,3]

array.push(4)
array.push(5)
array.push(6)

array.unshift(0)
array.unshift(-1)
array.unshift(-2)

array.pop()
array.pop()
array.pop()

array.shift()
array.shift()
array.shift()



// splice

array.splice(1, 0, 4)
array.splice(1, 0, "scott")
[1,"scott", 4, 2,3]
array.splice(1,2)

console.log(array)

// slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(0, 5);


console.log(citrus)

