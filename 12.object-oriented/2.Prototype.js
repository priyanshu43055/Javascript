function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName 
    // }
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName 
}

Student.prototype.city = "Boston"

var student1 = new Student('Scott', 'Desatnick')
console.log(student1)
console.log(student1.getFullName())

var student2 = new Student('Adam', 'Colson')
console.log(student2)
console.log(student2.getFullName())

var student3 = new Student('Tuan', 'Bui')
console.log(student3)
console.log(student3.getFullName())