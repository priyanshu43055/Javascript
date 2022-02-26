var person = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston',
    age:45
}

person.email ='scott@ef.com' // ADD
person.firstName ="Lola" // UPDATE
delete person.age // DELETE
console.log(person) // READ

var student = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston',
    age:45,
    address: {
        country: 'USA'
    }
}

/**
 * ? Object.preventExtensions()
 * ? We can not add new properties
 * ? Update the existing properties
 * ? Delete the existing properties
 */


// var studentPreventExtension = Object.preventExtensions(student)

// studentPreventExtension.email ='scott@ef.com' // ADD
// studentPreventExtension.firstName ="Lola" // UPDATE
// delete studentPreventExtension.age // DELETE
// console.log(studentPreventExtension) // READ

/**
 * ? Object.seal()
 * ? We can not add new properties
 * ? Update the existing properties
 * ? We can't delete the properties
 */


//  var studentSeal = Object.seal(student)

//  studentSeal.email ='scott@ef.com' // ADD
//  studentSeal.firstName ="Lola" // UPDATE
//  delete studentSeal.age // DELETE
//  console.log(studentSeal) // READ

 /**
 * ? Object.freeze()
 * ? We can't add new properties
 * ? We can't update the properties
 * ? We can't delete the properties
 */


  var studentFreeze = Object.freeze(student)
                      Object.freeze(student.address)
  studentFreeze.email ='scott@ef.com' // ADD
  studentFreeze.firstName ="Lola" // UPDATE
  delete studentFreeze.age // DELETE
  studentFreeze.address.country ='Canada'
  console.log(studentFreeze) // READ

  var studentStringify = JSON.stringify(studentFreeze)
  var studentParse = JSON.parse(studentStringify)
  console.log(studentStringify)
  console.log(studentParse)

  studentParse.firstName ='Great Scott'

  console.log(studentParse)