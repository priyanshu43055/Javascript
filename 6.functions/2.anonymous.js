// function getName(){
//     return "here is your name"
// }
// var getName = "uma"
// var getName;
// var getName = "Scott"
var getName = function (){
    return "here is your anonymous function"
}
console.log(getName())

 var getFullName = function(firstName, lastName){
     return firstName + ' ' + lastName
 }

 console.log(getFullName("Scott", "Desatnick"))
 console.log(getFullName("Adam", "Colson"))
 console.log(getFullName("Tuan", "Bui"))

 var sendMessage = function test(){
     return "Message Sent"
 }

 console.log(sendMessage())
 //console.log(test())