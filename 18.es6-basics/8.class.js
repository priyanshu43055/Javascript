class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    hello(){
        return'This is hello method'
    }

    getFullname =() => {
        return `${this.firstName} ${this.lastName}`
    }

    getMessage = function(){
        return 'Here is the message for you'
    }
}

let student1 = new Student("Scott", "Desatnick")
console.log(student1)
console.log(student1.hello())
console.log(student1.getFullname())
console.log(student1.getMessage())