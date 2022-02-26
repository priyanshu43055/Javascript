function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

var student1 = new Student("Scott", "Desatnick")
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.getFullName())

var student2 = new Student("Adam", "Colson")
console.log(student2.firstName)
console.log(student2.lastName)
console.log(student2.getFullName())