/**
 *  ? Class
 */
function Student(){

}

/**
 *  ? Instance
 */

function Person(){

}

var person1 = new Person() // person1 is an instance of the class
var person2 = new Person() // person2 is an instance of the class

/**
 *  ? Constructor
 */

function Order(){
    console.log('Order Initiated')
}

var order = new Order() // Order() is called constructor

/**
 *  ? Properties
 */

function Customer(gender){
    this.gender = gender // this.gender is a property
}

var customer1 = new Customer('Female')
console.log(customer1)

var customer2 = new Customer('Male')
console.log(customer2)
