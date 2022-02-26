var data = [
             1,
             "Scott",
             true,
             null,
             undefined,
             function(name){
                return name
             },
             {
                 name: 'Scott'
             },
             ["red", "blue", "yellow"]
           ]


// access the object 
// access the array vale blue
// print "Scott likes Blue"

console.log(data[6].name + " Likes " + data[7][1])

// access the function in the array
// pass the object value name to that array
// print the output

var getName = data[5]
var name = data[6].name
var displayName = data[5](name)
console.log(displayName)

console.log(data[5](data[6].name))

