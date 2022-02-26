// // function Student(){
// //     console.log('Student instance is created')
// // }

// // var student1 = new Student()
// // student1.name ="Scott" 
// // console.log(student1)
// // var student2 = new Student()
// // student2.name ="Adam"
// // console.log(student2)
// // var student3 = new Student()
// // console.log(student3)
// // var student4 = new Student()
// // console.log(student4)

// var DBConnection = (function(){

//     var connection = null

//     var createConnection = function(){
//         var obj = new Object()
//         console.log('connection is created')
//         return obj
//     }

//     var getConnection = function(){
//         if(!connection){
//             connection = createConnection()
//         }
//         return connection
//     }

//     var obj = {
//         create: getConnection
//     }

//     return obj
// })()

// // console.log(DBConnection.create())
// // console.log(DBConnection.create())
// // console.log(DBConnection.create())
// // console.log(DBConnection.create())

// var connect1 =  DBConnection.create()
// connect1.name='connection is created'
// console.log(connect1)

// var connect2 =  DBConnection.create()
// connect2.name='connection is created again'
// console.log(connect2)

// var connect3 =  DBConnection.create()
// connect3.name='connection is created again and again'
// console.log(connect3)

var MongoDB = (function(){
    var connection = null

    var createConnection = function(){
        var mongoDbObj = new Object()
        console.log('A new connection is created')
        return mongoDbObj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    var obj = {
        create: getConnection
    }

    return obj
})()

console.log(MongoDB.create())
console.log(MongoDB.create())
console.log(MongoDB.create())
console.log(MongoDB.create())